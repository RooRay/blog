import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ruaridh's Blog",
  DESCRIPTION: "Welcome to my blog where I talk about tech and other things that interest me!",
  EMAIL: "blog@rooray.xyz",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to my blog where I talk about tech and other things that interest me!",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "The main blog featuring a collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to their respective repositories.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/Roo_Ray_",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/RooRay",
  },
  {
    NAME: "Discord",
    HREF: "https://discord.com/users/347083401141944333/",
  },
];
