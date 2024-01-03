import { navbarList, navbarListIcon, socialMediaListIcon } from "@/types";

export const navbarLists: navbarList[] = [
  {
    route: "/",
    label: "Shop",
  },
  {
    route: "/men",
    label: "Men",
  },
  {
    route: "/women",
    label: "Women",
  },
  {
    route: "/combos",
    label: "Combos",
  },
  {
    route: "/joggers",
    label: "Joggers",
  },
];

export const navbarListsIcons: navbarListIcon[] = [
  {
    route: "/collection",
    label: "Collection",
    iconImage: "/assets/icons/heart.svg",
  },
  {
    route: "/user",
    label: "User",
    iconImage: "/assets/icons/user.svg",
  },
  {
    route: "/cart",
    label: "Cart",
    iconImage: "/assets/icons/shopping cart.svg",
  },
];

export const socialMediiaListsIcons: socialMediaListIcon[] = [
  {
    route: "https://www.facebook.com",
    label: "facebook",
    iconImage: "/assets/icons/Group 10.svg",
  },
  {
    route: "https://www.instagram.com",
    label: "instagram",
    iconImage: "/assets/icons/Group 11.svg",
  },
  {
    route: "https://www.twitter.com",
    label: "twitter",
    iconImage: "/assets/icons/Group 12.svg",
  },
];
