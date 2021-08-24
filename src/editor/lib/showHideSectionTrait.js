export const showHideSectionTrait = (editor, component) => {
  const components = editor.getComponents();

  const sections = components.filter(component => {
    return component.get('tagName') === 'section';
  });

  const sectionsAfter = sections.slice(1);

  const showHideAttrs = {
    traits: sectionsAfter.map((section) => {
      return {
        type: 'checkbox',
        label: `Show Sec ${section.getAttributes()['data-app-name'] || ''}`,
        changeProp: 1,
        name: `showSection${section.getAttributes()['data-app-name'] || ''}`
      };
    })
  };

  // Checking section attributes for checked and unchecked
  sectionsAfter.forEach(section => {
    if (section.getAttributes()['data-show'] === 'false') return;

    showHideAttrs[`showSection${section.getAttributes()['data-app-name']}`] =
      'checked';
  });

  sectionsAfter.forEach(section => {
    component.on(
      `change:showSection${section.attributes.attributes['data-app-name']}`,
      component => {
        const value = component
          .getTrait(
            `showSection${section.attributes.attributes['data-app-name']}`
          )
          .props().value;

        if (!value) {
          section.setStyle({ display: 'none' });
          section.attributes.attributes['data-show'] = 'false';
        }
        if (value) {
          section.setStyle({ display: 'block' });
          section.attributes.attributes['data-show'] = 'true';
        }
      }
    );
  });

  component.set(showHideAttrs);
};
