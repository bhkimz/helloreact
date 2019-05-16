import React, {Component} from 'react';
import './MenuComp.css';

class MenuComp extends Component{ 
    render(){
        const style = {
          backgroundColor : 'red',
          border: '1px solid black', 
          left: 0, 
        }

        return( 
            <div className="Menu">
            {/* // <div style={style}> */}
            <ul>
                <li  onClick={this.props.onClick} className="MenuItem">
                     메뉴 1
                </li>
                <li onClick={this.props.onClick} className="MenuItem">
                     메뉴 2
                </li>
                <li onClick={this.props.onClick} className="MenuItem">
                     메뉴 3
                </li>
            </ul>
            </div>
        );
    }
}

export default MenuComp;