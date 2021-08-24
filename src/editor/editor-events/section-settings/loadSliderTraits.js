import { showHideNodes } from '../../lib/helpers';

export default (editor, component, sectionAttrs) => {
  if (component.getAttributes()['data-app-name'] == 'slider') {
    const sliderTraits = [
      {
        type: 'checkbox',
        name: 'showTitle',
        label: 'Show Slider Title',
        changeProp: 1
      }
    ];
    component.set({
      showTitle: 'checked',
      traits: [...sliderTraits,...sectionAttrs.traits]
    });
    component.on('change:showTitle', handleShowTitleChange);

    function handleShowTitleChange(model, value) {
      showHideNodes('slider_title', model, value);
    }
  }
};
