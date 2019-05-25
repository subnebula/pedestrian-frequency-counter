import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

class AddNode extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
            show: false,
            devid: '',
            lat: '',
            lng: '',
            street: ''
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        alert(this.state.devid);
        this.setState({ show: false });
        event.preventDefault();
    }
    
    handleCancel() {
        this.setState({ 
            show: false,
            devid: '',
            lat: '',
            lng: '',
            street: ''
        });
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    
    render() {
        return (
            <>
                <Button className='absolute top left mt12 ml12' variant="primary" onClick={this.handleShow}>
                    Add a Node
                </Button>
        
                <Modal show={this.state.show} onHide={this.handleCancel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add A Node</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <label>
                                Device ID: 
                                <input name='devid' type='text' value={this.state.devid}
                                    onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>
                                Latitude: 
                                <input name='lat' type='text' value={this.state.lat}
                                    onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>
                                Longitude: 
                                <input name='lng' type='text' value={this.state.lng}
                                    onChange={this.handleInputChange}/>
                            </label><br/>
                            <label>
                                Street Name: 
                                <input name='street' type='text' value={this.state.street}
                                    onChange={this.handleInputChange}/>
                            </label><br/>
                        </form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCancel}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    
/*     constructor(props) {
        super(props);
        this.state = {
            visible: true,
            devid: '',
            lat: '',
            lng: '',
            street: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
        alert(this.state.devid);
        event.preventDefault();
    }
    render(){
        if (this.state.visible){
            return(
                <form onSubmit={this.handleSubmit} className='absolute mx-auto bg-white shadow-darken10 round z1 w300 h300 mt12'>
                    <label>
                        Device ID: 
                        <input name='devid' type='text' value={this.state.devid}
                            onChange={this.handleInputChange}/>
                    </label><br/>
                    <label>
                        Latitude: 
                        <input name='lat' type='text' value={this.state.lat}
                            onChange={this.handleInputChange}/>
                    </label><br/>
                    <label>
                        Longitude: 
                        <input name='lng' type='text' value={this.state.lng}
                            onChange={this.handleInputChange}/>
                    </label><br/>
                    <label>
                        Street Name: 
                        <input name='street' type='text' value={this.state.street}
                            onChange={this.handleInputChange}/>
                    </label><br/>
                    <input type='submit' value='Submit'/>
                </form>
            );
        } else {
            return null;
        }
    }*/


} 

export default AddNode