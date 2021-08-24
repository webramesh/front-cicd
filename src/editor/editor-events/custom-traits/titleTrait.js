export default (editor, component, appName) => {
  editor.TraitManager.addType('title', {
    events: {
      keyup: 'onChange'
    },

    onValueChange() {
      const traitModel = this.model;
      const selectedComponent = this.target;
      const inputValue = traitModel.get('value');
      selectedComponent.find(
        `.${appName}_section_title`
      )[0].view.$el[0].innerText = `${inputValue}`;
    },

    getInputEl() {
      try {
        const input = document.createElement('input');
        const titleValue = component
          .getEl()
          .querySelector(`.${appName}_text_section_title`).innerText;
        input.value = `${titleValue}`;

        return input;
      } catch (e) {
        console.log(e);
      }
    }
  });
};
