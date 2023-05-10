const domain = 'https://shoes-design-api.vercel.app';

export const API: any = {
    registerOtp: {
        url: domain + '/v1/auth/register/otp',
        method: 'POST',
    },
    register: {
        url: domain + '/v1/auth/register',
        method: 'POST',
    },
    login: {
        url: domain + '/v1/auth/login',
        method: 'POST',
    },
    logout: {
        url: domain + '/v1/auth/logout',
        method: 'POST',
    },
    refresh: {
        url: domain + '/v1/auth/refresh',
        method: 'POST',
    },
    forgotPassword: function (id: string) {
        return {
            url: domain + `/v1/auth/${id}/password/forgot`,
            method: 'PATCH',
        };
    },
    editPassword: function (id: string) {
        return {
            url: domain + `/v1/auth/${id}/password/edit`,
            method: 'PATCH',
        };
    },
    removeUser: function (id: string) {
        return {
            url: domain + `/v1/auth/${id}/remove`,
            method: 'DELETE',
        };
    },
    getUserCart: function (userID: string) {
        return {
            url: domain + `/user/${userID}/cart`,
            method: 'GET',
        };
    },
    addToCart: function (userID: string) {
        return {
            url: domain + `/user/${userID}/cart`,
            method: 'POST',
        };
    },
    getUserCartPurchaseHistory: function (userID: string) {
        return {
            url: domain + `/user/${userID}/cart/purchase/history`,
            method: 'GET',
        };
    },
    removeItemFromCart: function (userID: string) {
        return {
            url: domain + `/user/${userID}/cart/remove`,
            method: 'DELETE',
        };
    },
    buyItemsFromCart: function (userID: string) {
        return {
            url: domain + `/user/${userID}/cart/buy`,
            method: 'POST',
        };
    },
    repurchaseItemFromCart: function (userID: string, id: string) {
        return {
            url: domain + `/user/${userID}/cart/${id}/repurchase/`,
            method: 'POST',
        };
    },
    getUserProfile: function (userID: string) {
        return {
            url: domain + `/user/profile/${userID}`,
            method: 'GET',
        };
    },
};
export async function request(route: any, data?: any, token?: string) {
    const requestOptions: any = {
        method: route.method,
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            token: 'Bearer ' + token,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    };
    if (route.method !== 'GET') {
        requestOptions.body = JSON.stringify(data);
    }
    const response = await fetch(route.url, requestOptions);
    return response.json();
}
