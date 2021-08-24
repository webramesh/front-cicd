<script>
  import draggable from "vuedraggable";

  import store from "../../store";
  import pageManager from "../core/pageManager";

  export default {
    name: "NavTrait",
    components: {
      draggable,
    },
    data: () => ({
      menus: [],
      linkLabel: "",
      linkHref: "#",
      selectedPage: "",
      isNewWindow: "",
      selectedMenu: "",
      isEditing: false,
      dragging: false,
      navUl: null,
      showMenuForm: false
    }),
    mounted() {
      this.navUl = this.$editor.Canvas.getDocument().querySelector("nav ul");
      this.menus = store.state.editor.menus;
    },
    methods: {
      showMenu() {
        this.showMenuForm = !this.showMenuForm
      },
      sanitizeTitle: function (title) {
        let slug = "";
        // Change to lower case
        let titleLower = title.toLowerCase();
        // Letter "e"
        slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, "e");
        // Letter "a"
        slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a");
        // Letter "o"
        slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o");
        // Letter "u"
        slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u");
        // Letter "d"
        slug = slug.replace(/đ/gi, "d");
        // Trim the last whitespace
        slug = slug.replace(/\s*$/g, "");
        // Change whitespace to "-"
        slug = slug.replace(/\s+/g, "-");

        return slug;
      },
      addMenu() {
        if (this.linkLabel == "") {
          return;
        }

        store.commit("editor/ADD_MENU", {
          href: this.linkHref,
          label: this.linkLabel,
          isNewWindow: this.isNewWindow,
          selectedPage: this.selectedPage,
          appName: this.linkLabel.toLowerCase(),
        });

        this.linkLabel = "";
        this.isNewWindow = "";
        this.selectedPage = "";
        this.linkHref = "";
      },
      editMenu(i, menu) {
        this.isEditing = true;
        this.showMenuForm = true;

        this.linkLabel = menu.label;
        this.linkHref = menu.href;
        this.isNewWindow = menu.isNewWindow;
        this.selectedPage = menu.selectedPage,

        this.selectedMenu = i;
      },
      updateMenu() {
        store.commit("editor/UPDATE_MENU", {
          selectedMenu: this.selectedMenu,
          updatedMenu: {
            href: this.linkHref,
            label: this.linkLabel,
            isNewWindow: this.isNewWindow,
            selectedPage: this.selectedPage,
            appName: this.linkLabel.toLowerCase(),
          },
        });

        this.linkLabel = "";
        this.isNewWindow = "";
        this.selectedPage = "";
        this.linkHref = "";
        this.isEditing = false;
      },
      deleteMenu(index) {
        store.commit("editor/DELETE_MENU", index);
      },
      saveMenu() {
        this.navUl.innerHTML = this.menus
          .map(
            (menu, i) =>
              `<li class="nav-item ${
                i == 0 ? "active" : ""
              }"> <a data-app-name="${menu.label.toLowerCase()}" target="${
                menu.isNewWindow === "yes" ? "_blank" : ""
              }" class="nav-link" href="${menu.href}">${menu.label}</a></li>`
          )
          .join("");
      },
      checkMove: function (e) {},
    },
    computed: {
      isDragging() {
        return this.dragging > -1;
      },
      pages() {
        return store.state.editor.pages
      }
    },
    watch: {
      linkLabel() {
        if (!this.isEditing) {
          this.linkHref = `#${this.sanitizeTitle(this.linkLabel)}`;
        }
      },
      selectedPage(newValue) {
        this.linkHref = newValue;
        console.log(this.linkHref)
      },
    },
  };
</script>

<template>
  <div>
    <ul class="menu-list" style="display: block !important">
      <div class="addmenu-group">
        <label @click="showMenu" for="addmenu" class="addmenu-label">
          <span v-if="isEditing">Update menu</span>
          <span v-else>Add new menu</span>
        </label>
        <div id="content" :class="[showMenuForm ? 'show' : 'hide']">
          <template v-if="isEditing">
            <form
              @submit.prevent="updateMenu"
              autocomplete="off"
              class="addmenu-form"
            >
              <div class="col-25">
                <input
                  type="text"
                  id="fname"
                  v-model="linkLabel"
                  placeholder="Menu Name"
                />
              </div>

              <div class="col-25">
                <select id="page" name="page" v-model="selectedPage">
                  <option value>Select Page</option>
                  <option v-for="page in pages" :value="page.pageName" :key="page.id" >
                    {{ page.pageName }}
                  </option>
                </select>
              </div>

              <div class="col-25" v-if="!selectedPage">
                <input type="text" v-model="linkHref" placeholder="Menu Link" />
              </div>

              <div class="col-25">
                <select
                  id="open-newwindow"
                  name="open-newwindow"
                  v-model="isNewWindow"
                >
                  <option value>Open in a new window</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <div class="savebtn-wrap">
                <input type="submit" value="Save" />
              </div>
            </form>
          </template>

          <template v-else>
            <form
              @submit.prevent="addMenu"
              autocomplete="off"
              class="addmenu-form"
            >
              <div class="col-25">
                <input
                  type="text"
                  id="fname"
                  v-model="linkLabel"
                  placeholder="Menu Name"
                />
              </div>

              <div class="col-25">
                <select id="page" name="page" v-model="selectedPage">
                  <option value>Select Page</option>
                  <option v-for="page in pages" :value="page.pageName" :key="page.id">
                    {{ page.pageName }}
                  </option>
                </select>
              </div>

              <div class="col-25" v-if="!selectedPage">
                <input type="text" v-model="linkHref" placeholder="Menu Link" />
              </div>

              <div class="col-25">
                <select
                  id="open-newwindow"
                  name="open-newwindow"
                  v-model="isNewWindow"
                >
                  <option value>Open in a new window</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <div class="savebtn-wrap">
                <input type="submit" value="Save" />
              </div>
            </form>
          </template>
        </div>
      </div>
      <draggable
        :list="menus"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
      >
        <li
          style="display: flex; align-items: center; cursor: pointer"
          v-for="(menu, i) in menus"
          :key="i"
        >
          <span class="btn btn-link menuspan-has-border">
            <a href="#" type="button">{{ menu.label }}</a></span
          >
          <div class="edit-delet-menu-wrap">
            <div><button @click="editMenu(i, menu)" class="addmenu-edit-add-icon"><div class="fas fa-pencil-alt gjs-toolbar-item"></div></button></div>
            <div><button @click="deleteMenu(i)"  class="addmenu-edit-add-icon"><div class="fas fa-trash-alt gjs-toolbar-item"></div></button></div>
          </div>
        </li>
      </draggable>
      <div class="savebtn-wrap">
        <input @click="saveMenu" type="submit" value="Save Menu" />
      </div>
    </ul>
  </div>
</template>

<style scoped>
  #content.show {
    display: block;
  }
  #content.hide {
    display: none;
  }
</style>