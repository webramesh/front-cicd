export default (editor) => {
   editor.on('load', () => {
      const styleManager = editor.StyleManager

      // removing defaults style manager
      styleManager.removeSector('general')
      styleManager.removeSector('typography')
      styleManager.removeSector('flex')
      styleManager.removeSector('dimension')
      styleManager.removeSector('decorations')
      styleManager.removeSector('extra')

      /*
      add custom style managers
      */

      // background section
      styleManager.addSector('background-section', {
         name: 'Background Section',
         open: 0,
         buildProps: ['background-color'],
      })

      // section size
      styleManager.addSector('section-size', {
         name: 'Section Size',
         open: 0,
         buildProps: ['height', 'width'],
      })

      // margin section
      styleManager.addSector('section-margin', {
         name: 'Section Margin',
         open: 0,
         buildProps: ['margin'],
      })

      // padding section
      styleManager.addSector('section-padding', {
         name: 'Section Padding',
         open: 0,
         buildProps: ['padding'],
      })

      // section alignment
      styleManager.addSector('section-alignment', {
         name: 'Section Alignment',
         open: 0,
         buildProps: ['text-align'],
      })

      // section border
      styleManager.addSector('section-border', {
         name: 'Border',
         open: 0,
         buildProps: ['border', 'border-radius', 'box-shadow'],
      })

      // section transition
      styleManager.addSector('section-transition', {
         name: 'Transition',
         open: 0,
         buildProps: ['transition'],
      })
   })
}
