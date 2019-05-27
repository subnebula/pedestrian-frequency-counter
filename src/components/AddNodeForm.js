import React from 'react'

class AddNodeForm extends React.Component {

    render(){

        const handleInputChange = (event) => {
            this.props.handleInputChange(event);
        }

        return(
            <form>
                <div className='form-group'>
                    <label>Device ID:</label>
                    <input className='form-control' name='devid' type='text' value={this.props.devid}
                        onChange={handleInputChange}/>
                    <small id="devid help" className="form-text text-muted">
                        This is the device ID from the things network
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
            </form>
        );
    }
}

export default AddNodeForm