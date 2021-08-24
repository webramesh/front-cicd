<template>
      <div class="editior-header-container" id="main-header">
         <div class="editior-brand" id="hamburger-nav">
            <img src="images/logo.png">
         </div>
         <div class="editior-headernav" id="nav">
            <ul>
               <li><a href="#">Dashboard </a></li>
               <li>123 Restaurant</li>
            </ul>
         </div>
         <div class="icon-profile-wrapper" id="icon-wrapper">
            <div class="header-icon-container">
               <span class="">
                  <div class="panel__devices noti__item"></div>
               </span>
               <span class="noti__item border0" data-tooltip="Undo" data-tooltip-position="bottom" @click="undo()">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
                     <path class="st0" d="M12.82,21.57L8.55,17.3h19.18c-1.01,6.36-6.5,11.22-13.14,11.22c-7.36,0-13.32-5.97-13.32-13.32  S7.24,1.87,14.59,1.87c6.64,0,12.13,4.86,13.14,11.22H8.55l4.27-4.27"/>
                  </svg>
               </span>
               <span class="noti__item" data-tooltip="Redo" data-tooltip-position="bottom" @click="redo()">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
                     <path class="st0" d="M14.59,28.52"/>
                     <path class="st0" d="M24.1,12.37"/>
                     <path class="st0" d="M16.19,8.82l4.27,4.27H1.27C2.28,6.74,7.77,1.87,14.41,1.87c7.36,0,13.32,5.97,13.32,13.32  s-5.97,13.32-13.32,13.32c-6.64,0-12.13-4.86-13.14-11.22h19.18l-4.27,4.27"/>
                  </svg>
               </span>
               <span class="noti__item" data-tooltip="Desktop" data-tooltip-position="bottom" id="desktop" @click="setDevice('desktop')">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 38 28" style="enable-background:new 0 0 38 28;" xml:space="preserve">
                     <g>
                        <path class="st0" d="M33.94,13.41H3.98c-1.1,0-2-0.9-2-2V3.74c0-1.1,0.9-2,2-2h29.96c1.1,0,2,0.9,2,2v7.67   C35.94,12.51,35.04,13.41,33.94,13.41z"/>
                        <path class="st0" d="M14.85,26.5H3.98c-1.1,0-2-0.9-2-2v-4.59c0-1.1,0.9-2,2-2h10.86c1.1,0,2,0.9,2,2v4.59   C16.85,25.6,15.95,26.5,14.85,26.5z"/>
                        <path class="st0" d="M34.3,26.5H23.44c-1.1,0-2-0.9-2-2v-4.59c0-1.1,0.9-2,2-2H34.3c1.1,0,2,0.9,2,2v4.59   C36.3,25.6,35.4,26.5,34.3,26.5z"/>
                     </g>
                  </svg>
               </span>
               <span class="noti__item" data-tooltip="Tablet" data-tooltip-position="bottom" id="tablet" @click="setDevice('tablet')">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 35 28" style="enable-background:new 0 0 35 28;" xml:space="preserve">
                     <g>
                        <path class="st0" d="M32.12,27.5H2.16c-1.1,0-2-0.9-2-2V2.74c0-1.1,0.9-2,2-2h29.96c1.1,0,2,0.9,2,2V25.5   C34.12,26.6,33.22,27.5,32.12,27.5z"/>
                        <g>
                           <g>
                              <g>
                                 <line class="st1" x1="7.31" y1="0.74" x2="7.31" y2="2.74"/>
                                 <line class="st2" x1="7.31" y1="7.29" x2="7.31" y2="23.23"/>
                                 <line class="st1" x1="7.31" y1="25.5" x2="7.31" y2="27.5"/>
                              </g>
                           </g>
                           <g>
                              <g>
                                 <line class="st1" x1="17.14" y1="0.74" x2="17.14" y2="2.74"/>
                                 <line class="st2" x1="17.14" y1="7.29" x2="17.14" y2="23.23"/>
                                 <line class="st1" x1="17.14" y1="25.5" x2="17.14" y2="27.5"/>
                              </g>
                           </g>
                           <g>
                              <g>
                                 <line class="st1" x1="26.97" y1="0.74" x2="26.97" y2="2.74"/>
                                 <line class="st2" x1="26.97" y1="7.29" x2="26.97" y2="23.23"/>
                                 <line class="st1" x1="26.97" y1="25.5" x2="26.97" y2="27.5"/>
                              </g>
                           </g>
                        </g>
                     </g>
                  </svg>
               </span>
               <span class="noti__item mobile-view" data-tooltip="mobile" data-tooltip-position="bottom" id="mobile" @click="setDevice('mobile')">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 20 33" style="enable-background:new 0 0 20 33;" xml:space="preserve">
                     <g>
                        <path class="st0" d="M15.52,33.02H3.51c-2.03,0-3.68-1.65-3.68-3.68V4.3c0-2.03,1.65-3.68,3.68-3.68h12.01   c2.03,0,3.68,1.65,3.68,3.68v25.04C19.21,31.37,17.56,33.02,15.52,33.02z"/>
                        <circle class="st1" cx="9.52" cy="29.9" r="1.64"/>
                        <line class="st0" x1="7.03" y1="3.07" x2="12.01" y2="3.07"/>
                     </g>
                  </svg>
               </span>
            </div>
            <div class="toggle" id="toggle-container">
               <label class="toggle-control">
               <input type="checkbox" checked="checked">
               <span class="control"></span>
               </label>
            </div>
            <div class="publishbtn">
               <button onclick="publish()">Publish</button>
            </div>
            <span class="noti__item notification" data-tooltip="Support" data-tooltip-position="bottom">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 22 25" style="enable-background:new 0 0 22 25;" xml:space="preserve">
                  <g>
                     <path class="st0" d="M5.43,10.43c-1.18,0-2.15,0.96-2.15,2.15v5.82c0,1.18,0.96,2.15,2.15,2.15s2.15-0.96,2.15-2.15v-5.82   C7.57,11.39,6.61,10.43,5.43,10.43z"/>
                     <path class="st0" d="M1.91,11.97C1.05,12.25,0.42,13.05,0.42,14v2.96c0,0.95,0.63,1.75,1.49,2.03c-0.03-0.2-0.06-0.4-0.06-0.6   v-5.82C1.85,12.36,1.88,12.17,1.91,11.97z"/>
                     <path class="st0" d="M16.87,10.43c-1.18,0-2.15,0.96-2.15,2.15v5.82c0,1.18,0.96,2.15,2.15,2.15c0.22,0,0.42-0.04,0.61-0.1   c-0.27,0.88-1.08,1.53-2.05,1.53h-2.28c-0.3-0.83-1.08-1.43-2.01-1.43C9.97,20.53,9,21.5,9,22.68c0,1.18,0.96,2.15,2.15,2.15   c0.93,0,1.72-0.6,2.01-1.43h2.28c1.97,0,3.58-1.6,3.58-3.58v-1.43v-5.82C19.02,11.39,18.05,10.43,16.87,10.43z"/>
                     <path class="st0" d="M20.39,11.97c0.03,0.2,0.06,0.4,0.06,0.6v5.82c0,0.21-0.03,0.41-0.06,0.6c0.86-0.28,1.49-1.08,1.49-2.03V14   C21.88,13.05,21.25,12.25,20.39,11.97z"/>
                     <path class="st0" d="M11.15,0.41c-5.92,0-10.73,4.81-10.73,10.73v0.02c0.43-0.32,0.92-0.56,1.46-0.66   c0.33-4.83,4.36-8.65,9.27-8.65s8.93,3.83,9.27,8.65c0.54,0.11,1.04,0.34,1.46,0.66v-0.02C21.88,5.22,17.07,0.41,11.15,0.41z"/>
                  </g>
               </svg>
            </span>
            <span class="noti__item notification" data-tooltip="Notification" data-tooltip-position="bottom" onclick="notifications()">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 22 25" style="enable-background:new 0 0 22 25;" xml:space="preserve">
                  <g>
                     <path class="st0" d="M18.67,12.95v-2.32c0-3.39-2.25-6.26-5.34-7.2V2.37c0-1.2-0.98-2.18-2.18-2.18S8.96,1.17,8.96,2.37v1.05   c-3.09,0.94-5.34,3.81-5.34,7.2v2.32c0,2.98-1.14,5.8-3.2,7.95c-0.2,0.21-0.26,0.52-0.14,0.79c0.11,0.27,0.38,0.44,0.67,0.44h6.63   c0.34,1.66,1.81,2.91,3.57,2.91c1.76,0,3.23-1.25,3.57-2.91h6.63c0.29,0,0.56-0.17,0.67-0.44c0.11-0.27,0.06-0.58-0.14-0.79   C19.81,18.75,18.67,15.93,18.67,12.95L18.67,12.95z M10.42,2.37c0-0.4,0.33-0.73,0.73-0.73s0.73,0.33,0.73,0.73v0.76   c-0.24-0.02-0.48-0.04-0.73-0.04s-0.49,0.01-0.73,0.04V2.37z M11.15,23.59c-0.95,0-1.76-0.61-2.06-1.46h4.12   C12.91,22.98,12.1,23.59,11.15,23.59L11.15,23.59z M2.52,20.68c1.66-2.22,2.56-4.91,2.56-7.73v-2.32c0-3.35,2.72-6.07,6.07-6.07   s6.07,2.72,6.07,6.07v2.32c0,2.81,0.9,5.5,2.56,7.73H2.52z M2.52,20.68"/>
                     <path class="st0" d="M20.62,10.63c0,0.4,0.33,0.73,0.73,0.73c0.4,0,0.73-0.33,0.73-0.73c0-2.92-1.14-5.66-3.2-7.72   c-0.28-0.28-0.75-0.28-1.03,0c-0.28,0.28-0.28,0.75,0,1.03C19.63,5.72,20.62,8.1,20.62,10.63L20.62,10.63z M20.62,10.63"/>
                     <path class="st0" d="M0.95,11.36c0.4,0,0.73-0.33,0.73-0.73c0-2.53,0.98-4.91,2.77-6.69c0.28-0.28,0.28-0.75,0-1.03   c-0.28-0.28-0.75-0.28-1.03,0c-2.06,2.06-3.2,4.81-3.2,7.72C0.22,11.03,0.55,11.36,0.95,11.36L0.95,11.36z M0.95,11.36"/>
                  </g>
               </svg>
            </span>
         </div>
         <div class="profile-container" id="profile-container">
            <img class="profile-picture" src="https://kbrowning2.files.wordpress.com/2019/12/screen-shot-2019-12-22-at-11.59.55-am.png" onclick="profile()" />
         </div>
      </div>
</template>

<script>
   import Editor from '../Editor.vue';
    export default {
        name: 'EditorHeader',
        components: {
           Editor
        },
        data () {
            return {

            }
        },
        mounted () {

        },
        methods: {
            setDevice(device) {
                if (device == 'mobile') {
                    this.editor.setDevice('Mobile');
                } else if (device == 'tablet') {
                    this.editor.setDevice('tablet');
                } else if (device == 'desktop') {
                    this.editor.setDevice('Desktop');
                } else {
                    this.editor.setDevice('Desktop');
                }
            }
        }

    }
</script>