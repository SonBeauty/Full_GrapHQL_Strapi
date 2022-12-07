import React from "react";
import Styles from "../styles/Navbar.module.scss";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.wrapper}>
        <div className={Styles.left}>
          <div className={Styles.item}>
            <KeyboardArrowDown />
          </div>
          <div className={Styles.item}>
            <Link href="/products">Product</Link>
          </div>
          <div className={Styles.item}>
            <Link href="/products">Shop</Link>
          </div>
        </div>
        <div className={Styles.center}>
          <Link href="/">SOSTORE</Link>
        </div>
        <div className={Styles.right}>
          <div className={Styles.item}>
            <Link className="link" href="/">
              Homepage
            </Link>
          </div>
          <div className={Styles.item}>
            <Link className="link" href="/">
              About
            </Link>
          </div>
          <div className={Styles.item}>
            <Link className="link" href="/">
              Contact
            </Link>
          </div>
          <div className={Styles.item}>
            <Link className="link" href="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
