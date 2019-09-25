import React from 'react'

class RefreshHome extends React.Component {
    constructor( context) {
      super(context);
      this.handClick = this.handClick.bind(this);
    }

     handClick() {
        window.location.reload(false);
      }
    
    render() {
        return(
          <button onClick={this.handClick} >
            Home
          </button>
        )
    }
}

export default RefreshHome;