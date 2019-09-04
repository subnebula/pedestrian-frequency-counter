import React from 'react'
import {Modal, Tabs, Tab} from 'react-bootstrap';
import AddNodeForm from './AddNodeForm'
import NodeList from './NodeList'


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
        this.props.dispatchSubmit(
            {
                devid: this.state.devid,
                lat: this.state.lat,
                lng: this.state.lng,
                street: this.state.street
            });
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
        this.setState(prevState => ({ 
            show: !prevState.show 
        }))
        this.props.handleClick();
    }
    
    render() {
        
        return (
            <>
                <a href={this.handleShow} onClick={this.handleShow} >
                    Nodes
                </a>

                <Modal show={this.state.show} onHide={this.handleCancel} size="lg"> 
                    <Modal.Header closeButton>
                        <Modal.Title>Nodes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tabs defaultActiveKey="add" transition={false} id="noanim-tab-example">
                            <Tab eventKey="add" title="Add a Node">
                                <AddNodeForm 
                                    handleInputChange={this.handleInputChange}
                                    handleCancel={this.handleCancel}
                                    handleSubmit={this.handleSubmit}
                                    devid={this.state.devid}
                                    lat={this.state.lat}
                                    lng={this.state.lng}
                                    street={this.state.street}/>
                            </Tab>
                            <Tab eventKey="view" title="View All Nodes">
                                <NodeList
                                    markers={this.props.markers}/>
                            </Tab>
                        </Tabs>
                        
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default AddNode