import React from 'react'
import {Modal} from 'react-bootstrap';

class ShowInfo extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.handleShow = this.handleShow.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.state = {
        show: false
      };
    }
  

  handleShow() {
    this.setState(prevState => ({ 
        show: !prevState.show 
    }))
    this.props.handleClick();
}
  handleCancel() {
    this.setState({ 
    show: false
  });
}

      render() {
        return (
          <>
             <button onClick={this.handleShow} >
             System Info
             </button>
             <Modal show={this.state.show} onHide={this.handleCancel}>
             <Modal.Header closeButton>
                        <Modal.Title>System Infomation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                <label>This is our information</label>
                <p>Infomation sth sth....</p>
                   </div>
                    </Modal.Body>
                    </Modal>
             </> 
        )
      }
    }
export default ShowInfo;