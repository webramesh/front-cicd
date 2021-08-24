import { showHideNodes } from '../../lib/helpers';

export default (editor, component, sectionAttrs) => {
  if (component.getAttributes()['data-app-name'] == 'team') {
    const teamTraits = [
      {
        type: 'checkbox',
        name: 'showTitle',
        label: 'Show Title',
        changeProp: 1
      },
      {
        type: 'checkbox',
        name: 'showPosition',
        label: 'Show Position',
        changeProp: 1
      }
    ];

    component.set({
      showTitle: 'checked',
      showPosition: 'checked',
      traits: [...teamTraits,...sectionAttrs.traits ]
    });
    component.on('change:showTitle', handleShowTitleChange);
    component.on('change:showPosition', handleShowPositionChange);

    function handleShowTitleChange(model, value) {
      showHideNodes('team_title', model, value);
    }
    function handleShowPositionChange(model, value) {
      showHideNodes('team_position', model, value);
    }
  }
};
