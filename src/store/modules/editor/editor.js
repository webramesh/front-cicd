const state = {
  componentIndex: null,
  Accordion: {
    count: 0,
    active: null,
    activeName: {}
  },
  add_flag: true,
  edit_flag: false,
  isLoading: true,
  pages: []
};
const getters = {};
const mutations = {
  SET_SELECTED_COMPONENT_INDEX(state, cmp) {
    state.componentIndex = cmp;
  },
  UPDATE_ACCORDION_COUNT(state) {
    state.Accordion.count++;
  },
  SET_ACCORDION_ITEM_WITH_INDEX(state, name) {
    state.Accordion.activeName = {
      ...state.Accordion.activeName,
      [name]: state.Accordion.count
    };
  },
  SET_ACCORDION_INDEX(state, index) {
    state.Accordion.active = index;
  },
  SET_ADD_FLAG(state, status) {
    state.add_flag = status;
  },
  SET_EDIT_FLAG(state, status) {
    state.edit_flag = status;
  },
  SET_LOADING(state, status) {
    state.isLoading = status;
  },
  SET_PAGES(state, pages) {
    state.pages = pages.map(page => {
      return {
        ...page,
        pageName: removeHTMLExtension(page.pageName)
      };
    });
  }
};
const actions = {
  SET_ADD_FLAG({ commit }, status) {
    commit('SET_ADD_FLAG', status);
    commit('SET_EDIT_FLAG', false);
  },
  SET_EDIT_FLAG({ commit }, status) {
    commit('SET_EDIT_FLAG', status);
    commit('SET_ADD_FLAG', false);
  },
  SET_ACCORDION_INDEX({ commit }, index) {
    commit('SET_ACCORDION_INDEX', index);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

function removeHTMLExtension(name) {
  return name.split('.')[0];
}
