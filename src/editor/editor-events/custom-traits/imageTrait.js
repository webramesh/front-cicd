import { addDynamicEventListener } from '../../lib/dynamicListener';

export default (editor, component) => {
  let state = {
    selectedImg: '',
    imgIndex: '',
    allImages: [],
    imgSrc: ''
  };

  function render(state) {
    const el = document.createElement('div');
    el.classList.add('imageTrait');

    el.innerHTML = state.allImages
      .map((img, i) => {
        return `
            <div class="image${++i} imagetrait-thmibline">
               <div>
                  <img src="${img.src}" />
               </div>
               <div>
                  <button class="openAssetManger"><div data-image-id="image${i}" data-id="${--i}" class="fas fa-pencil-alt gjs-toolbar-item"></div> </button>
               </div>
            </div>
         `;
      })
      .join('');

    return el;
  }

  function setState(newStateValues) {
    state = { ...state, ...newStateValues };
    render(state);
  }

  const section = component.getEl();
  const allImages = section.querySelectorAll('img');

  if (allImages.length) {
    setState({
      allImages: Array.from(allImages).map(img => {
        return {
          src: img.getAttribute('src')
        };
      })
    });
  }

  const am = editor.AssetManager;
  am.getAll().models = [];
  am.add(state.allImages.map(img => img.src));

  editor.TraitManager.addType('images', {
    noLabel: true,
    createInput(props) {
      const { component } = props;
      const el = render(state);
      const imgTraitContainer = component.getTrait('sectionImg').view.el;
      addDynamicEventListener(
        imgTraitContainer,
        'click',
        '.openAssetManger',
        e => {
          setState({
            selectedImg: e.target.dataset.imageId,
            imgIndex: e.target.dataset.id
          });
          editor.runCommand('open-assets');
        }
      );

      function updateImage(e) {
        const imgSrc = e.target.classList.contains('gjs-am-preview')
          ? e.target.dataset.imgSrc
          : e.target
              .closest('.gjs-am-asset-image')
              .querySelector('.gjs-am-preview').dataset.imgSrc;

        const allImages = [...state.allImages];
        allImages.splice(state.imgIndex, 1, {
          src: imgSrc
        });

        setState({
          allImages,
          imgSrc
        });

        // updating canvas img
        const section = component.getEl();
        section
          .querySelectorAll('img')
          [state.imgIndex].setAttribute('src', state.imgSrc);

        // updating trait's img with new state
        component.getTrait('sectionImg').el.innerHTML = '';
        component.getTrait('sectionImg').el.appendChild(render(state));
      }

      am.render().querySelector('.gjs-am-assets').onclick = updateImage;

      return el;
    }
  });
};
