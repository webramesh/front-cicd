import { removeNodes, displayNodes } from '../../lib/helpers';

export default (editor, component, sectionAttrs) => {
  if (component.getAttributes()['data-app-name'] == 'service') {
    const serviceTraits = [
      {
        type: 'checkbox',
        name: 'showTitle',
        label: 'Show Title',
        changeProp: 1
      }
    ];
    component.set({
      showTitle: 'checked',
      traits: [...serviceTraits,...sectionAttrs.traits]
    });
    component.on('change:showTitle', handleShowTitleChange);

    function handleShowTitleChange(model, value) {
      const titleNodes = model.find('.service_title');
      const showTitle = value;
      if (!showTitle) {
        removeNodes({ nodes: titleNodes });
      }

      if (showTitle) {
        displayNodes({ nodes: titleNodes });
      }
    }
  }
};
