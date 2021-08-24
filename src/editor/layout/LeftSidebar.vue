<template>
    <div class="editior-main-container">
         <div id="sidebar" class="sidenav">
            <div class="tabBox">
               <ul class="tabs">
                  <li><a href="#tab1">Add</a></li>
                  <li><a href="#tab2">Edit</a></li>
               </ul>
               <div class="tabContainer">
                  <div id="tab1" class="tabContent">
                     <div class="search-wrapper">
                        <div class="form-group has-search">
                           <span class="form-control-feedback"><img src="images/icon_search.png"></span>
                           <input type="text" class="form-control" placeholder="Search">
                           <span class="border"></span>
                        </div>
                     </div>
                     <div id="accordian">
                        <ul>
                           <li class="active">
                              <h3><a href="#">Elements</a></h3>
                              <ul>
                                 <li>
                                    <span  type="button" class="btn btn-link btn-arrow-right"> <a href="#" type="button">Text</a></span>
                                    <ul>
                                       <div>
                                          <h3>Image Box</h3>
                                          <p>Select & add any of the below item to Section</p>
                                          <div class="scrollbar">
                                             <div class="overflow">
                                                <li>
                                                   <div class="img-block">
                                                      <a href="#"><img src="images/listimg.jpg"></a>
                                                   </div>
                                                   <div class="img-block">
                                                      <a href="#"><img src="images/listimg.jpg"></a>
                                                   </div>
                                                </li>
                                             </div>
                                          </div>
                                       </div>
                                    </ul>
                                 </li>
                                 <li>
                                    <span type="button" class="btn btn-link btn-arrow-right" ><a href="#">Image Box</a></span>
                                    <ul>
                                       <li><a href="#">Today's tasks</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <span type="button" class="btn btn-link btn-arrow-right" ><a href="#">Element 3</a></span>
                                    <ul>
                                       <li><a href="#">Today's tasks</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <span type="button" class="btn btn-link btn-arrow-right" ><a href="#">Element 4</a></span>
                                    <ul>
                                       <li><a href="#">Today's tasks</a></li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <div id="blocks"></div>
                           </li>
                           <li>
                              <h3><a href="#">Apps</a></h3>
                              <ul>
                                 <li>
                                    <span  type="button" class="btn btn-link btn-arrow-right" > <a href="#" type="button">Text</a></span>
                                    <ul>
                                       <div>
                                          <h3>Image Box</h3>
                                          <p>Select & add any of the below item to Section</p>
                                          <div class="scrollbar">
                                             <div class="overflow">
                                                <li>
                                                   <div class="img-block">
                                                      <a href="#"><img src="images/listimg.jpg"></a>
                                                   </div>
                                                   <div class="img-block">
                                                      <a href="#"><img src="images/listimg.jpg"></a>
                                                   </div>
                                                </li>
                                             </div>
                                          </div>
                                       </div>
                                    </ul>
                                 </li>
                                 <li>
                                    <span type="button" class="btn btn-link btn-arrow-right" ><a href="#">Image Box</a></span>
                                    <ul>
                                       <li><a href="#">Today's tasks</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <span type="button" class="btn btn-link btn-arrow-right" ><a href="#">Element 3</a></span>
                                    <ul>
                                       <li><a href="#">Today's tasks</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <span type="button" class="btn btn-link btn-arrow-right" ><a href="#">Element 4</a></span>
                                    <ul>
                                       <li><a href="#">Today's tasks</a></li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <h3><a href="#">Menu</a></h3>
                              <ul>
                                 <li> <span  type="button" class="btn btn-link btn-arrow-right" ><a href="#">Box</a></span></li>
                                 <li> <span  type="button" class="btn btn-link btn-arrow-right" ><a href="#">Box</a></span></li>
                                 <li><a href="#">Global favs</a></li>
                                 <li> <span  type="button" class="btn btn-link btn-arrow-right" ><a href="#">Box</a></span></li>
                                 <li><a href="#">My favs</a></li>
                                 <li> <span  type="button" class="btn btn-link btn-arrow-right" ><a href="#">Box</a></span></li>
                                 <li> <span  type="button" class="btn btn-link btn-arrow-right" ><a href="#">Box</a></span></li>
                                 <li><a href="#">Team favs</a></li>
                                 <li> <span  type="button" class="btn btn-link btn-arrow-right" ><a href="#">Box</a></span></li>
                                 <li><a href="#">Settings</a></li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h1 @click="modal_open()">Yes</h1>
                        <div class="traits-container"></div>
                     </div>
                  </div>
                  <div id="tab2" class="tabContent">
                     <p>SETTING</p>
                     <!-- <div class="panel__right">
                        <div class="traits-container"></div>
                     </div> -->
                  </div>
               </div>
            </div>
         </div>
         <EditorCanvas></EditorCanvas>
      </div>
</template>

<script>
   import EditorCanvas from './Canvas';
    export default {
        name: 'EditorSidebar',
        components: {
           EditorCanvas
        },
        mounted () {

        },
        methods: {
           
        }
    }
</script>