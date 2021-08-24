import { CategoryService } from '@/services/category.service';
import category from '.';

export default {
  getCategories({ commit, dispatch }) {
    return CategoryService.getCategory()
      .then(response => {
        commit('categories', response.payload);
      })
      .catch(error =>
        dispatch(
          'toast/setResponseMessage',
          {
            type: 'error',
            message: error.message
          },
          { root: true }
        )
      );
  },

  setSubcategory({ commit }, payload) {
    commit('currentSubcategory', payload);
  }
};
