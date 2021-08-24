import axios from 'axios';

import { Http } from './http.init';
import { ResponseWrapper, ErrorWrapper } from './util';
import $store from '../store';
import $router from '../router';

import { API_URL } from '../.env';
import { LOCAL_API_URL } from '../.env';

let BEARER = '';

export class AuthService {
  /**
   ******************************
   * @API
   ******************************
   */

  static async makeLogin({ email, password, mode }) {
    // debugger
    // await axios.post(`${API_URL}/api/userLogin`, {

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
        mode: mode
      });

      this.setRefreshToken('');

      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async logout() {
    try {
      const response = await axios.get(`${API_URL}/user/logout`);
      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async verifyOTP({ otp }) {
    try {
      const response = await axios.post(`${API_URL}/user-verification`, {
        verification_code: otp
      });
      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async register({
    first_name,
    last_name,
    email,
    password,
    password_confirmation,
    mobile,
    mode
  }) {
    try {
      const response = await axios.post(`${API_URL}/register/customer`, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        mobile: mobile,
        mode: mode
      });
      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async passwordReset({ email }) {
    try {
      const response = await axios.post(`${API_URL}/password-reset`, {
        email
      });
      return ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async getCategory() {
    try {
      const response = await axios.get(`${API_URL}/category`, {
        withCredentials: true
      });
      return new ResponseWrapper(response, response.data.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async regiserNewUser(data) {
    try {
      const response = await axios.post(`${API_URL}/api/registerNewUser`, {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        password_conformation: data.password_conformation,
        mobile: data.mobile
      });

      return new ResponseWrapper(response, response);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async makeLogout() {
    try {
      const response = await new Http({ auth: true }).post(
        'auth/logout',
        {},
        { withCredentials: true }
      );
      _resetAuthData();
      $router.push({ name: 'login' }).catch(() => {});
      return new ResponseWrapper(response, response.data.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async getUser() {
    try {
      const response = await axios.get(`${API_URL}/user/detail`);
      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async refreshTokens() {
    try {
      const response = await axios.post(`${API_URL}/auth/refresh-tokens`, {
        withCredentials: true
      });

      return new ResponseWrapper(response, response.data.payload);
    } catch (error) {
      console.log(error.response.data.code);
      _resetAuthData();
      $router.push({ name: 'login' }).catch(() => {});
      throw new ErrorWrapper(error);
    }
  }

  static debounceRefreshTokens = this._debounce(() => {
    return this.refreshTokens();
  }, 100);

  /**
   ******************************
   * @METHODS
   ******************************
   */

  static isAccessTokenExpired() {
    const accessTokenExpDate = $store.state.auth.accessTokenExpDate - 10;
    const nowTime = Math.floor(new Date().getTime() / 1000); // converting to second
    return false;
    return accessTokenExpDate <= nowTime;
  }

  static hasRefreshToken() {
    return Boolean(localStorage.getItem('refreshToken'));
  }

  static setRefreshToken(status) {
    if (!['', 'true'].includes(status)) {
      throw new Error(
        `setRefreshToken: invalid value ${status}; Expect one of ['', 'true']`
      );
    }

    localStorage.setItem('refreshToken', status);
  }

  static getBearer() {
    return BEARER;
  }

  static setBearer(accessToken) {
    BEARER = `Bearer ${accessToken}`;
  }

  /**
   * https://stackoverflow.com/questions/35228052/debounce-function-implemented-with-promises
   * @param inner
   * @param ms
   * @returns {function(...[*]): Promise<unknown>}
   * @private
   */
  static _debounce(inner, ms = 0) {
    let timer = null;
    let resolves = [];

    return function() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const result = inner();
        resolves.forEach(r => r(result));
        resolves = [];
      }, ms);

      return new Promise(resolve => resolves.push(resolve));
    };
  }
}

/**
 ******************************
 * @private_methods
 ******************************
 */

function _parseTokenData(accessToken) {
  let payload = '';
  let tokenData = {};

  try {
    tokenData = accessToken;
  } catch (error) {
    throw new Error(error);
  }

  return tokenData;
}

function _resetAuthData() {
  // reset userData in store
  $store.dispatch('auth/removeAuthUser', '', { root: true });
  // reset tokens
  AuthService.setRefreshToken('');
  AuthService.setBearer('');
}

function _setAuthData({ accessToken, exp } = {}) {
  AuthService.setBearer(accessToken);
  $store.commit('auth/SET_ATOKEN_EXP_DATE', exp);
}
