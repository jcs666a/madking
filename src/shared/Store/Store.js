import React from 'react';
import { Link } from "react-router-dom";

function Store(props) {
    const { stores } = props;

    return (
        <div className="stores-container">
            {stores.map(store => {
                const pk = store.pk;
                return (
                    <div key={`store-${pk}`}>
                        <h3>{store.name}</h3>
                        <ul>
                            {store.marketplaces.map(market => (
                                <li key={`mk-${market.pk}`}>
                                    <Link to={`/orders/${pk}/${market.pk}`}>
                                        {market.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default Store;
