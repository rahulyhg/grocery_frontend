import React, { Component } from 'react';


class Header extends Component {
  render(){
    return(
      <div className="header">
        <h1>
          {this.props.currentView === 'shoppinglist' ? 'SHOPPING LIST' : 'REFRIGERATOR'}
        </h1>

        <ul>
          <li onClick={()=>{this.props.handleView('shoppinglist')}}>{this.props.listCount}<br/>SHOPPING LIST</li>

          <li
          onClick={()=>{this.props.handleView('refrigerator')}}>{this.props.fridgeCount}<br/>REFRIGERATOR</li>

        </ul>
      </div>
    )
  }
}

export default Header
