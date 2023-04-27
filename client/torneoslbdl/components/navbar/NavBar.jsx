import {
  EmojiEventsRounded,
  FormatListNumberedRounded,
  HomeRounded,
  InfoRounded,
  ShieldRounded,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

// navbar component that uses icons to guide you through all the website
const NavBar = () => {
  return (
    <>
      <div className="navbar-gap"></div>
      <div className="navbar">
        <Link href="/">
          <HomeRounded className="navbar-Icon" />
        </Link>
        <Link href="/teams">
          <ShieldRounded className="navbar-Icon" />
        </Link>
        <Link href="/tournaments">
          <EmojiEventsRounded className="navbar-Icon" />
        </Link>
        <Link href="/ranking">
          <FormatListNumberedRounded className="navbar-Icon" />
        </Link>
        <Link href="/aboutus">
          <InfoRounded className="navbar-Icon" />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
