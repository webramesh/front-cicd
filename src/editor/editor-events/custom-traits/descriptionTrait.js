export default (editor, component, appName) => {
  editor.TraitManager.addType('description', {
    events: {
      keyup: 'onChange'
    },

    onValueChange() {
      const traitModel = this.model;
      const selectedComponent = this.target;
      const inputValue = traitModel.get('value');
      selectedComponent.find(
        `.${appName}_section_description`
      )[0].view.$el[0].innerText = `${inputValue}`;
    },

    getInputEl() {
      try {
        const input = document.createElement('textarea');
        const descriptionValue = component
          .getEl()
          .querySelector(`.${appName}_textarea_section_description`).innerText;
        input.value = `${descriptionValue}`;
        return input;
      } catch (e) {
        console.log(e);
      }
    }
  });
};
