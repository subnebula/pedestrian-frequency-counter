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
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    
        this.state = {
            activeKey: "add",
            show: false,
            devid: '',
            lat: '',
            lng: '',
            street: '',
            edit: false
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
        if(this.state.edit){
            this.props.dispatchEdit(
                {
                    devid: this.state.devid,
                    lat: this.state.lat,
                    lng: this.state.lng,
                    street: this.state.street
                }
            );
            this.setState({ edit: false });
        } else {
            this.props.dispatchSubmit(
                {
                    devid: this.state.devid,
                    lat: this.state.lat,
                    lng: this.state.lng,
                    street: this.state.street
                }
            );
        }
        
        this.handleCancel();
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

    handleEdit(node) {
        this.setState({ 
            activeKey: "add",
            edit: true,
            devid: node.properties.id,
            lat: node.geometry.coordinates[1],
            lng: node.geometry.coordinates[0],
            street: node.properties.description
        });
    }
    
    handleDelete(node) {
        this.props.dispatchDelete(node.properties.id)
    }
    handleShow() {
        this.setState(prevState => ({ 
            show: !prevState.show 
        }))
        this.props.handleClick();
    }
    
    render() {

        if (this.props.isLoggedIn){        
            return (
                <>
                    <button onClick={this.handleShow} >
                        Sensors
                    </button>

                    <Modal show={this.state.show} onHide={this.handleCancel} size="lg"> 
                        <Modal.Header closeButton>
                            <Modal.Title>Sensors</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Tabs defaultActiveKey="add" activeKey={this.state.activeKey} onSelect={activeKey => this.setState({ activeKey })}>
                                <Tab eventKey="add" title="Add a Sensor">
                                    <AddNodeForm 
                                        handleInputChange={this.handleInputChange}
                                        handleCancel={this.handleCancel}
                                        handleSubmit={this.handleSubmit}
                                        devid={this.state.devid}
                                        lat={this.state.lat}
                                        lng={this.state.lng}
                                        street={this.state.street}
                                        edit={this.state.edit}
                                    />
                                </Tab>
                                <Tab eventKey="view" title="View All Sensors">
                                    <NodeList
                                        markers={this.props.markers}
                                        handleEdit={this.handleEdit}
                                        handleDelete={this.handleDelete}
                                    />
                                </Tab>
                            </Tabs>
                            
                        </Modal.Body>
                    </Modal>
                </>
            );
        } else {
            return null;
        }
    }
}

export default AddNode
