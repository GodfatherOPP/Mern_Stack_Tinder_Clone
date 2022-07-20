import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <IconButton>
        <PersonIcon className="HeaderIcon" />
      </IconButton>
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-768x432.png"
        alt=""
        className="Header__Logo"
      />
      <IconButton>
        <ForumIcon className="HeaderIcon" />
      </IconButton>
    </div>
  );
};

export default Header;
