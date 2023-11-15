import React from "react";
import styles from "./Navbar.module.css";
import ActiveLinck from "./ActiveLinck";
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing/pricing",
  },
];

const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((item, index) => (
        <ActiveLinck key={index} href={item.href} text={item.text} />
      ))}
    </nav>
  );
};

export default Navbar;
