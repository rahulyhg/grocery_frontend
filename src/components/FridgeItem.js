import React, { Component } from 'react';


class FridgeItem extends Component {
  render(){
    return(
      <React.Fragment>

        <div className="fridge_item">
          {this.props.item.fridge_item}<br/>
          {this.props.item.fridge_category}<br/>
          {this.props.item.fridge_quantity}<br/>
          {this.props.item.fridge_unit}
        </div>

        <div className="fridge_action">
          <button>delete</button>
        </div>

      </React.Fragment>

    )
  }
}

export default FridgeItem