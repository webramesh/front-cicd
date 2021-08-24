import Vue from 'vue';
import NavTrait from '@/editor/components/NavTrait.vue';

export default (editor, component) => {
  if (component.getAttributes()['data-app-name'] == 'header') {
    editor.TraitManager.addType('nav-trait', {
      templateInput: '',
      noLabel: 1,
      createInput: props => {
        Vue.prototype.$editor = editor;
        const navCmp = new Vue({
          render: h => h(NavTrait)
        }).$mount();
        return navCmp.$el;
      }
    });
    component.set({
      traits: [
        {
          type: 'nav-trait',
          name: 'navTrait'
        }
      ]
    });
  }
};
