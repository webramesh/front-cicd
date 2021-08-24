export default {
    panels: {
        defaults: [
          {
            id: "panel-switcher",
            el: ".panel__switcher",
            buttons: [
              {
                id: "show-traits",
                active: true,
                label: "Traits",
                command: "show-traits",
                togglable: false,
              },
            ],
          },
        ],
      },
}