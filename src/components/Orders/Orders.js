import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { endpoints } from '../../constants/api';
import axios from 'axios';
import Loader from '../../shared/Loader/Loader';
import Table from '../../shared/Table/Table';
import NewToken from '../../shared/NewToken/NewToken';

class Orders extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            orders: [],
            setNewToken: false
        };
    }

    componentDidMount() {
        const params = this.props.match.params;
        const endpoint = endpoints(params);
        const setStores = this.setStores;
        const showNewTokenForm = this.showNewTokenForm;
        axios({
            method: 'GET',
            url: endpoint.orders,
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
            orders: data
        });
    }

    render() {
        const {
            isLoading,
            orders,
            setNewToken
        } = this.state;
        const { updateToken } = this.props;

        return(
            <div>
                {isLoading && <Loader />}
                {!isLoading && <Table orders={orders} />}
                {setNewToken && <NewToken updateToken={updateToken} />}
            </div>
        )
    }
}

Orders.propTypes = {
    token: PropTypes.string,
    updateToken: PropTypes.func
};

export default Orders;
