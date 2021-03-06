import React, { Component } from 'react';
import UpdateList from './UpdateList'

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkView: 'uncheck',

    }
  }


  handleCheckView = (view)=>{
    this.setState({checkView: view})
  }


  render(){
    return (
      <React.Fragment>


        <tr>
          <td>
            {this.state.checkView === "check" ? <div className="red fa fa-check-square" onClick={()=>{this.handleCheckView('uncheck')}}></div> : <div className="fa fa-check-square" onClick={()=>{this.handleCheckView('check')}}></div>}
          </td>

          {this.state.checkView === 'check' ? <td className="linethrough">{this.props.item.item} </td> : <td>{this.props.item.item}</td>}
          <td>{this.props.item.category}</td>
          <td>{this.props.item.price}</td>
          <td>{this.props.item.quantity}</td>
          <td>{this.props.item.unit}</td>
          <td>{this.props.item.recipe}</td>
          <td>{this.props.item.have_at_home.length > 0 ?
            this.props.item.have_at_home.map((fridge_item, index)=>{
              return(
                <table key={index}>
                  <tbody>
                    <tr>
                      <td>{fridge_item.fridge_quantity}</td>
                      <td>{fridge_item.fridge_unit}</td>
                    </tr>
                  </tbody>
                </table>
              )
            }) : <table>
              <tbody>
                <tr>
                  <td>None</td>
                </tr>
              </tbody>
            </table>
          }
          </td>
            <td>
            { this.props.item.have_at_home.length > 0 ? this.props.item.have_at_home.map((fridge_item, index)=>{
                return(

                    <table key={index}>
                      <tbody>
                        <tr>
                          <td>{this.props.item.quantity - fridge_item.fridge_quantity}</td>
                        </tr>
                      </tbody>
                    </table>

                )
              }):
              <table>
                <tbody>
                  <tr>
                    <td>{this.props.item.quantity}</td>
                  </tr>
                </tbody>
              </table>

            }
            </td>
          <td>
            <UpdateList
              arrayIndex={this.props.index}
              item={this.props.item}
              handleListUpdate={this.props.handleListUpdate}
              listItems={this.props.listItems}
            /></td>

          <td>
            <div onClick={()=>{this.props.handleListDelete(this.props.item.id, this.props.arrayIndex, this.props.listItems)}} className="fas fa-trash-alt"></div></td>

        </tr>

      </React.Fragment>
    )
  }
}

export default ListItem
