export default {
  selectedLogo(state) {
    return state.userProjectInfo && state.userProjectInfo.logo;
  },
  templateId(state) {
    return state.userProjectInfo && state.userProjectInfo.template_id;
  },
  templateMode(state) {
    return state.userProjectInfo && state.userProjectInfo.template_mode;
  }
};
