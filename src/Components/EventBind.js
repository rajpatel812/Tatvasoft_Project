import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    }
    ClickHandler(){
        // this.setState({
        //     message:"good byer"
        // })
        console.log(this);
    }
    render() {
    return (
      <div>
        <button onClick={this.ClickHandler}>vlivk</button>
        {this.state.message}
      </div>
    )
  }
}

export default EventBind
