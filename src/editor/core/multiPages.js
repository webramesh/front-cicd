export default editor => {
  const pm = editor.Pages;
  const header = editor.Canvas.getDocument().querySelector('header').outerHTML;
  const footer = editor.Canvas.getDocument().querySelector('footer').outerHTML;
  pages.forEach(page => {
    pm.add(page);
  });
};
