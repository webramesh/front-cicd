import loadBlogTraits from './loadBlogTraits';
import loadAboutTraits from './loadAboutTraits';
import loadTestimonialTraits from './loadTestimonialTraits';
import loadTeamTraits from './loadTeamTraits';
import loadServiceTraits from './loadServiceTraits';
import loadFAQTraits from './loadFAQTraits';
import loadEventTraits from './loadEventTraits';
import loadSliderTraits from './loadSliderTraits';
import loadMenuTraits from './loadMenuTraits';
import loadGalleryTraits from './loadGalleryTraits';

export default (editor, component, sectionAttrs) => {
  loadBlogTraits(editor, component, sectionAttrs);
  loadAboutTraits(editor, component, sectionAttrs);
  loadTestimonialTraits(editor, component, sectionAttrs);
  loadTeamTraits(editor, component, sectionAttrs);
  loadServiceTraits(editor, component, sectionAttrs);
  loadFAQTraits(editor, component, sectionAttrs);
  loadEventTraits(editor, component, sectionAttrs);
  loadSliderTraits(editor, component, sectionAttrs);
  loadGalleryTraits(editor, component, sectionAttrs);
  loadMenuTraits(editor, component);
};
