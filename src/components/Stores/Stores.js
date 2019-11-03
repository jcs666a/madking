import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { endpoints } from '../../constants/api';
import axios from 'axios';
import Loader from '../../shared/Loader/Loader';
import Store from '../../shared/Store/Store';
import NewToken from '../../shared/NewToken/NewToken';

class Stores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            stores: [],
            setNewToken: false
        };
    }

    componentDidMount() {
        const endpoint = endpoints();
        const setStores = this.setStores;
        const showNewTokenForm = this.showNewTokenForm;
        axios({
            method: 'GET',
            url: endpoint.shops,
            headers:  {
                'Cache-Control': 'no-cache',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }
        }).then(
            res => {
                setStores(res.data);
            },
            error => {
                showNewTokenForm();
            }
        );
    }

    showNewTokenForm = () => {
        this.setState({
            setNewToken: true
        });
    }

    setStores = data => {
        this.setState({
            isLoading: false,
            stores: data
        });
    }

    render() {
        const {
            isLoading,
            stores,
            setNewToken
        } = this.state;
        const { updateToken } = this.props;

        return(
            <div>
                {!setNewToken && isLoading && <Loader />}
                {!setNewToken && !isLoading && <Store stores={stores} />}
                {setNewToken && <NewToken updateToken={updateToken} />}
            </div>
        )
    }
}

Stores.propTypes = {
    token: PropTypes.string,
    updateToken: PropTypes.func
};

export default Stores;
