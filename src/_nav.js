export default {
  items: [
    // {
    //   name: "Dashboard",
    //   url: "/dashboard",
    //   icon: "icon-speedometer",
    //   badge: {
    //     variant: "info",
    //     text: "NEW"
    //   }
    // },
    {
      name: "AboutUs",
      url: "/AboutUs",
      icon: "icon-info"
    },
    {
      name: "Activity",
      url: "/Activity",
      icon: "icon-puzzle"
    },
    {
      name: "Archive",
      url: "/Archive",
      icon: "icon-list",
      children: [
        {
          name: "Handcrafts",
          url: "/Archive/Handcrafts",
          icon: "icon-magic-wand"
        },
        {
          name: "Tools",
          url: "/Archive/Tool",
          icon: "icon-wrench"
        }
      ]
    },
    {
      name: "Gallery",
      url: "/Gallery",
      icon: "icon-screen-desktop",
      children: [
        {
          name: "Photo",
          url: "/Gallery/Photo",
          icon: "icon-picture"
        },
        {
          name: "Video",
          url: "/Gallery/Video",
          icon: "icon-control-play"
        }
      ]
    },
    {
      name: "Contact",
      url: "/Contact",
      icon: "icon-people"
    },
    {
      name: "Inquiries",
      url: "/Inquiries",
      icon: "icon-pencil"
    }
  ]
};
