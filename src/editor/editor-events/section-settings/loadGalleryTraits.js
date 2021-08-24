import { showHideNodes } from '../../lib/helpers';

export default (editor, component, sectionAttrs) => {
  if (component.getAttributes()['data-app-name'] == 'gallery') {
    component.set({
      // showTitle: 'checked',
      traits: [...sectionAttrs.traits]
    });
  }
};
