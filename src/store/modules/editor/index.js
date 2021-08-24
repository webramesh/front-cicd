import Menu from './apps/menu';
import Blog from './apps/blog';
import Editor from './editor';

const state = {
  ...Menu.state,
  ...Blog.state,
  ...Editor.state
};

const getters = {
  ...Menu.getters,
  ...Blog.getters,
  ...Editor.getters
};

const actions = {
  ...Menu.actions,
  ...Blog.actions,
  ...Editor.actions
};

const mutations = {
  ...Menu.mutations,
  ...Blog.mutations,
  ...Editor.mutations
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
