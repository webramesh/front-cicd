import store from '@/store';

export function getMkBlogs({ text, dateText, uuid } = {}) {
  return {
    attributes: { class: `grid blog${uuid}` },
    components: [
      {
        attributes: { class: 'entry-media' },
        components: {
          tagName: 'img',
          type: 'image',
          src: 'assets/images/unsplash-1.jpg'
        }
      },
      {
        attributes: { class: 'entry-body' },
        components: [
          {
            tagName: 'span',
            attributes: { class: 'mk_blog_category category cat' },
            content: 'inspiration',
            // traits: setBlogTrait({ label: 'Show Category' }),
            showTitle: 'checked',
            value: 'inspiration'
          },
          {
            tagName: 'h3',
            components: {
              tagName: 'a',
              attributes: {
                class: 'mk_blog_title blog__title'
              },
              content: text,
              // traits: setBlogTrait({ label: 'Show Title' }),
              showTitle: 'checked',
              value: text
            }
          },
          {
            attributes: {
              class: 'read-more-date'
            },
            components: [
              `<a href="#">Read More...</a>`,
              {
                tagName: 'span',
                attributes: {
                  class: 'mk_blog_date date'
                },
                content: dateText,
                // traits: setBlogTrait({ label: 'Show Date' }),
                showTitle: 'checked',
                value: dateText
              }
            ]
          }
        ]
      }
    ]
  };
}

export function displayNodes({ nodes } = {}) {
  return nodes.forEach(node => node.setStyle({ display: 'block' }));
}

export function removeNodes({ nodes } = {}) {
  return nodes.forEach(node => node.setStyle({ display: 'none' }));
}

export function showHideNodes(className, model, value) {
  const traitNodes = model.find(`.${className}`);
  const showTrait = value;
  if (!showTrait) {
    removeNodes({ nodes: traitNodes });
  }
  if (showTrait) {
    displayNodes({ nodes: traitNodes });
  }
}

export function getBlogHTML({ text, dateText, uuid }) {
  return `
  <div class="grid blog${uuid}">
   <div class="entry-media">
     <img src="/assets/images/mimi-thian.jpg" alt="">
   </div>
   <div class="entry-body">
     <span data-gjs-type="default" class="cat mk_blog_category">inspiration</span>
     <h3><a data-gjs-type="default" class="mk_blog_title" href="#" target="_blank">${text}</a></h3>
     <div class="read-more-date">
       <a data-gjs-type="default" href="#" target="_blank">Read More..</a>
       <span data-gjs-type="default" class="date mk_blog_date">${dateText}</span>
     </div>
   </div>
 </div>
  `;
}

export function getBlogByClass({ model, className }) {
  return model.getEl().querySelector(`.${className}`);
}

export function setMkBlogTrait(pageId) {
  if (pageId === 'blog-listing') {
    return [
      {
        type: 'checkbox',
        name: 'showCategory',
        label: 'Show Category',
        changeProp: 1
      },
      {
        type: 'button',
        text: 'Update',
        full: true, // Full width button
        command: editor => {
          const component = editor.getSelected();

          const titleTrait = component.getTrait('showTitle');
          const { value: showTitle } = titleTrait.props();

          const categoryTrait = component.getTrait('showCategory');
          const { value: showCategory } = categoryTrait.props();

          const formData = {
            showTitle,
            showCategory
          };

          console.log(JSON.stringify(formData));
        }
      }
    ];
  }
  return [
    {
      type: 'checkbox',
      name: 'showDate',
      label: 'Show Date',
      changeProp: 1
    },
    {
      type: 'checkbox',
      name: 'showShortDescription',
      label: 'Show Short Description',
      changeProp: 1
    },
    {
      type: 'checkbox',
      name: 'showTitle',
      label: 'Show Title',
      changeProp: 1
    },
    {
      type: 'button',
      text: 'Update',
      full: true, // Full width button
      command: editor => {
        const component = editor.getSelected();

        const dateTrait = component.getTrait('showDate');
        const { value: showDate } = dateTrait.props();

        const titleTrait = component.getTrait('showTitle');
        const { value: showTitle } = titleTrait.props();

        const shortDescriptionTrait = component.getTrait(
          'showShortDescription'
        );
        const { value: showShortDescription } = shortDescriptionTrait.props();

        const formData = {
          showDate,
          showTitle,
          showShortDescription
        };
        console.log(JSON.stringify(formData));
      }
    }
  ];
}

export async function setTraits({ trait, traitType }) {
  const res = await fetch('manifest.json');
  const data = await res.json();
  const {
    showDateCheckbox,
    showTitleCheckbox,
    showCategoryCheckbox,
    titleInput,
    dateInput
  } = data;

  if (traitType == 'checkbox') {
    trait.id == 'showDate' && !showDateCheckbox
      ? trait.view.$el.css({ display: 'none' })
      : null;

    trait.id == 'showTitle' && !showTitleCheckbox
      ? trait.view.$el.css({ display: 'none' })
      : null;

    trait.id == 'showCategory' && !showCategoryCheckbox
      ? trait.view.$el.css({ display: 'none' })
      : null;
  }

  if (traitType == 'text') {
    trait.id == 'newTitle' && !titleInput
      ? trait.view.$el.css({ display: 'none' })
      : null;

    trait.id == 'newDate' && !dateInput
      ? trait.view.$el.css({ display: 'none' })
      : null;
  }
}

export async function appendNewSection(editor) {
  var x = document.getElementById('sidebar');
  if (x.style.width === '') {
    document.getElementById('sidebar').style.width = '280px';
    document.getElementById('main').style.marginLeft = '280px';
    x.style.display = 'block';
    document.getElementById('push-left').style.marginLeft = '18%';
  } else {
    document.getElementById('sidebar').style.width = '';
    document.getElementById('main').style.marginLeft = '';
    x.style.display = 'none';
    document.getElementById('push-left').style.marginLeft = '0';
  }

  const blocks = editor.BlockManager.getAll();
  blocks.forEach(block => {
    block.get('category').set('open', true);
  });

  // const res = await fetch('manifest.json');
  // const data = await res.json();
  // component
  //   .parent()
  //   .append(data.gjsHtml, { at: component.index() + 1 });
  // const addSectionBtns = component
  //   .parent()
  //   .getEl()
  //   .querySelectorAll('.addNewSection');
  // dynamicAddSection({ buttons: addSectionBtns, component });
}

export function dynamicAddSection({ buttons, component, editor }) {
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      store.commit('editor/SET_SELECTED_COMPONENT_INDEX', component.index());
      appendNewSection(editor);
    });
  });
}

export function openSidebar(editor) {
  var x = document.querySelector('#sidebar');
  x.classList.toggle('open');
  var pushLeft = document.querySelector('.push-left');
  pushLeft.classList.toggle('opensidebar-btn');

  if (x.classList.contains('open')) return __adjustEditor(editor, '20%');
  else return __adjustEditor(editor, '0');
}

export function displaySidebar(editor) {
  var x = document.querySelector('#sidebar');
  x.classList.add('open');

  var pushLeft = document.querySelector('.push-left');
  pushLeft.classList.add('opensidebar-btn');

  __adjustEditor(editor, '20%');
}

// export function openSidebar(editor) {
//   var x = document.getElementById('sidebar');
//   if (x.style.width === '') {
//     document.getElementById('sidebar').style.width = '280px';
//     __adjustEditor(editor, '214');
//     x.style.display = 'block';
//     document.getElementById('push-left').style.marginLeft = '18%';
//   } else {
//     document.getElementById('sidebar').style.width = '';
//     __adjustEditor(editor, '0');
//     x.style.display = 'none';
//     document.getElementById('push-left').style.marginLeft = '0';
//   }
// }

// export function displaySidebar(editor) {
//   var x = document.getElementById('sidebar');
//   document.getElementById('sidebar').style.width = '280px';
//   __adjustEditor(editor, '214');
//   x.style.display = 'block';
//   document.getElementById('push-left').style.marginLeft = '18%';
// }

function __adjustEditor(editor, offsetWidth) {
  editor.Canvas.getBody().style.marginLeft = `${offsetWidth}`;
}
