import { __adjustEditor } from '../lib/helpers';
import store from '@/store';

export default editor => {
  editor.on('page:select', page => {
    // document.querySelector('.push-left').click();
    const storeEditor = store.state.editor;
    const TOP_LEVEL_TAGS = ['header', 'footer', 'section'];

    const frame = page.getMainFrame();
    const components = editor.getComponents();
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
      });
    });

    frame.once('loaded', () => {
      const component = frame.getComponent();
      const rootEl = component.getEl();

      const blogSection = rootEl.querySelector('section[data-app-name="blog"]');
      if (blogSection) {
        storeEditor.blogs.forEach(blog => {
          const blogNode = blogSection?.querySelector(`.${blog.blogId}`);
          if (blogNode) {
            blogNode.querySelector('.blog_category').innerText =
              blog.blogCategory;
            blogNode.querySelector('.blog_title').innerText = blog.blogTitle;
            blogNode.querySelector('.blog_published_date').innerText =
              blog.blogDate;
          }
        });
      }
    });
  });
};
