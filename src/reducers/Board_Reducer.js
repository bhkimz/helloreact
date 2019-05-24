import { createAction, handleActions } from 'redux-actions';

import firebase, {firestore} from '../config/FireBase'; 

const BOARD_SAVE = 'SAVE';
const BOARD_REMOVE = 'REMOVE';
const BOARD_READ = 'READ';
const BOARD_LIST = 'LIST';

export const board_save = createAction(BOARD_SAVE);
export const board_remove = createAction(BOARD_REMOVE, brdno => brdno);
export const board_read = createAction(BOARD_READ);
export const board_list = createAction(BOARD_LIST);


export const firebase_board_list = () => {
    console.log("firebase_board_list:");
    return (dispatch) => {
        return firestore.collection('boards')
            .orderBy("brddate", "desc")
            .get()
            .then((snapshot) => {
                var rows = [];
                snapshot.forEach((doc) => {
                    var childData = doc.data();
                    childData.brddate = childData.brddate.toDate().toLocaleDateString('ko-KR');
                    rows.push(childData);
                });
                dispatch(board_list(rows));
            });
    }
}

export const firebase_board_remove = (brdno = {}) => { 
    return (dispatch) => { 
        return firestore.collection('boards')
            .doc(brdno)
            .delete()
            .then(() => {
                dispatch(board_remove(brdno));
            })
    }
};

export const firebase_board_save = ( data = {}) => {
    return (dispatch) => {
        if (!data.brdno) {
            console.log("1:"+  data); 

            var doc = firestore.collection('boards').doc();
            data.brdno = doc.id;
            data.brddate = firebase.firestore.Timestamp.now();
            return doc.set(data).then(() => {
                //data.brddate = dateFormat(data.brddate, "yyyy-mm-dd");
                data.brddate = data.brddate.toDate().toLocaleDateString('ko-KR');
                dispatch(board_save(data));
            })
        } else {
            console.log("2:"+  data); 
            data.brddate = firebase.firestore.Timestamp.now();
            return firestore.collection('boards').doc(data.brdno).update(data).then(() => {
                data.brddate = data.brddate.toDate().toLocaleDateString('ko-KR');
                dispatch(board_save(data));
            })            
        }
    }
};

const initialState = {
    boards: [],
    selectedBoard: {}
};

export default handleActions({
    [BOARD_LIST]: (state, { payload: data }) => {
        return {
            boards: data,
            selectedBoard: {}
        };
    },
    [BOARD_SAVE]: (state, { payload: data }) => {
        let boards = state.boards;
        let inx = boards.findIndex(row => row.brdno === data.brdno);
        if (inx===-1) {                                                    // new : Insert
            let newboards = [{date: new Date(), ...data }]
            return {boards: newboards.concat(boards), selectedBoard: {} };
        } else {                                                           // Update
            return {boards: boards.map(row => data.brdno === row.brdno ? {...data }: row), selectedBoard: {} };
        }    
    },
    [BOARD_REMOVE]: (state, { payload: brdno }) => {
        let boards = state.boards;

        return {
            ...state,
            boards: boards.filter(row => row.brdno !== brdno),
            selectedBoard: {}
        };
    },
    [BOARD_READ]: (state, { payload: brdno }) => {
        let boards = state.boards;
        return {
            ...state,
            selectedBoard: boards.find(row => row.brdno === brdno)
        };
    }
}, initialState);

