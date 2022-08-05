module.exports = {
  name: "Service Delivery Prototype",
  domain: "example.gov",

  menu: {
    header: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Section 1",
        href: "/section",
        children: [
          {
            title: "Section 1A",
            href: "/section",
          },
          {
            title: "Section 1B",
            href: "/section",
          },
        ],
      },
      {
        title: "Section 2",
        href: "/section",
      },
    ],
    footer: [
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
  },
}
