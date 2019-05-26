import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import {addNode} from '../redux/reducers/markers'

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
        this.props.dispatch(
            addNode({
                devid: this.state.devid,
                lat: this.state.lat,
                lng: this.state.lng,
                street: this.state.street
            }));
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
                <Button className='absolute top left mt12 ml12 shadow' variant="light" onClick={this.handleShow}>
                    Add a Node
                </Button>
        
                <Modal show={this.state.show} onHide={this.handleCancel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add A Node</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className='form-group'>
                                <label>Device ID:</label>
                                <input className='form-control' name='devid' type='text' value={this.state.devid}
                                    onChange={this.handleInputChange}/>
                                <small id="devid help" class="form-text text-muted">
                                    This is the device ID from the things network
                                </small>
                            </div>
                            <div className='form-group'>
                                <label>Latitude:</label>
                                <input className='form-control' name='lat' type='text' value={this.state.lat}
                                    onChange={this.handleInputChange}/>
                            </div>
                            <div className='form-group'>
                                <label>Longitude:</label>
                                <input className='form-control' name='lng' type='text' value={this.state.lng}
                                    onChange={this.handleInputChange}/>
                            </div>
                            <div className='form-group'>
                                <label>Street Name/Description:</label>
                                <input className='form-control' name='street' type='text' value={this.state.street}
                                    onChange={this.handleInputChange}/>
                            </div>
                        </form>
                    </Modal.Body>
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
}

const AddNodeContainer = connect(
    state => ({
        markers: state.markers.data
      }),
  )(AddNode)

export default AddNodeContainer