import { removeNodes, displayNodes } from '../../lib/helpers';

export default (editor, component, sectionAttrs) => {
  if (component.getAttributes()['data-app-name'] == 'testimonial') {
    const testimonialTraits = [
      {
        type: 'checkbox',
        name: 'showTitle',
        label: 'Show Title',
        changeProp: 1
      },
      {
        type: 'checkbox',
        name: 'showDescription',
        label: 'Show Description',
        changeProp: 1
      }
    ];
    component.set({
      showTitle: 'checked',
      showDescription: 'checked',
      traits: [...testimonialTraits, ...sectionAttrs.traits]
    });
    component.on('change:showTitle', handleShowTitleChange);
    component.on('change:showDescription', handleShowDescriptionChange);
    function handleShowTitleChange(model, value) {
      const titleNodes = model.find('.testimonial_name');
      const showTitle = value;
      if (!showTitle) {
        removeNodes({ nodes: titleNodes });
      }

      if (showTitle) {
        displayNodes({ nodes: titleNodes });
      }
    }
    function handleShowDescriptionChange(model, value) {
      const descriptionNodes = model.find('.testimonial_description');
      const showDescription = value;

      if (!showDescription) {
        removeNodes({ nodes: descriptionNodes });
      }

      if (showDescription) {
        displayNodes({ nodes: descriptionNodes });
      }
    }
  }
};
