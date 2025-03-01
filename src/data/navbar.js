const navLinks = {
  left: [],
  middle: [
    {
      id: 1,
      title: "About Us",
      path: "/aboutus",
      dialog: [
        {
          id: 1,
          title: "Theme",
          path: "/",
        },
        {
          id: 2,
          title: "About University",
          path: "/",
        },
        {
          id: 3,
          title: "Organizing Committee",
          path: "/",
        },
      ],
    },
    {
      id: 2,
      title: "Events",
      path: "/events",
      dialog:[{id:1,title:"Register",path:"/"},{id:2,title:"Schedule",path:"/"},{id:3,title:"Gallery",path:"/"}]
    },
    {
      id: 3,
      title: "Sponsors",
      path: "/sponsors",
    },
    {
      id: 4,
      title: "Team",
      path: "/team",
    }
  ],

  right: [],
};

export default navLinks;
