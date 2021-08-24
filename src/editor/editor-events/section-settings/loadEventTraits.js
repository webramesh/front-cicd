import { removeNodes, displayNodes } from '../../lib/helpers';

export default (editor, component, sectionAttrs) => {
  if (component.getAttributes()['data-app-name'] == 'event') {
    const eventTraits = [
      {
        type: 'checkbox',
        name: 'showTitle',
        label: 'Show Event Title',
        changeProp: 1
      },
      {
        type: 'checkbox',
        name: 'showDescription',
        label: 'Show Event Description',
        changeProp: 1
      },
      {
        type: 'checkbox',
        name: 'showDate',
        label: 'Show Event Date',
        changeProp: 1
      }
    ];
    component.set({
      showTitle: 'checked',
      showDescription: 'checked',
      showDate: 'checked',
      traits: [...eventTraits, ...sectionAttrs.traits]
    });
    component.on('change:showTitle', handleShowTitleChange);
    component.on('change:showDescription', handleShowDescriptionChange);
    component.on('change:showDate', handleShowDateChange);

    function handleShowTitleChange(model, value) {
      showHideNodes('event_title', model, value);
    }
    function handleShowDescriptionChange(model, value) {
      showHideNodes('event_short_description', model, value);
    }

    function handleShowDateChange(model, value) {
      showHideNodes('pt-event-date', model, value);
    }

    function showHideNodes(className, model, value) {
      const traitNodes = model.find(`.${className}`);
      const showTrait = value;
      if (!showTrait) {
        removeNodes({ nodes: traitNodes });
      }
      if (showTrait) {
        displayNodes({ nodes: traitNodes });
      }
    }
  }
};
