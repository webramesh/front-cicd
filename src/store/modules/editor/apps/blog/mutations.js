export default {
  SET_BLOGS_ON_LOAD(state, blogs) {
    state.blogs = blogs;
  },
  UPDATE_BLOG(state, payload) {
    const blogIndex = state.blogs.findIndex(
      blog => blog.blogId === payload.updatedBlog.blogId
    );
    state.blogs.splice(blogIndex, 1, payload.updatedBlog);
  }
};
