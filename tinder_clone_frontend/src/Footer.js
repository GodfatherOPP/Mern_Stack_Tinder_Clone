import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <IconButton className="Footer__Icon__repeat">
        <ReplayIcon />
      </IconButton>
      <IconButton className="Footer__Icon__left">
        <CloseIcon />
      </IconButton>
      <IconButton className="Footer__Icon__star">
        <StarRateIcon />
      </IconButton>
      <IconButton className="Footer__Icon__right">
        <FavoriteIcon />
      </IconButton>
      <IconButton className="Footer__Icon__flash">
        <FlashOnIcon />
      </IconButton>
    </div>
  );
};

export default Footer;
