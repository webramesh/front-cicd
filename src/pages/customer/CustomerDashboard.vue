<script>
import CustomerDashboardLayout from "@/layout/CustomerDashboardLayout";
import ProgressBar from "@/components/ProgressBar";
import Tabs from "@/components/Tabs";
import Tab from "@/components/Tab";
export default {
  name: "CustomerDashboard",
  components: {
    CustomerDashboardLayout,
    ProgressBar,
    Tabs,
    Tab,
  },
};
</script>

<template>
  <CustomerDashboardLayout>
    <div class="main-container">
      <div class="d-flex justify-content-start main-container-row">
        <Tabs>
          <Tab name="unpublished sites" :selected="true">
            <div class="container">
              <div class="folder">
                <div class="row justify-content-between">
                  <p class="folder-p">My Folders</p>
                  <p class="folder-p-last">
                    <i class="fas fa-th-large"></i>
                    <i class="fas fa-angle-down"></i>
                  </p>
                </div>
                <div class="row">
                  <a class="card d-flex first-folder-a" href="#">
                    <!-- <img src="/images/plus.svg" height="65px" alt="Folder"> -->
                    <!-- <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"/></svg> -->
                    <svg height="51px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"
                      />
                    </svg>
                    <div class="card-body">
                      <div class="card-title text-center main-container-text">Add folder</div>
                    </div>
                  </a>
                  <a class="card folder-a" href="#">
                    <img src="/images/folder-icon.svg" style="width: 68px" height="51" alt="Folder" />
                    <div class="card-body">
                      <div class="card-title main-container-text">Client's Project</div>
                    </div>
                  </a>
                  <a class="card folder-a" href="#">
                    <img src="/images/folder-icon.svg" style="width: 68px" height="51" alt="Folder" />
                    <div class="card-body">
                      <div class="card-title main-container-text">Client's Project</div>
                    </div>
                  </a>
                  <a class="card folder-a" href="#">
                    <img src="/images/folder-icon.svg" style="width: 68px" height="51" alt="Folder" />
                    <div class="card-body">
                      <div class="card-title main-container-text">Client's Project</div>
                    </div>
                  </a>
                  <a class="card folder-a" href="#">
                    <img src="/images/folder-icon.svg" style="width: 68px" height="51" alt="Folder" />
                    <div class="card-body">
                      <div class="card-title main-container-text">Client's Project</div>
                    </div>
                  </a>
                  <a class="card folder-a" href="#">
                    <img src="/images/folder-icon.svg" style="width: 68px" height="51" alt="Folder" />
                    <div class="card-body">
                      <div class="card-title main-container-text">Client's Project</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="website-container">
              <div class="container">
                <div class="d-flex justify-content-center website-btn-centered">
                  <button
                    @click="$router.push({ name: 'category' })"
                    class="btn btn-primary create-website-btn w-auto"
                  >
                    <span>
                      <i class="fa fa-plus-circle"></i>CREATE A NEW WEBSITE
                    </span>
                  </button>
                </div>
                <div class="row">
                  <p class="website-p">My Websites</p>
                </div>
                <div class="website">
                  <div class="row justify-content-center">
                    <!-- start project-item -->
                    <div class="col-md-4">
                      <a class="card website-a" href="#">
                        <i class="website-icon fas fa-ellipsis-h"></i>
                        <div class="website-card-wrapper">
                          <img class="website-img" src="/images/resturant.jpg" alt="resturant" />
                        </div>
                        <div class="card-body">
                          <ProgressBar />
                          <div class="card-title">Project Name</div>
                          <div class="card-text">
                            <button class="btn btn-website">Enter Site</button>
                            <button class="btn btn-website">Edit Site</button>
                          </div>
                        </div>
                      </a>
                    </div>
                    <!-- end project-item -->

                    <!-- start project-item -->
                    <div class="col-md-4">
                      <a class="card website-a" href="#">
                        <i class="website-icon fas fa-ellipsis-h"></i>
                        <div class="website-card-wrapper">
                          <img class="website-img" src="/images/resturant.jpg" alt="resturant" />
                        </div>
                        <div class="card-body">
                          <ProgressBar />
                          <div class="card-title">Project Name</div>
                          <div class="card-text">
                            <button class="btn btn-website">Enter Site</button>
                            <button class="btn btn-website">Edit Site</button>
                          </div>
                        </div>
                      </a>
                    </div>
                    <!-- end project-item -->

                    <!-- start project-item -->
                    <div class="col-md-4">
                      <a class="card website-a" href="#">
                        <i class="website-icon fas fa-ellipsis-h"></i>
                        <div class="website-card-wrapper">
                          <img class="website-img" src="/images/resturant.jpg" alt="resturant" />
                        </div>
                        <div class="card-body">
                          <ProgressBar />
                          <div class="card-title">Project Name</div>
                          <div class="card-text">
                            <button class="btn btn-website">Enter Site</button>
                            <button class="btn btn-website">Edit Site</button>
                          </div>
                        </div>
                      </a>
                    </div>
                    <!-- end project-item -->
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab name="published sites">
            <div class="container">
              <div class="folder">
                <div class="row justify-content-between">
                  <p class="folder-p">My Folders</p>
                  <p class="folder-p-last">
                    <i class="fas fa-th-large"></i>
                    <i class="fas fa-angle-down"></i>
                  </p>
                </div>
                <div class="row">
                  <a class="card d-flex first-folder-a" href="#">
                    <!-- <img src="/images/plus.svg" height="65px" alt="Folder"> -->
                    <!-- <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"/></svg> -->
                    <svg height="51px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"
                      />
                    </svg>
                    <div class="card-body">
                      <div class="card-title text-center main-container-text">Add folder</div>
                    </div>
                  </a>
                  <a class="card folder-a" href="#">
                    <img src="/images/folder-icon.svg" style="width: 68px" height="51" alt="Folder" />
                    <div class="card-body">
                      <div class="card-title main-container-text">Client's Project</div>
                    </div>
                  </a>
                  <a class="card folder-a" href="#">
                    <img src="/images/folder-icon.svg" style="width: 68px" height="51" alt="Folder" />
                    <div class="card-body">
                      <div class="card-title main-container-text">Client's Project</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="website-container">
              <div class="container">
                <div class="d-flex justify-content-center website-btn-centered">
                  <button
                    @click="$router.push({ name: 'category' })"
                    class="btn btn-primary create-website-btn w-auto"
                  >
                    <span>
                      <i class="fa fa-plus-circle"></i>CREATE A NEW WEBSITE
                    </span>
                  </button>
                </div>
                <div class="row">
                  <p class="website-p">My Websites</p>
                </div>
                <div class="website">
                  <div class="row justify-content-center">
                    <!-- start project-item -->
                    <div class="col-md-4">
                      <a class="card website-a" href="#">
                        <i class="website-icon fas fa-ellipsis-h"></i>
                        <div class="website-card-wrapper">
                          <img class="website-img" src="/images/resturant.jpg" alt="resturant" />
                        </div>
                        <div class="card-body">
                          <ProgressBar />
                          <div class="card-title">Project Name</div>
                          <div class="card-text">
                            <button class="btn btn-website">Enter Site</button>
                            <button class="btn btn-website">Edit Site</button>
                          </div>
                        </div>
                      </a>
                    </div>
                    <!-- end project-item -->

                    <!-- start project-item -->
                    <div class="col-md-4">
                      <a class="card website-a" href="#">
                        <i class="website-icon fas fa-ellipsis-h"></i>
                        <div class="website-card-wrapper">
                          <img class="website-img" src="/images/resturant.jpg" alt="resturant" />
                        </div>
                        <div class="card-body">
                          <ProgressBar />
                          <div class="card-title">Project Name</div>
                          <div class="card-text">
                            <button class="btn btn-website">Enter Site</button>
                            <button class="btn btn-website">Edit Site</button>
                          </div>
                        </div>
                      </a>
                    </div>
                    <!-- end project-item -->
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab name="domains">
            <div class="container">
              <ul>
                <li>abc.com</li>
                <li>onlinekhabar.com</li>
              </ul>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  </CustomerDashboardLayout>
</template>

<style scoped src="@/layout/customer-dashboard-layout/styles.css"></style>
<style>
.folder {
  margin-bottom: 45px;
}
</style>