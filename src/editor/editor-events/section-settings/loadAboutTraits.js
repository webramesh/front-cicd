import { removeNodes, displayNodes } from '../../lib/helpers';

export default (editor, component, sectionAttrs) => {
  if (component.getAttributes()['data-app-name'] == 'about') {
    const aboutTraits = [
      {
        type: 'checkbox',
        name: 'showTitle',
        label: 'Show Title',
        changeProp: 1
      },
      {
        type: 'checkbox',
        name: 'showShortDescription',
        label: 'Show Short Description',
        changeProp: 1
      }
    ];
    component.set({
      showTitle: 'checked',
      showShortDescription: 'checked',
      traits: [ ...aboutTraits,...sectionAttrs.traits]
    });
    component.on('change:showTitle', handleShowTitleChange);
    component.on(
      'change:showShortDescription',
      handleShowShortDescriptionChange
    );
    function handleShowTitleChange(model, value) {
      const titleNodes = model.find('.about_title');
      const showTitle = value;

      if (!showTitle) {
        removeNodes({ nodes: titleNodes });
      }

      if (showTitle) {
        displayNodes({ nodes: titleNodes });
      }
    }
    function handleShowShortDescriptionChange(model, value) {
      const shortDescriptionNodes = model.find('.about_short_description');
      const showShortDescription = value;

      if (!showShortDescription) {
        removeNodes({ nodes: shortDescriptionNodes });
      }

      if (showShortDescription) {
        displayNodes({ nodes: shortDescriptionNodes });
      }
    }
  }
};
