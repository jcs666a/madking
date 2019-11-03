import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewToken extends Component {
    constructor() {
        super();
        this.state = {
            token: ''
        };
    }

    handleChange = (event) => {
        this.setState({token: event.target.value});
    }

    render() {
        const { updateToken } = this.props;
        return(
            <div>
                Nuevo token: <input type="Text" value={this.state.token} onChange={this.handleChange} />
                <button onClick={()=>{
                    updateToken(`Token ${this.state.token}`);
                }}>Actualizar</button>
            </div>
        );
    }
}

NewToken.propTypes = {
    updateToken: PropTypes.func
};

export default NewToken;
