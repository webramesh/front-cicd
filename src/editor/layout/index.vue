<template>
    <div class="editior-body">
        <EditorHeader></EditorHeader>
        <div class="editor-container grid">
            <EditorSidebar></EditorSidebar>
        </div>
    </div>
</template>
<script>
    import EditorHeader from './Header.vue';
    import EditorCanvas from './Canvas.vue';
    import EditorSidebar from './LeftSidebar.vue';
    import grapesjs from '../dist/grapes.min.js';
    import basicBlocks from '../dist/grapesjs-basic-blocks.min.js';


    export default {
        name: 'EditorLayout',
        components: {
            EditorHeader,
            EditorCanvas,
            EditorSidebar
        },
        data() {
            return {
                editor: null,
                undoManager: null,
                deviceManager: null,
            }
        },
        mounted () {
            this.editor = grapesjs.init({
            container: '#gjs',
            blockManager: {
                appendTo: '#blocks'
                },
            plugins: [basicBlocks],
            panels: {
                defaults:[
                {
                    id: 'panel-switcher',
                    el: '.panel__switcher',
                    buttons: [
                    // ...
                    {
                        id: 'show-traits',
                        active: true,
                        label: 'Traits',
                        command: 'show-traits',
                        togglable: false,
                    }],
                }
                ]
            },
            traitManager: {
                appendTo: '.traits-container',
            },
            deviceManager: {
                devices: [{
                    name: 'Desktop',
                    width: '', // default size
                }, {
                    name: 'Mobile',
                    width: '320px', // this value will be used on canvas width
                    widthMedia: '480px', // this value will be used in CSS @media
                }]
            },
            storageManager: {
                type: 'remote'
                // urlStore: 'http://endpoint/store-project/id-123',
                // urlLoad: 'http://127.0.0.1:3000/multipage.php'
            }
            });
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
            },
        }
    }
</script>