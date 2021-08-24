export default {
  LOAD_MENUS(state, menus) {
    state.menus = menus;
  },
  ADD_MENU(state, newMenu) {
    state.menus.push(newMenu);
  },
  UPDATE_MENU(state, payload) {
    state.menus.splice(payload.selectedMenu, 1, payload.updatedMenu);
  },
  DELETE_MENU(state, startIndex) {
    state.menus.splice(startIndex, 1);
  },
  SET_MENU_APPS_CLICK(state, newMenu) {
    state.menus.push(newMenu);
  },
  DELETE_MENU_ON_COMPONENT_DELETE(state, payload) {
    const startIndex = state.menus.findIndex(menu => menu.appName === payload);
    state.menus.splice(startIndex, 1);
  },
  SET_MENUS_ON_LOAD(state, menus) {
    state.menus = menus;
  },
  SET_MENUS_ON_NEW_PAGE_ADD(state,newMenu) {
     state.menus.push(newMenu)
  }
};
