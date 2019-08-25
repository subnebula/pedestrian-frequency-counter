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
        <a href={this.handClick} onClick={this.handClick} >
        Home
        </a>
        )
    }
}

      export default RefreshHome;