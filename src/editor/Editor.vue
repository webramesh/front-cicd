<script>
import Vue from "vue";
import Axios from "axios";
import store from "@/store";

import grapesjs from "./dist/grapes.min.js";

import NavTrait from "./components/NavTrait.vue";
import Accordian from "./components/Accordian.vue";
import AccordianItem from "./components/AccordianItem.vue";
import BaseTemplate from "./components/BaseTemplate.vue";
import BaseFont from "./components/BaseFont.vue";
import UndoIcon from "./components/UndoIcon.vue";
import RedoIcon from "./components/RedoIcon.vue";
import DesktopIcon from "./components/DesktopIcon.vue";
import TabletIcon from "./components/TabletIcon.vue";
import MobileIcon from "./components/MobileIcon.vue";
import SupportIcon from "./components/SupportIcon.vue";
import NotificationIcon from "./components/NotificationIcon.vue";
import PageLoader from "./components/PageLoader.vue";
import ExternalLayout from "./components/ExternalLayout.vue";

import editorAssets from "./core/assetManager";
import styleSelectors from "./core/styleManager";
import editorDevices from "./core/deviceManager";
import pageManager from "./core/pageManager";
import canvasManager from "./core/canvasManager";
import panelManager from "./core/pageManager";

import loadEditorEvents from "./editor-events";
import loadStyleManager from "./editor-events/editorStyleManager";
import loadPageManagerEvents from "./editor-events/pageManagerEvents";

import editor from "../store/modules/editor/index.js";
import { openSidebar } from "./lib/helpers";
import {mapState, mapGetters} from 'vuex'
import { API_URL } from '../.env.js';
export default {
  name: "Editor",
  components: {
    Accordian,
    AccordianItem,
    BaseTemplate,
    BaseFont,
    UndoIcon,
    RedoIcon,
    DesktopIcon,
    TabletIcon,
    MobileIcon,
    SupportIcon,
    NotificationIcon,
    PageLoader,
    ExternalLayout,
  },
  data() {
    return {
      isActive: false,
      undoManager: null,
      deviceManager: null,
      traitSelector: "#menuTrait",
      pages: [],
      template_id: null,
      showPreviewModal: false,
      selectedTemplateIndex: null
    };
  },
  computed: {
    ...mapState('frontflow', ['userProjectInfo']),
    ...mapGetters('frontflow', ['templateId']),
    pm() {
      return this.$editor.Pages;
    },
    add_flag() {
      return this.$store.state.editor.add_flag
    },
    edit_flag() {
      return this.$store.state.editor.edit_flag
    },
    isLoading() {
       return this.$store.state.editor.isLoading
    }
  },
  created() {
    this.template_id = this.templateId
  },
  mounted() {
    this.$editor = grapesjs.init({
      height: '100%',
      showOffsets: 1,
      noticeOnUnload: 0,
      container: "#gjs",
      fromElement: false,
      canvas: {
        styles: ['https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css']
      },
      // canvas: {
      // styles: canvasManager.styles,
      // scripts: canvasManager.scripts,
      // },
      plugins: [],
      // pageManager: {
      //   pages: pageManager.pages,
      // },
      blockManager: {
        appendTo: "#blocks",
      },
      selectorManager: {
        appendTo: ".styles-container-t",
      },
      styleManager: {
        appendTo: ".styles-container-b",
        sectors: styleSelectors.sectors,
      },
      assetManager: {
        assets: editorAssets.assets,
      },
      panels: {
        defaults: panelManager.panels,
      },
      // traitManager: {
      //   appendTo: this.traitSelector || ".traits-container",
      // },
      deviceManager: editorDevices,
      storageManager: {
        type:'remote',
        autosave: 0,
        urlLoad: `${API_URL}/template/${this.template_id}`,
        urlStore: `${API_URL}/template/${this.template_id}`,
        credentials: 'omit',
        headers: { Authorization: `Bearer ${store.state.auth.token}` },
      },
    });

    // load other events
    loadEditorEvents(this.$editor); // contains load and component:selected events
    loadStyleManager(this.$editor);
    loadPageManagerEvents(this.$editor); // contains page:select events

    this.undoManager = this.$editor.UndoManager;
    this.deviceManager = this.$editor.DeviceManager;
    const bm = this.$editor.BlockManager;

    // Page Manager
    const { pm } = this;
    this.setPages(pm.getAll());

    pm.getMain().set('name',"Home")

    this.$editor.on("page", () => {
      this.pages = [...pm.getAll()];
      const allPages = this.pages.map(page => {
        return {
          pageId: page.get('id'),
          pageName: page.get('name')
        }
      })
      store.commit('editor/SET_PAGES', allPages)
    });

    // Elements and Apps
    // Axios.get("blocks.json")
    //   .then((res) => {
    //     const elements = res.data.data;
    //     elements.forEach((element) => {
    //       bm.add(element.name, {
    //         category: element.category,
    //         label: element.label,
    //         content: element.content,
    //         attributes: {
    //           title: element.attributes.title,
    //         },
    //       });
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // this.$editor.BlockManager.add("Text Element", {
    //   category: "Elements",
    //   label: "1 Column",
    //   content: '<div class="my-block">This is a simple block</div>',
    //   attributes: {
    //     title: "Text Element",
    //   },
    // });
    // console.log(this.deviceManager)

    this.deviceManager.add("tablet", "900px");
    this.deviceManager.add("tablet2jalskdjfk", "900px", {
      height: "300px",
      name: "Tablet 2",
      widthMedia: "810px",
    });

    // Traits command
    this.$editor.Commands.add("show-traits", {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest(".editor-row");
        // return row.querySelector('.traits-container');
      },
      run(editor, sender) {
        // this.getTraitsEl(editor).style.display = '';
      },
      stop(editor, sender) {
        // this.getTraitsEl(editor).style.display = "none";
      },
    });
  },
  methods: {
    setPages(pages) {
      this.pages = [...pages];
    },
    addPage() {
      const { pm } = this;
      const length = pm.getAll().length;
      const modal = this.$editor.Modal;

      modal.setTitle("What do you want to do with new page?");
      modal.setContent(
        `<div>
            <form action="#">
               <label for="pageName">Page Name</label>
               <input type="text" id="pageName" name="pageName" style="width:70px">
               <label for="withHeaderFooter" style="margin-left:30px">Add Header and Footer</label>
               <input type="checkbox" id="withHeaderFooter">
               <label for="appendToMenu" style="margin-left:30px"> Add To Menu </label>
               <input type="checkbox"  id="appendToMenu" name="appendToMenu" disabled>
               <input type="submit" class='submitBtn' value="Submit">
            </form>
        </div>`
      );
      modal.open();
      // add to menu checkbox clickable only when page name is available
      const input = document.querySelector('#pageName');
      input.addEventListener('input',function(e){
         e.target.value.length > 1 ?
          document.querySelector("#appendToMenu").disabled = false:
          document.querySelector("#appendToMenu").disabled = true ;
      })

      const submit = (e) => {
        e.preventDefault();
        const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

        const headerFooterValue =
          document.querySelector("#withHeaderFooter").checked;
        const appendValue = document.querySelector("#appendToMenu").checked;
        const pageName= capitalize( document.querySelector('#pageName').value);

        if (headerFooterValue && appendValue && pageName) {
          const header =
            this.$editor.Canvas.getDocument().querySelector("header").outerHTML;
          const footer =
            this.$editor.Canvas.getDocument().querySelector("footer").outerHTML;

          pm.add({
            name: pageName?pageName:`Page ${length + 1 }`,
            component: `${header} <div style="padding:200px">Content</div> ${footer}`,
          });

          store.commit("editor/SET_MENUS_ON_NEW_PAGE_ADD", {
            href: "#",
            label: pageName,
            isNewWindow: "no",
            appName: pageName,
          });

          modal.close();
        } else if (headerFooterValue) {
          const header =
            this.$editor.Canvas.getDocument().querySelector("header").outerHTML;

          const footer =
            this.$editor.Canvas.getDocument().querySelector("footer").outerHTML;

          pm.add({
            name: pageName?pageName:`Page ${length + 1}`,
            component: `${header} <div style="padding:200px">Content</div> ${footer}`,
          });

          modal.close();
        } else {
          pm.add({
            name:pageName?pageName:`Page ${length + 1}`,
            component: `Content`,
          });

          modal.close();
        }
      };

      document
        .querySelector(".submitBtn")
        .addEventListener("click", submit);
    },
    selectPage(pageId) {
      return this.pm.select(pageId);
    },
    openNav() {
      openSidebar(this.$editor);
    },
    addMode() {
      this.$store.dispatch('editor/SET_ADD_FLAG', true)
    },
    editMode() {
      this.$store.dispatch('editor/SET_EDIT_FLAG', true)
    },
    openList() {
      this.isActive = !this.isActive;
    },
    undo() {
      this.undoManager.undo();
    },
    redo() {
      this.undoManager.redo();
    },
    setDevice(device) {
      if (device == "mobile") {
        this.$editor.setDevice("Mobile");
      } else if (device == "tablet") {
        this.$editor.setDevice("tablet");
      } else if (device == "desktop") {
        this.$editor.setDevice("Desktop");
      } else {
        this.$editor.setDevice("Desktop");
      }
    },
    publish() {
    const components = this.$editor.getComponents();
    const sections = components.filter(component => {
      return component.get('tagName') === 'section';
    });
    const pageManager = this.$editor.Pages;
    const pages = pageManager.getAll();
      var pagesArr = []
      var projectObj = {}
      var frames = pages.map(p => p.getMainComponent().toHTML())
      projectObj["project_name"] = "Project"+Math.floor(Math.random()*1000)
      projectObj["is_edit"] = false
      projectObj["pages"] = pagesArr
      projectObj["styles"] = this.$editor.getCss()
      pages.forEach((page, index) => {
        const dom = new DOMParser()
        const pageDOM = dom.parseFromString(frames[index], 'text/html')
        const moduleDatas = pageDOM.querySelectorAll('section[data-app-name]')
        pagesArr.push({
          id: page.attributes.id,
          name: page.attributes.name,
          css: page.attributes.css,
          // component: frames[index],
          modules: Array.from(moduleDatas).map(module => {
            return {
              [module.getAttribute('data-app-name')] : {
                "type": module.getAttribute('data-app-type') ?? '',
                "design": module.getAttribute('data-app-design') ?? '',
              }
            }
          })
        })
      })
      console.log(projectObj)

      Axios.post('url', {
        data: projectObj
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
      // TODO: Get Modules (App) name using data-app-name attribute for every pages and push it to pagesArr
    },
    support() {
      alert("support");
    },
    notifications() {
      alert("notifications");
    },
    profile() {
      alert("profile");
    },
    openPreviewModal(index) {
      if(this.selectedTemplateIndex == null) {
        this.selectedTemplateIndex = index
        this.showPreviewModal = true
        return
      }

      if(this.selectedTemplateIndex != null) {
        if(index == this.selectedTemplateIndex) {
          this.showPreviewModal = !this.showPreviewModal
          this.selectedTemplateIndex = null
        } else {
          this.showPreviewModal = true
          this.selectedTemplateIndex = index
          // TODO: fetch to get design of selected template
        }
      }
    },
    async changeTemplate() {
      const response = await Axios.get('http://demo.webhouseusa.com/api/get-contents?cid=blog1&app=Blog')
      this.$editor.DomComponents.addComponent(response.data.results, { at: 1 });
      this.showPreviewModal = false
      this.selectedTemplateIndex = null
    }
  },
};
</script>

<template>
  <div class="editor-body">
    <PageLoader v-if="isLoading" />

    <div class="editor-container grid">
      <div class="editior-header-container" id="main-header">
        <div class="editior-brand" id="hamburger-nav">
          <img src="canvas-img/logo.png" height="auto" width="120px;" />
        </div>
        <!-- Pagination -->
        <div class="editior-headernav" id="nav">
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>123 Restaurant</li>
          </ul>
        </div>
        <!-- Panels Bar -->
        <div class="icon-profile-wrapper" id="icon-wrapper">
          <div class="header-icon-container">
            <span class>
              <div class="panel__devices noti__item"></div>
            </span>
            <span
              class="noti__item border0"
              data-tooltip="Undo"
              data-tooltip-position="bottom"
              @click="undo"
            >
              <UndoIcon />
            </span>
            <span
              class="noti__item"
              data-tooltip="Redo"
              data-tooltip-position="bottom"
              @click="redo"
            >
              <RedoIcon />
            </span>
            <span
              class="noti__item"
              data-tooltip="Desktop"
              data-tooltip-position="bottom"
              id="desktop"
              @click="setDevice('desktop')"
            >
              <DesktopIcon />
            </span>
            <span
              class="noti__item"
              data-tooltip="Tablet"
              data-tooltip-position="bottom"
              id="tablet"
              @click="setDevice('tablet')"
            >
              <TabletIcon />
            </span>
            <span
              class="noti__item mobile-view"
              data-tooltip="mobile"
              data-tooltip-position="bottom"
              id="mobile"
              @click="setDevice('mobile')"
            >
              <MobileIcon />
            </span>
          </div>
          <div class="toggle" id="toggle-container">
            <label class="toggle-control">
              <input type="checkbox" checked="checked" />
              <span class="control"></span>
            </label>
          </div>
          <div class="publishbtn">
            <button @click="publish">Publish</button>
          </div>
          <span
            class="noti__item notification"
            data-tooltip="Support"
            data-tooltip-position="bottom"
          >
            <SupportIcon />
          </span>
          <span
            class="noti__item notification"
            data-tooltip="Notification"
            data-tooltip-position="bottom"
            @click="notifications"
          >
            <NotificationIcon />
          </span>
        </div>
        <div class="profile-container" id="profile-container">
          <img
            class="profile-picture"
            src="https://kbrowning2.files.wordpress.com/2019/12/screen-shot-2019-12-22-at-11.59.55-am.png"
            @click="profile"
            data-gjs-draggable="false"
          />
        </div>
      </div>
      <!-- Left Sidebar -->
      <div class="editior-main-container">
        <div id="sidebar" class="sidenav">
          <div class="tabBox">
            <ul class="tabs">
              <li :class="{ active: add_flag }" @click="addMode">
                <a href="#">Add</a>
              </li>
              <li :class="{ active: edit_flag }" @click="editMode">
                <a href="#">Edit</a>
              </li>
            </ul>
            <div class="tabContainer">
              <!-- ADD Tab -->
              <div id="tab1" class="tabContent" v-show="add_flag">
                <div class="search-wrapper">
                  <div class="form-group has-search">
                    <span class="form-control-feedback">
                      <img src="canvas-img/icon_search.png" />
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                    <span class="border"></span>
                  </div>
                </div>
                <div id="accordian">
                  <ul>
                    <!-- Elements & APPS -->
                    <li id="blocks"></li>
                    <Accordian>
                      <AccordianItem>
                        <template slot="accordion-trigger">
                          <h3><a href="#">Pages</a></h3>
                        </template>
                        <template slot="accordion-content">
                          <div class="menu-list">
                            <div>
                              <div class="btn btn-link">
                                <a
                                  href="#"
                                  style="
                                    padding: 5px;
                                    font-size: 14px;
                                    background-color: #aaa;
                                  "
                                  @click="addPage"
                                >
                                  <span class="fa fa-plus"></span>
                                  New Page
                                </a>
                              </div>
                              <div
                                class="btn btn-link"
                                v-for="page in pages"
                                :key="page.id"
                                @click="selectPage(page.id)"
                              >
                                <a
                                  href="#"
                                  style="
                                    padding: 5px;
                                    font-size: 14px;
                                    background-color: #ddd;
                                  "
                                >
                                  <span class="fa fa-file"></span>
                                  {{ page.get("name") || page.id }}
                                </a>
                              </div>
                            </div>
                          </div>
                        </template>
                      </AccordianItem>

                      <AccordianItem name="menu">
                        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                        <template slot="accordion-trigger">
                          <h3><a href="#">Menu</a></h3>
                        </template>
                        <!-- This slot will handle all the content that is passed to the accordion -->
                        <template slot="accordion-content">
                          <div id="menuTrait" />

                        </template>
                      </AccordianItem>

                     <AccordianItem name="section-manage">
                        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                        <template slot="accordion-trigger">
                          <h3><a href="#">Section Manage</a></h3>
                        </template>
                        <!-- This slot will handle all the content that is passed to the accordion -->
                        <template slot="accordion-content">
                          <div id="section-manage-container"></div>
                        </template>
                      </AccordianItem>

                      <AccordianItem name="template-layer">
                        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                        <template slot="accordion-trigger">
                          <h3><a href="#">Template Layer</a></h3>
                        </template>
                        <!-- This slot will handle all the content that is passed to the accordion -->
                        <template slot="accordion-content">
                          <div id="template-layer-container"></div>
                        </template>
                      </AccordianItem>
                    </Accordian>
                  </ul>
                </div>
              </div>

              <!-- Edit Tab -->
              <div id="tab2" class="tabContent" v-show="edit_flag">
                <div class="search-wrapper"></div>
                <div id="accordian">
                  <ul>



                          <!-- End of list font -->

                            <!-- start colour bar section-->

                            <!-- <li class="active">
                           <h3><a href="#">Colour</a></h3>
                          <ul>
                           <li>

                           <div class="sidebar-box-wrap color-box-rwap">
                            <h4>Change Colour</h4>
                            <p>(change colour by dragging the bar) </p>
                            <div class="colorbar">
                              <img src="canvas-img/color-bar.png">
                            </div>

                           <div class="generated-palette ">
                            <p>
                            Generated palette from the selection
                              (choose any of the below colour to apply)
                            </p>

                           <div class="color-bar">
                           <img src="canvas-img/generated-palette.png">
                           </div>

                           <p>or you can also choose from the below palette</p>

                            <div class="color-palette">
                           <img src="canvas-img/choose-palette.png">
                           </div>

                           </div>

                           </div>

                           </li>
                          </ul>
                           </li> -->





                    <!-- end colour bar section-->






                    <Accordian>
                      <AccordianItem>
                        <template slot="accordion-trigger">
                          <h3><a href="#">Template</a></h3>
                        </template>
                        <template slot="accordion-content">
                          <BaseTemplate @show-preview-modal="openPreviewModal" :selectedIndex="selectedTemplateIndex" />
                        </template>
                      </AccordianItem>
                      <AccordianItem>
                        <template slot="accordion-trigger">
                          <h3><a href="#">Font</a></h3>
                        </template>
                        <template slot="accordion-content">
                          <BaseFont />
                        </template>
                      </AccordianItem>
                      <AccordianItem name="section-edit">
                        <template slot="accordion-trigger">
                          <h3><a href="#">Section Edit</a></h3>
                        </template>
                        <template slot="accordion-content">
                          <div class="styles-container">
                            <div class="styles-container-t"></div>
                            <div class="styles-container-b"></div>
                          </div>
                        </template>
                      </AccordianItem>
                      <AccordianItem>
                        <template slot="accordion-trigger">
                          <h3><a href="#">Colour</a></h3>
                        </template>
                        <template slot="accordion-content">
                          <div class="sidebar-box-wrap color-box-rwap">
                            <h4>Change Colour</h4>
                            <p>(change colour by dragging the bar) </p>
                            <div class="colorbar">
                              <img src="canvas-img/color-bar.png">
                            </div>

                           <div class="generated-palette ">
                            <p>
                            Generated palette from the selection
                              (choose any of the below colour to apply)
                            </p>

                           <div class="color-bar">
                           <img src="canvas-img/generated-palette.png">
                           </div>

                           <p>or you can also choose from the below palette</p>

                            <div class="color-palette">
                           <img src="canvas-img/choose-palette.png">
                           </div>

                           </div>

                           </div>
                        </template>
                      </AccordianItem>

                        <AccordianItem>
                        <template slot="accordion-trigger">
                          <h3><a href="#">Page Setting</a></h3>
                        </template>
                        <template slot="accordion-content">
                          <div class="sidebar-box-wrap color-box-rwap">

                            <form class="sidebar-setting-form">
                              <div class="form-field-wrap">
                                <label>Name Page</label>
                                  <input type="name" placeholder="Page Name">
                              </div>

                                 <div class="form-field-wrap">
                                <label>Page link </label>
                                  <input type="name" placeholder="https://www.meroit.com/home">
                              </div>

                              <div class="form-field-wrap">
                                <label>Page meta tag
                                      (enter meta tags for better crawling by
                                      search engines.Page link </label>
                                  <input type="name" placeholder="Tag Title">
                              </div>

                                <div class=" formbox-bg">
                               <div class="form-field-wrap">
                                <label>Description</label>
                                   <textarea></textarea>
                              </div>

                               <div class="form-field-wrap">
                                <label>Keywords</label>
                                   <textarea></textarea>
                              </div>
                                </div>

                                <div class="analytics">
                                  <p>Analytics :</p>
                                </div>

                                  <div class="facebookpixel">
                                  <p>Facebook Pixels :</p>
                                </div>


                                <div class="savebtn mrb10">

                              <input type="submit" value="Save" >
                                </div>








                            </form>



                           </div>
                        </template>
                      </AccordianItem>


                       <AccordianItem>
                        <template slot="accordion-trigger">
                          <h3><a href="#">Site Setting</a></h3>
                        </template>
                        <template slot="accordion-content">
                          <div class="sidebar-box-wrap color-box-rwap">

                            <form class="sidebar-setting-form">
                              <div class="form-field-wrap">
                                <label>Site name</label>
                                  <input type="name" placeholder="Site Name">
                              </div>

                                 <div class="form-field-wrap">
                                <label>Site address </label>
                                  <input type="name" placeholder="https://www.meroit.com/home">
                              </div>

                              <div class="form-field-wrap">
                                <label>Site meta tag
                                      (enter meta tags for better crawling by
                                      search engines.</label>
                                  <input type="name" placeholder="Tag Title">
                              </div>

                                <div class=" formbox-bg">
                               <div class="form-field-wrap">
                                <label>Description</label>
                                   <textarea></textarea>
                              </div>

                               <div class="form-field-wrap">
                                <label>Keywords</label>
                                   <textarea></textarea>
                              </div>
                                </div>

                                <div class="analytics">
                                  <p>Analytics :</p>
                                </div>

                                  <div class="facebookpixel">
                                  <p>Facebook Pixels :</p>
                                </div>

                                <div class="favicon">
                                  <p>Favicon:</p>
                                </div>


                                <div class="savebtn mrb10">

                              <input type="submit" value="Save" >
                                </div>








                            </form>



                           </div>
                        </template>
                      </AccordianItem>



                    </Accordian>
                    <!-- End of list template -->

                  </ul>
                </div>
                <!-- End of accordian -->
              </div>
              <!-- End of Edit Tab -->
            </div>
          </div>
        </div>
        <div id="appSelectModal" class="previewModal">
            <div>
              <h3>Selected Apps</h3>
              <p>Your now working on below aps</p>
              <div class="appsListing overflowY--auto">
                <!-- <div class="img-block">
                  <img class="w-50" src="canvas-img/listimg.jpg" />
                </div> -->
              </div>
            </div>
        </div>

        <div id="templateSelectModal" class="previewModal" :class="[showPreviewModal ? 'showPreviewModal' : '']">
            <div>
              <h3>Selected Template</h3>
              <p>Your now working on below Template</p>
              <div class="appsListing overflowY--auto ">
                <div class="img-block" @click="changeTemplate">
                  <img src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_960_720.jpg" />
                </div>
              </div>
            </div>
        </div>
        <div class="editior-contain" id="main">
          <div id="gjs"></div>
          <span
            @click="openNav"
          class="push-left"
            data-tooltip-position="right"

          >
            <img
              src="canvas-img/icon15.svg"
              class="sidebar-button"
              data-gjs-draggable="false"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "./dist/css/grapes.min.css";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
@import "https://use.fontawesome.com/releases/v5.0.7/css/all.css";
@import "https://fonts.googleapis.com/css?family=Roboto:100,200,300,400&display=swap";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css";
@import "./dist/css/editor.css";

.overflowY--auto {
  overflow-y: auto !important;
}

.img-fluid {
  max-width: 100%;
}

.w-50 {
  width: 50% !important;
}

.cursor-pointer {
  cursor: pointer;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.gjs-field-checkbox input:checked + .gjs-chk-icon {
  border-color: rgb(8 7 7) !important;
  border-width: 0 2px 2px 0 !important;
  border-style: solid !important;
}

#menuTrait {
  opacity: 1;
  height: auto;
  transition: opacity 0.5s ease-out, height 0.5s ease-out;
}

.hideContent {
  transition: opacity 0.5s ease-out;
  opacity: 0 !important;
  height: 0 !important;
  overflow: hidden;
}

.gjs-one-bg {
  background-color: #fff;
}

.accordion__wrapper > ul {
  display: block !important;
}

.previewModal {
  position: absolute;
  top: 83px;
  transform: translate(-120%, 6%);
  height: 70vh;
  background: #f4f7f6;
  width: 28vw;
  min-width: 150px;
  z-index: 999;
  padding: 40px;
  transition: all 0.3s ease;
}

.previewModal h3 {
  color: #265c96
}

.showPreviewModal {
  transform:translate(69%, 6%) !important;
}

#push-left {
  z-index: 0 !important;
  left: 1% !important;
}

.gjs-block-label.active {
  background-image: url("/img/aerrow-hover2.5423579c.svg");
  background-repeat: no-repeat;
  height: 40px;
  width: 203px;
  color: #035b96;
  font-size: 14px;
}

#section-manage-container {
  padding-left: 12px;
  padding-right: 12px;
}

.push-left.opensidebar-btn{left: 18%;}

 .push-left {
    z-index: 1 !important;
}

.appsListing {
  height: 50vh;
  overflow: hidden;
  padding: 10px 20px;
  padding-left: 0;
}

.img-block {
  cursor: pointer;
}

</style>
