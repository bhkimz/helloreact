import React, { Component } from 'react';
import { connect } from 'react-redux';

import { firebase_board_save  } from './../../../reducers/Board_Reducer'; 

class BoardForm extends Component {
    state = {};
    initialSelectedBoard = {
        brdno: "",
        brdtitle: "",
        brdwriter: "",
        rddate: ""
    };

    handleChange = (e) => {
        console.log("handleChange  [e.target.name]:" +  [e.target.name] +"/e.target.value:" + e.target.value); 
        this.setState({ [e.target.name]: e.target.value });
    }
 
    handleSave = () => {
        this.props.dispatch(firebase_board_save(this.state));
        this.setState (this.initialSelectedBoard);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.selectedBoard);
    }

    render() {
        return (
            <div>
                <input placeholder="title" name="brdtitle" value={this.state.brdtitle} onChange={this.handleChange} />
                <input placeholder="name" name="brdwriter" value={this.state.brdwriter} onChange={this.handleChange} />
                <button onClick={this.handleSave}>Save</button> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { selectedBoard: state.selectedBoard };
}

export default connect(mapStateToProps)(BoardForm); 