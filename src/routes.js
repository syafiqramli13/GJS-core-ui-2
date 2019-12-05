import React from "react";

//const untuk import screen

// const Cards = React.lazy(() => import("./views/Base/Cards"));
// const Carousels = React.lazy(() => import("./views/Base/Carousels"));

const AboutUs = React.lazy(() => import("./screens/PubAboutUs"));
const Activity = React.lazy(() => import("./screens/PubActivity"));
// const Archive = React.lazy(() => import("./screens/Archive"));
const Contact = React.lazy(() => import("./screens/PubContact"));
// const Gallery = React.lazy(() => import("./screens/Gallery"));
const Inquiries = React.lazy(() => import("./screens/PubInquiries"));
const Photo = React.lazy(() => import("./screens/PubPhoto"));
const Video = React.lazy(() => import("./screens/PubVideo"));
const Handcrafts = React.lazy(() => import("./screens/PubHandcrafts"));
const Tool = React.lazy(() => import("./screens/PubTool"));
const Dashboard = React.lazy(() => import("./screens/AdminDashboard"));
const Inventory = React.lazy(() => import("./screens/AdminInventory"));
const ParticipantList = React.lazy(() =>
  import("./screens/AdminParticipantList")
);
const POS = React.lazy(() => import("./screens/AdminPOS"));
const Register = React.lazy(() => import("./screens/AdminRegister"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/AboutUs", name: "AboutUs", component: AboutUs },
  { path: "/Activity", name: "Activity", component: Activity },
  // { path: "/Archive", name: "Archive", component: Archive },
  { path: "/Archive", exact: true, name: "Archive", component: Handcrafts },
  { path: "/Archive/Handcrafts", name: "Handcrafts", component: Handcrafts },
  { path: "/Archive/Tool", name: "Tool", component: Tool },
  // { path: "/Gallery", name: "Gallery", component: Gallery },
  { path: "/Gallery", exact: true, name: "Gallery", component: Photo },
  { path: "/Gallery/Photo", name: "Photo", component: Photo },
  { path: "/Gallery/Video", name: "Video", component: Video },
  { path: "/Contact", name: "Contact", component: Contact },
  { path: "/Inquiries", name: "Inquiries", component: Inquiries },

  { path: "/Dashboard", name: "Dashboard", component: Dashboard },
  { path: "/Inventory", name: "Inventory", component: Inventory },
  {
    path: "/ParticipantList",
    name: "ParticipantList",
    component: ParticipantList
  },
  { path: "/POS", name: "POS", component: POS },
  { path: "/Register", name: "Register", component: Register }

  //{ path: "/theme", exact: true, name: "Theme", component: Colors },
  // { path: "/theme/colors", name: "Colors", component: Colors },
  // { path: "/theme/typography", name: "Typography", component: Typography },
];

export default routes;
