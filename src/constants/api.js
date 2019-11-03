const apiURL = 'https://api.software.madkting.com/';

export const token = 'Token 599d4be34f2cf59df13ebb27e9852570bc0684d2';

export const endpoints = data => ({
    shops: `${apiURL}shops/`,
    orders: `${apiURL}shops/${data && data.shop}/marketplace/${data && data.mk}/orders/`,
});
