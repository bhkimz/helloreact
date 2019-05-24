import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardItem from './BoardItem';
import BoardForm from './BoardForm';
import { firebase_board_list } from './../../../reducers/Board_Reducer';

class Boardlist extends Component {
    componentDidMount() {
        this.props.dispatch(firebase_board_list());
    }

    render() {
        const { boards } = this.props;

        return (
            <div>
                <h3>React + Redux Board 1</h3>
                <BoardForm />
                <table border="1">
                    <tbody>
                        <tr align="center">
                            <td width="50">No.</td>
                            <td width="300">Title</td>
                            <td width="100">Name</td>
                            <td width="100">Date</td>
                            <td width="100">Del</td>
                        </tr>
                        {
                            boards.map((row, inx) =>
                                (<BoardItem key={inx} inx={inx+1} row={row}  />))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

// export default Boardlist;

// const mapStateToProps = ( state ) => {
//     return {
//         menu_data: state.xpg_menu.menu_data,
//         device: state.xpg_menu.device
//     }
// }

// const mapDispatchToProps = ( dispatch ) => {
//     // return bindActionCreators( actions, dispatch );
//     return {
//         HandleGetMenu: (value) => { dispatch( actions.receiveMenu(value) ) },
//         HandleSetDevice: (value) => { dispatch( actions.setDevice(value) ) }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


const mapStateToProps = (state) => {
    return {
        boards: state.Board_Reducer.boards,
        selectedBoard: state.Board_Reducer.selectedBoard
    };
}


export default connect(mapStateToProps)(Boardlist);

