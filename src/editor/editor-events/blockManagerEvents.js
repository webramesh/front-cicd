import store from '@/store';
import { addDynamicEventListener } from '../lib/dynamicListener';

import Api from '../apis/Api';

export default async editor => {
  let state = {
    bm: editor.BlockManager,
    modal: editor.Modal,
    cmp: editor.DomComponents,
    folders: [],
    images: [],
    appId: '',
    allApps: []
  };

  let { bm, modal, cmp, folders, images, appId, allApps } = state;

  const { data } = await Api.get(`readDirectories`);

  if (!data.files.length) return;

  data.files.forEach(app => folders.push(app));

  bm.add('Text Element', {
    category: 'Elements',
    label: 'My Column',
    content: '<div class="my-block">This is a simple block</div>',
    attributes: {
      title: 'Text Element'
    }
  });

  folders.forEach(folder => {
    return bm.add(folder, {
      category: 'Apps',
      label: folder,
      content: '<div></div>',
      attributes: {
        title: folder
      }
    });
  });

  const blocks = bm.getAll();

  const elements = blocks.filter(block => {
    return block.get('category').get('id') === 'Elements';
  });
  bm.render(elements);

  /* Search App Starts */
  const searchBar = document.querySelector('.has-search > input');
  searchBar.addEventListener('keyup', e => {
    store.commit('editor/SET_ACCORDION_INDEX', null); // setting others accordian item deactive
    e.target.value.length > 0
      ? bm.getCategories().each(ctg => {
          ctg.set('open', true);
        })
      : bm.getCategories().each(ctg => {
          ctg.set('open', false);
        });
    const filteredApps = blocks.filter(block => {
      return block
        .get('label')
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    bm.render(filteredApps);
  });
  /* Search App Ends */

  /* block manager click events: starts */

  allApps = blocks.filter(block => block.get('category').get('id') === 'Apps');
  const appsWrapper = bm.render(allApps);

  // render all blocks
  bm.render();

  const appSelectModal = document.querySelector('#appSelectModal');

  addDynamicEventListener(appsWrapper, 'click', '.gjs-block-label', async e => {
    const blockLabel = e.target;
    // if current target has class of active, close modal,close sidebar and return false
    if (blockLabel.classList.contains('active')) {
      modal.close();
      appSelectModal.style.cssText = 'transform:translate(-120%, 6%);';
      blockLabel.classList.toggle('active');
      return;
    }

    // remove class `active` if exists
    [...appsWrapper.querySelectorAll('.gjs-block-label')].forEach(node => {
      node.classList.remove('active');
    });

    // add active class to current element
    blockLabel.classList.add('active');

    modal.setContent(`
      <div>
        <h3>Do you want to append to menu or not ?</h3>
        <button class="appendMenuButton" data-is-append="true">Yes</button>
        <button class="appendMenuButton" data-is-append="false">No</button>
      </div>
    `);
    modal.open();

    appId = blockLabel.getAttribute('title');

    const appendMenuButtons = document.querySelectorAll('.appendMenuButton');
    appendMenuButtons.forEach(btn => {
      btn.addEventListener('click', async event => {
        const isAppendToMenu = event.target.dataset.isAppend;
        if (isAppendToMenu === 'true') {
          store.commit('editor/SET_MENU_APPS_CLICK', {
            href: '#',
            label: appId,
            isNewWindow: 'no',
            appName: appId
          });
        }
        modal.close();

        const { data } = await Api.get(`search-thumbs?id=${appId}`);
        const results = data.results;
        if (!results.length) return;

        images = [];
        results.forEach(src => {
          return images.push({
            src,
            appName: appId.toLowerCase()
          });
        });

        appSelectModal.classList.add('showPreviewModal');

        const insertImage = appSelectModal.querySelector('.appsListing');

        insertImage.innerHTML = `
          ${images
            .map(
              (image, i) => `
              <div class="img-block cursor-pointer">
                  <img class="selectDesign w-50" src="${image.src}"
                        data-id="${image.appName}${++i}" />
              </div>
             `
            )
            .join('')}
        `;

        async function appendHTML(e) {
          const contentId = e.target.dataset['id'];
          const { data } = await Api.get(
            `get-contents?cid=${contentId}&app=${appId}`
          );

          const storeEditor = store.state.editor;

          cmp.addComponent(data.results, {
            at: storeEditor.componentIndex + 1
          });
          appSelectModal.classList.remove('showPreviewModal');
          blockLabel.classList.remove('active');
        }

        const selectDesignBtns = document.querySelectorAll('.selectDesign');
        selectDesignBtns.forEach(btn => {
          btn.addEventListener('click', appendHTML);
        });
      });
    });
  });

  /* block manager click events: ends */
};
