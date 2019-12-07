export default {
  items: [
    {
      title: true,
      name: "Public",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: "text-center"
    },
    {
      name: "AboutUs",
      url: "/AboutUs",
      icon: "icon-info"
    },
    {
      name: "Activity",
      url: "/Activity",
      icon: "icon-game-controller"
    },
    {
      name: "Archive",
      url: "/Archive",
      icon: " icon-notebook",
      children: [
        {
          name: "Handcrafts",
          url: "/Archive/Handcrafts",
          icon: "icon-puzzle "
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
          icon: "icon-film"
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
    },
    {
      title: true,
      name: "Administrator",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: "text-center"
    },
    {
      name: "Dashboard",
      url: "/Dashboard",
      icon: "icon-grid"
    },
    {
      name: "Inventory",
      url: "/Inventory",
      icon: "icon-basket"
    },
    {
      name: "Participant List",
      url: "/ParticipantList",
      icon: "icon-list"
    },
    {
      name: "Point Of Sale",
      url: "/POS",
      icon: "icon-handbag"
    },
    {
      name: "Register Participant",
      url: "/RegisterParticipant",
      icon: "icon-note"
    },
    {
      title: true,
      name: "Participant",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: "text-center"
    },
    {
      name: "Kerchang's Scanner",
      url: "/QRscanner",
      icon: "icon-note"
    },
    {
      name: "Update Profile",
      url: "/UpdateProfile",
      icon: "icon-note"
    },
    {
      name: "GJS Facebook",
      url: "https://www.facebook.com/JungleSchoolGombak/",
      icon: "icon-social-facebook ",
      class: "mt-auto",
      variant: "primary",
      attributes: { target: "_blank", rel: "noopener" }
    },
    {
      name: "GJS Instagram",
      url: "https://www.instagram.com/jungleschoolgombak/?hl=en",
      icon: "icon-social-instagram",
      variant: "primary",
      attributes: { target: "_blank", rel: "noopener" }
    }
  ]
};
