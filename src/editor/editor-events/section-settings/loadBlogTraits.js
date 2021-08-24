import {
  setMkBlogTrait,
  setTraits,
  removeNodes,
  displayNodes,
  getBlogByClass
} from '../../lib/helpers';


export default (editor, component, sectionAttrs) => {
  const pm = editor.Pages;

  /* adding trait on blog component after clicking, starts */
  if (component.getAttributes()['data-app-name'] == 'blog') {
    const blogSection = component.getEl();
    const allBlogs = blogSection.querySelectorAll('.grid');

    if (pm.getSelected().toJSON().id === 'blog-listing') {
      component.set({
        showDate: 'checked',
        showTitle: 'checked',
        showCategory: 'checked',
        showShortDescription: 'checked',
        traits: [...setMkBlogTrait('blog-listing'),...sectionAttrs.traits]
      });
    } else {
      // set the actual traits of blog
      component.set({
        showDate: 'checked',
        showTitle: 'checked',
        showCategory: 'checked',
        showShortDescription: 'checked',
        traits: [...setMkBlogTrait(),...sectionAttrs.traits]
      });
    }

    // fetch `manifest.json` to show or remove different trait options
    const traits = component.get('traits');
    traits.forEach(trait => {
      const traitType = trait.get('type');
      if (traitType == 'button' || traitType == 'select') return;
      setTraits({ trait, traitType });
    });

    // event listeners on different attributes
    component.on('change:showDate', handleShowDateChange);
    component.on('change:showCategory', handleShowCategoryChange);
    component.on('change:showTitle', handleShowTitleChange);
    component.on('change:showShortDescription', handleShortDescriptionChange);
    component.on('change:blogType', handleBlogTypeChange);
    component.on('change:newTitle', handleNewTitleChange);
    component.on('change:newDate', handleNewDateChange);

    // handle changes methods
    function handleShowDateChange(model, value) {
      const dateNodes = model.find('.blog_published_date');
      const showDate = value;

      if (!showDate) {
        removeNodes({ nodes: dateNodes });
      }

      if (showDate) {
        displayNodes({ nodes: dateNodes });
      }
    }

    function handleShowCategoryChange(model, value) {
      const categoryNodes = model.find('.mk_blog_category');
      const showCategory = value;

      if (!showCategory) {
        removeNodes({ nodes: categoryNodes });
      }

      if (showCategory) {
        displayNodes({ nodes: categoryNodes });
      }
    }

    function handleShowTitleChange(model, value) {
      const titleNodes = model.find('.blog_title');
      const showTitle = value;

      if (!showTitle) {
        removeNodes({ nodes: titleNodes });
      }

      if (showTitle) {
        displayNodes({ nodes: titleNodes });
      }
    }

    function handleShortDescriptionChange(model, value) {
      const shortDescriptionNodes = model.find('.blog_short_description');
      const showShortDescription = value;

      if (!showShortDescription) {
        removeNodes({ nodes: shortDescriptionNodes });
      }

      if (showShortDescription) {
        displayNodes({ nodes: shortDescriptionNodes });
      }
    }

    function handleBlogTypeChange(model, value) {
      const blogTraitValue = model.get('blogType') || 'blog1';
      const blogNode = getBlogByClass({
        model,
        className: blogTraitValue
      });

      // get title from found blog node
      const title = blogNode.querySelector('.blog_title').innerText;
      // get title trait node
      const titleTraitNode = model.getTrait('newTitle').view.el || '';
      model.getTrait('newTitle').set('value', title);
      // update title trait with the value from selected blog title
      titleTraitNode.querySelector(
        '.gjs-trt-trait__wrp-newTitle input'
      ).value = title;

      // get date from found blog node
      const date = blogNode.querySelector('.blog_published_date').innerText;
      // get date trait node
      const dateTraitNode = model.getTrait('newDate').view.el || '';
      model.getTrait('newDate').set('value', date);
      // update date trait with the value from selected blog date
      dateTraitNode.querySelector(
        '.gjs-trt-trait__wrp-newDate input'
      ).value = date;
    }

    function handleNewTitleChange(model, value) {
      const blogTraitValue = model.get('blogType') || 'blog1';
      const blogNode = getBlogByClass({
        model,
        className: blogTraitValue
      });

      // select title node from found blogNode
      const title = blogNode.querySelector('.blog_title');
      title.innerText = value;
    }

    function handleNewDateChange(model, value) {
      const blogTraitValue = model.get('blogType') || 'blog1';
      const blogNode = getBlogByClass({
        model,
        className: blogTraitValue
      });

      // select date node from found blogNode
      const date = blogNode.querySelector('.blog_published_date');
      date.innerText = value;
    }
  }
  /* adding trait on blog component after clicking, ends */
};
