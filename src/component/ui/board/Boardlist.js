import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardItem from './BoardItem';
import BoardForm from './BoardForm';

class Boardlist extends Component {
    // handleSaveData = (data) => {
    //     let boards = this.state.boards;
    //     if (data.brdno === null || data.brdno === '' || data.brdno === undefined) { // new : Insert 
    //         console.log("1 pre:" + this.state.maxNo);
    //         this.setState({
    //             maxNo: this.state.maxNo + 1,
    //             boards: boards.concat({ brdno: this.state.maxNo, brddate: new Date(), ...data })
    //         });

    //         console.log("2 afer:" + this.state.maxNo);
    //     } else {   // Update 
    //         this.setState({
    //             boards: boards.map(row => data.brdno === row.brdno ? { ...data } : row)
    //         })
    //     }
    // }

    // handleRemove = (brdno) => {
    //     this.setState({
    //         boards: this.state.boards.filter(
    //             row => row.brdno !== brdno)
    //     })
    // }

    // handleSelectRow = (row) => {
    //     this.setState({
    //         selectedBoard: row
    //     });
    // }

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
                            boards.map(row => 
                                ( <BoardItem key={row.brdno} row={row} />))
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
        boards: state.Board_Reducer.boards
    };
}


export default connect(mapStateToProps)(Boardlist);

