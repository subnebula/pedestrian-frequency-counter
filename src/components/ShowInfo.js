import React from 'react'

class ShowInfo extends React.Component {
    constructor( context) {
      super(context);
      this.handleInfo = this.handleInfo.bind(this);
    }

    handleInfo(e) {
        e.preventDefault();
        if(ShowInfo.confirm('This is the Infomation')) {
          console.log('Ok');
          return true;
        }
        return false;
      }

      render() {
        return (
            
             <a href={this.handleInfo} onClick={this.handleInfo} >
             System Info
             </a>
             
        )
      }
    }
export default ShowInfo;