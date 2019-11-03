import React, {Component} from 'react';
import DataTable from 'react-data-table-component';

class Table extends Component {
    render() {
        const {
            orders
        } = this.props;
        const organizedOrders = orders.map(order => {
            const {
                created_at,
                customer,
                currency,
                status,
                total
            } = order;
            return {
                customerName: customer.name,
                customerEmail: customer.email,
                date: created_at,
                total: `${total} ${currency}`,
                status
            };
        });

        const columns = [
            {
                name: 'Client',
                selector: 'customerName',
                sortable: true
            }, {
                name: 'Email',
                selector: 'customerEmail',
                sortable: true
            }, {
                name: 'Total',
                selector: 'total',
                sortable: true
            }, {
                name: 'Date',
                selector: 'date',
                sortable: true
            }, {
                name: 'Status',
                selector: 'status',
                sortable: true
            }
        ];

        return (
            <div>
                <DataTable
                    title="Orders"
                    columns={columns}
                    data={organizedOrders}
                />
            </div>
        );
    }
}

export default Table;
