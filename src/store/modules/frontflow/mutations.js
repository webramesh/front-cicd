export default {
  SET_USER_PROJECT_INFO(state, userProjectInfo) {
    state.userProjectInfo = { ...state.userProjectInfo, ...userProjectInfo };
  }
};
