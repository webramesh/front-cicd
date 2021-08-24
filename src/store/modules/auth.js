import { AuthService } from '../../services/auth.service';
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    accessTokenExpDate: '',
    refreshToken: null,
    token: null,
    user: null
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    }
  },

  mutations: {
    SET_ATOKEN_EXP_DATE(state, expDate) {
      state.accessTokenExpDate = expDate;
    },
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
    },
    SET_REFRESH_TOKEN(state, refreshToken) {
      state.refreshToken = refreshToken;
    },
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    async getUser({ commit, state }, payload) {
       // if `SET_AUTH_TOKEN` mutation is called then store.subscriber runs. This can be checked at store/subscriber.js file
       payload.access_token && commit('SET_AUTH_TOKEN', payload.access_token); 
       if(!state.token) return;

       payload.refresh_token && commit('SET_REFRESH_TOKEN', payload.refresh_token);
       payload.expires_in && commit('SET_ATOKEN_EXP_DATE', payload.expires_in);

       localStorage.setItem('refresh_token', payload.refresh_token);
       localStorage.setItem('expires_in', payload.expires_in);
      
      try {
        // make API Call to get user
        const response = await AuthService.getUser();

        commit('SET_USER', response.payload);
      } catch (error) {
        commit('SET_AUTH_TOKEN', null);
        commit('SET_REFRESH_TOKEN', null);
        commit('SET_ATOKEN_EXP_DATE', null);
        commit('SET_USER', null);
      }
    },
    removeAuthUser({ commit }) {
      commit('SET_AUTH_TOKEN', null);
      commit('SET_REFRESH_TOKEN', null);
      commit('SET_ATOKEN_EXP_DATE', null);
      commit('SET_USER', null);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expires_in');
    },
    async logout({ dispatch }) {
      try {
        const response = await AuthService.logout();
        dispatch(
          'toast/setResponseMessage',
          {
            type: 'success',
            message: response.message
          },
          { root: true }
        );
        dispatch('removeAuthUser');
      } catch (error) {
        dispatch(
          'toast/setResponseMessage',
          {
            type: 'error',
            message: error.message
          },
          { root: true }
        );
      }
    }
  }
};
