import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://setbap.pages.dev/", // replace this with your deployed domain
  author: "Sina Ebrahimi",
  desc: "Simple Blog for Sina Ebrahimi(Setbap)",
  title: "Setbap Blog",
  ogImage: "setbap-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN", "fa-IR"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/setbap/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
