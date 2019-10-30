import React from "react"
import {Button} from "react-bootstrap"

class AddNodeForm extends React.Component {

    render(){

        const handleInputChange = (event) => {
            this.props.handleInputChange(event);
        }
        
        const handleCancel = () => {
            this.props.handleCancel();
        }

        const handleSubmit = (event) => {
            this.props.handleSubmit(event);
        }

        return(
            <form>
                <div className='form-group'>
                    <label>Device ID:</label>
                    <input className='form-control' name='devid' type='text' value={this.props.devid} 
                        onChange={handleInputChange}/>
                    <small id="devid help" className="form-text text-muted">
                        This should be the same device ID listed on The Things Network (Numbers only)
                    </small>
                </div>
                <div className='form-group'>
                    <label>Latitude:</label>
                    <input className='form-control' name='lat' type='text' value={this.props.lat}
                        onChange={handleInputChange}/>
                </div>
                <div className='form-group'>
                    <label>Longitude:</label>
                    <input className='form-control' name='lng' type='text' value={this.props.lng}
                        onChange={handleInputChange}/>
                </div>
                <div className='form-group'>
                    <label>Street Name/Description:</label>
                    <input className='form-control' name='street' type='text' value={this.props.street}
                        onChange={handleInputChange}/>
                </div>
                <div>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </form>
        );
    }
}

export default AddNodeForm