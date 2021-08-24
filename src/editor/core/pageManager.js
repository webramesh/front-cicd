/*
Todo:
get pages from API and add into pages array
*/

export default {
      pages: [
          {
            id: "blog-listing",
            name: "Blog Listing",
            component: /* html */ `
            <section
              class="blog-section py-5"
              data-app-name="blog"
              data-show="true"
            >
              <div class="container">
                <div class="head-box text-center mb-5">
                  <h2 data-gjs-type="default">Our blog post</h2>
                  <h6 data-gjs-type="default" class="text-underline-primary">
                    This is Blog panel
                  </h6>
                  <div class="text-underline"></div>
                </div>
                <div class="row blog-grids">
                  <div class="col-lg-4 grid blog1">
                    <div class="entry-media">
                      <img src="canvas-img/gallery1.png" alt />
                    </div>
                    <div class="entry-body">
                      <span data-gjs-type="default" class="cat mk_blog_category"
                        >inspiration</span
                      >
                      <h3>
                        <a
                          data-gjs-type="default"
                          class="mk_blog_title"
                          href="#"
                          target="_blank"
                          >Ut enim ad minim veniam, quis nostrud 1</a
                        >
                      </h3>
                      <div
                        class="read-more-date d-lg-flex justify-content-between"
                      >
                        <a data-gjs-type="default" href="#" target="_blank"
                          >Read More..</a
                        >
                        <span data-gjs-type="default" class="date mk_blog_date"
                          >1 Hour Ago</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 grid blog2">
                    <div class="entry-media">
                      <img src="canvas-img/gallery4.jpg" alt />
                    </div>
                    <div class="entry-body">
                      <span data-gjs-type="default" class="cat mk_blog_category"
                        >inspiration</span
                      >
                      <h3>
                        <a
                          data-gjs-type="default"
                          class="mk_blog_title"
                          href="#"
                          target="_blank"
                          >Blog 2</a
                        >
                      </h3>
                      <div
                        class="read-more-date d-lg-flex justify-content-between"
                      >
                        <a data-gjs-type="default" href="#" target="_blank"
                          >Read More..</a
                        >
                        <span data-gjs-type="default" class="date mk_blog_date"
                          >2 Hour Ago</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 grid blog3">
                    <div class="entry-media">
                      <img src="canvas-img/gallery4.jpg" alt />
                    </div>
                    <div class="entry-body">
                      <span data-gjs-type="default" class="cat mk_blog_category"
                        >inspiration</span
                      >
                      <h3>
                        <a
                          data-gjs-type="default"
                          class="mk_blog_title"
                          href="#"
                          target="_blank"
                          >Blog 3</a
                        >
                      </h3>
                      <div
                        class="read-more-date d-lg-flex justify-content-between"
                      >
                        <a data-gjs-type="default" href="#" target="_blank"
                          >Read More..</a
                        >
                        <span data-gjs-type="default" class="date mk_blog_date"
                          >3 Hour Ago</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            `,
          },
          {
            id: "page-2",
            name: "Page 2",
            component: '<h1 id="comp2">Page 2</h1>',
            styles: `#comp2 { color: green }`,
          },
          {
            id: "page-3",
            name: "Page 3",
            component: '<h1 id="comp3">Page 3</h1>',
            styles: `#comp3 { color: blue }`,
          },
        ],
}