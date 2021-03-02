import Cookies from 'universal-cookie';
import client from '../apollo';
export const access_token = 'ACCESS_TOKEN';

const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
    cookies.set(access_token, { token: accessToken });
};

export const getAccessToken = () => {
    const cookie = cookies.get(access_token);
    return cookie;
};

export const removeToken = () => {
    cookies.remove(access_token)
}

export const resetToken = () => {

    client.resetStore();
    client.clearStore()
    localStorage.clear();
    sessionStorage.clear();
    removeToken();
}