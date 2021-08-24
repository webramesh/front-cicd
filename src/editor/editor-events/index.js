import store from '@/store';
import axios from 'axios';

import { dynamicAddSection, displaySidebar } from '../lib/helpers';

import loadBlockManagerEvents from './blockManagerEvents';
import loadAppTraits from './section-settings';

import { showHideSectionTrait } from '../lib/showHideSectionTrait';
import titleTrait from './custom-traits/titleTrait';
import descriptionTrait from './custom-traits/descriptionTrait';
import imageTraits from './custom-traits/imageTrait';

export default editor => {
  const TOP_LEVEL_TAGS = ['header', 'footer', 'section'];
  const UNCOPYABLE_COMPONENTS = ['header', 'footer'];

  editor.on('load', () => {
    const components = editor.getComponents();
    /* save apps data on store: starts */
    components.forEach(component => {
      // remove hoverable line on nested children
      component.onAll(cmp => {
        !TOP_LEVEL_TAGS.includes(cmp.get('tagName')) &&
          cmp.set({
            selectable: false,
            hoverable: false,
            draggable: false,
            droppable: false
          });
        // Make header footer unclonable
        UNCOPYABLE_COMPONENTS.includes(cmp.get('tagName')) &&
          cmp.set({ copyable: false });
      });

      if (component.props().attributes['data-app-name'] === 'header') {
        const header = component.getEl();
        const navBars = header.querySelectorAll('ul li a');
        const menus = Array.from(navBars).map(navItem => {
          return (
            {
              href: navItem.getAttribute('href'),
              label: navItem.firstChild.textContent,
              appName: navItem.dataset.appName
            } || []
          );
        });
        store.commit('editor/SET_MENUS_ON_LOAD', menus);

        // TODO - Removed
        // editor.select(component);
      }

      if (component.props().attributes['data-app-name'] === 'blog') {
        const blogWrapper = component.getEl().querySelector('.pt-blog-sec');
        const blogs = Array.from(
          blogWrapper.querySelectorAll('.pt-blog-card')
        ).map((blog, index) => {
          return {
            blogId: `blog${++index}`,
            blogCategory:
              blog.querySelector('.blog_category')?.textContent || null,
            blogTitle: blog.querySelector('.blog_title')?.textContent || null,
            blogDate:
              blog.querySelector('.blog_published_date')?.textContent || null
          };
        });

        store.commit('editor/SET_BLOGS_ON_LOAD', blogs);
      }
    });
    /* save apps data on store: ends */

    const sections = components.filter(component => {
      return component.get('tagName') === 'section';
    });

    sections.slice(1).forEach(component => {
      const el = component.getEl();

      // TODO - Removed

      // append `button` inside section tag after loading the page
      // component.append(
      //   /* html */ `
      //       <div class="text-center my-3">
      //          <button class="btn btn-success addNewSection">Add section</button>
      //       </div>
      //    `,
      //   { at: 0 }
      // );

      const addSectionBtns = el.querySelectorAll('.addNewSection');
      dynamicAddSection({ buttons: addSectionBtns, component, editor });
    });

    // loading editor load related events

    loadBlockManagerEvents(editor);
    store.commit('editor/SET_LOADING', false);
  });

  editor.on('component:selected', component => {
    const sectionAttrs = {
      traits: []
    };

    const md = editor.Modal;
    md.setTitle('Section Settings');
    const settingEl = `
    <div id="settingElWrapper">
      <div class="sectiton-setting-item">
         <div id="gjs-sm-background-section" class="gjs-sm-sector gjs-sm-sector__background-section no-select gjs-sm-open">
            <div class="gjs-sm-properties" style="">
               <div id="gjs-sm-background-color" class="gjs-sm-property gjs-sm-color gjs-sm-property__background-color">
                  <div class="gjs-sm-label" data-sm-label="">
                     <span class="gjs-sm-icon " title="">
                     Background color
                     </span>
                     <b class="gjs-sm-clear" data-clear-style="" style="display: none;">⨯</b>
                  </div>
                  <div class="gjs-fields" data-sm-fields="">
                     <div class="gjs-field gjs-field-color">
                        <div class="gjs-input-holder"><input type="text" placeholder="none"></div>
                        <div class="gjs-field-colorp">
                           <div class="gjs-field-colorp-c" data-colorp-c="">
                              <div class="gjs-checker-bg"></div>
                              <div class="gjs-field-color-picker"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!--end of setting item-->
      <!--start setting item-->
      <div class="sectiton-setting-item">
         <div class="gjs-sm-label" data-sm-label="">
            <span class="gjs-sm-icon " title="">
            Section Size
            </span>
         </div>
         <div class="gjs-sm-properties" style="">
            <div id="gjs-sm-height" class="gjs-sm-property gjs-sm-integer gjs-sm-property__height">
               <div class="gjs-sm-label" data-sm-label="">
                  <span class="gjs-sm-icon " title="">
                  Height
                  </span>
                  <b class="gjs-sm-clear" data-clear-style="" style="display: none;">⨯</b>
               </div>
               <div class="gjs-fields" data-sm-fields="">
                  <div class="gjs-field gjs-field-integer">
                     <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                     <span class="gjs-field-units">
                        <select class="gjs-input-unit">
                           <option selected="">px</option>
                           <option>%</option>
                           <option>vh</option>
                        </select>
                     </span>
                     <div class="gjs-field-arrows" data-arrows="">
                        <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                        <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="gjs-sm-width" class="gjs-sm-property gjs-sm-integer gjs-sm-property__width">
               <div class="gjs-sm-label" data-sm-label="">
                  <span class="gjs-sm-icon " title="">
                  Width
                  </span>
                  <b class="gjs-sm-clear" data-clear-style="" style="display: none;">⨯</b>
               </div>
               <div class="gjs-fields" data-sm-fields="">
                  <div class="gjs-field gjs-field-integer">
                     <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                     <span class="gjs-field-units">
                        <select class="gjs-input-unit">
                           <option selected="">px</option>
                           <option>%</option>
                           <option>vw</option>
                        </select>
                     </span>
                     <div class="gjs-field-arrows" data-arrows="">
                        <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                        <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!--end of setting item-->
      <!--start setting item-->
      <div class="sectiton-setting-item">
         <div class="gjs-sm-label" data-sm-label="">
            <span class="gjs-sm-icon " title="">
            Section Margin
            </span>
         </div>
         <div class="gjs-sm-field gjs-sm-composite">
            <span id="gjs-sm-input-holder">
               <div class="gjs-sm-properties">
                  <div id="gjs-sm-margin-top" class="gjs-sm-property gjs-sm-integer gjs-sm-property__margin-top">
                     <div class="gjs-sm-label" data-sm-label="">
                        <span class="gjs-sm-icon " title="">
                        Margin top
                        </span>
                     </div>
                     <div class="gjs-fields" data-sm-fields="">
                        <div class="gjs-field gjs-field-integer">
                           <span class="gjs-input-holder"><input type="text" placeholder=""></span>
                           <span class="gjs-field-units">
                              <select class="gjs-input-unit">
                                 <option selected="">px</option>
                                 <option>%</option>
                                 <option>vh</option>
                              </select>
                           </span>
                           <div class="gjs-field-arrows" data-arrows="">
                              <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                              <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="gjs-sm-margin-right" class="gjs-sm-property gjs-sm-integer gjs-sm-property__margin-right">
                     <div class="gjs-sm-label" data-sm-label="">
                        <span class="gjs-sm-icon " title="">
                        Margin right
                        </span>
                     </div>
                     <div class="gjs-fields" data-sm-fields="">
                        <div class="gjs-field gjs-field-integer">
                           <span class="gjs-input-holder"><input type="text" placeholder=""></span>
                           <span class="gjs-field-units">
                              <select class="gjs-input-unit">
                                 <option selected="">px</option>
                                 <option>%</option>
                                 <option>vw</option>
                              </select>
                           </span>
                           <div class="gjs-field-arrows" data-arrows="">
                              <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                              <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="gjs-sm-margin-bottom" class="gjs-sm-property gjs-sm-integer gjs-sm-property__margin-bottom">
                     <div class="gjs-sm-label" data-sm-label="">
                        <span class="gjs-sm-icon " title="">
                        Margin bottom
                        </span>
                     </div>
                     <div class="gjs-fields" data-sm-fields="">
                        <div class="gjs-field gjs-field-integer">
                           <span class="gjs-input-holder"><input type="text" placeholder=""></span>
                           <span class="gjs-field-units">
                              <select class="gjs-input-unit">
                                 <option selected="">px</option>
                                 <option>%</option>
                                 <option>vh</option>
                              </select>
                           </span>
                           <div class="gjs-field-arrows" data-arrows="">
                              <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                              <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="gjs-sm-margin-left" class="gjs-sm-property gjs-sm-integer gjs-sm-property__margin-left">
                     <div class="gjs-sm-label" data-sm-label="">
                        <span class="gjs-sm-icon " title="">
                        Margin left
                        </span>
                     </div>
                     <div class="gjs-fields" data-sm-fields="">
                        <div class="gjs-field gjs-field-integer">
                           <span class="gjs-input-holder"><input type="text" placeholder=""></span>
                           <span class="gjs-field-units">
                              <select class="gjs-input-unit">
                                 <option selected="">px</option>
                                 <option>%</option>
                                 <option>vw</option>
                              </select>
                           </span>
                           <div class="gjs-field-arrows" data-arrows="">
                              <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                              <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </span>
         </div>
      </div>
      <!--end of setting item-->
    </div>
    `;
    md.setContent(settingEl);
    // md.open()

    store.dispatch('editor/SET_ADD_FLAG', true);
    displaySidebar(editor);
    store.commit(
      'editor/SET_ACCORDION_INDEX',
      store.state.editor.Accordion.activeName['section-manage']
    );
    // to open trait manager
    const openSettings = editor.Panels.getButton('views', 'open-tm');
    openSettings && openSettings.set('active', 1);

    const selectedAppName = component.getAttributes()['data-app-name'];

    /* append traits to multiple ids */

    // dynamic
    if (selectedAppName === 'header') {
      editor.TraitManager.getConfig().appendTo = '#menuTrait';
      editor.TraitManager.postRender();
      store.commit(
        'editor/SET_ACCORDION_INDEX',
        store.state.editor.Accordion.activeName['menu']
      );
    } else if (component.getName() === 'Body') {
      editor.TraitManager.getConfig().appendTo = '#template-layer-container';
      editor.TraitManager.postRender();
      store.commit(
        'editor/SET_ACCORDION_INDEX',
        store.state.editor.Accordion.activeName['template-layer']
      );
    } else {
      // default
      editor.TraitManager.getConfig().appendTo = '#section-manage-container';
      editor.TraitManager.postRender();
      store.commit(
        'editor/SET_ACCORDION_INDEX',
        store.state.editor.Accordion.activeName['section-manage']
      );
    }

    const appBlog = selectedAppName === 'blog';

    /* added edit icon on toolbar: starts */
    // custom commands to open style manager
    const cmdEdit = 'tlb-edit';
    const editIcon = 'fas fa-pencil-alt';

    const cmdDelete = 'tlb-custom-delete';
    const deleteIcon = 'fas fa-trash-alt';

    const cmdAppSettings = 'tlb-app-setting';
    const settingIcon = 'fas fa-cog';

    const defaultToolbar = component.get('toolbar');
    const isEditToolBar = defaultToolbar.some(item => item.command === cmdEdit);

    const cmd = editor.Commands;
    cmd.add(cmdEdit, editor => {
      displaySidebar(editor);
      store.dispatch('editor/SET_EDIT_FLAG', true);
      store.commit(
        'editor/SET_ACCORDION_INDEX',
        store.state.editor.Accordion.activeName['section-edit']
      );
    });

    cmd.add(cmdDelete, editor => {
      const appName = selectedAppName?.toLowerCase();

      store.commit('editor/DELETE_MENU_ON_COMPONENT_DELETE', appName);
      const navigationUl = editor.Canvas.getDocument().querySelector(
        'header nav ul'
      );

      // navigationUl.querySelector(
      //   `a[data-app-name="${appName}"]`
      // ).style.cssText = 'display:none';

      navigationUl?.querySelector(`a[data-app-name="${appName}"]`)?.remove();

      editor.runCommand('tlb-delete');
    });

    cmd.add(cmdAppSettings, async editor => {
      const modal = editor.Modal;
      const storeEditor = store.state.editor;

      const { data } = await axios.get('CMSResponse.json');

      const cmsType = data.cms_type;

      if (!cmsType.hasOwnProperty(selectedAppName)) return;

      if (cmsType.hasOwnProperty(selectedAppName)) {
        const { fields } = cmsType[selectedAppName];
        const { selects, inputs, textareas } = fields;
        const divEl = document.createElement('div');
        divEl.innerHTML = `
          <div>
            ${
              selects
                ? selects
                    .map(
                      select => `
                    <div>
                      <label>${select.label}</label>
                      <select name="${select.name}" id="">
                        ${select?.options
                          .map(
                            option =>
                              `<option value="${option}">${option}</option>`
                          )
                          .join('')}
                      </select>
                    </div>
                  `
                    )
                    .join('')
                : ''
            }

            ${
              inputs
                ? inputs
                    .map(
                      input => `
                        <div>
                          <label>${input.label}</label>
                           <input type="text" name="${input.name}" />
                        </div>
                      `
                    )
                    .join('')
                : ''
            }

            ${
              textareas
                ? textareas
                    .map(
                      textarea => `
                        <div>
                          <label>${textarea.label}</label>
                           <textarea type="text" name="${textarea.name}"></textarea>
                        </div>
                     `
                    )
                    .join('')
                : ''
            }
          </div>
          <button type="submit">Save</button>
        `;

        modal.setTitle(`${selectedAppName.toUpperCase()} Settings`);
        modal.setContent(divEl);
        modal.open();
      }
    });

    // get builtin toolbars
    const toolbars = [
      // copied the first three buttons
      ...defaultToolbar.slice(0, 3),
      // adding custom toolbar options i.e edit
      {
        attributes: { class: settingIcon, title: 'Manage' },
        command: cmdAppSettings
      },
      {
        attributes: { class: editIcon },
        command: cmdEdit
      },
      {
        attributes: { class: deleteIcon },
        command: cmdDelete
      }
    ];

    // update toolbar
    if (!isEditToolBar) {
      component.set('toolbar', toolbars);
    }

    /* added edit icon on toolbar: ends */

    /* adding image trait on section click: starts */
    const imageTrait = {
      type: 'images',
      name: 'sectionImg'
    };
    imageTraits(editor, component);
    /* adding image trait on section click: ends */

    /* Adding title and description traits starts */
    if (component.getEl().querySelector('[class*="section_title"]')) {
      component.getName() === 'Body'
        ? null
        : titleTrait(editor, component, selectedAppName);
      const title = {
        type: 'title',
        label: 'Title'
      };
      sectionAttrs.traits.push(title);
    }
    if (component.getEl().querySelector('[class*="section_description"]')) {
      component.getName() === 'Body'
        ? null
        : descriptionTrait(editor, component, selectedAppName);
      const description = {
        type: 'description',
        label: 'Description '
      };

      sectionAttrs.traits.push(description);
    }
    /* Adding title and description traits ends */
    
    sectionAttrs.traits.push(imageTrait); // Adding Image Trait
    
    component.set(sectionAttrs);
    showHideSectionTrait(editor, component); // Adding show/hide section Trait
    
    // load apps related traits
    loadAppTraits(editor, component, sectionAttrs);
  });
};
