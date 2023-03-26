import React from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeftText } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Tooltip } from "@mui/material";
import { Chat, Cart, UserProfile, Notification } from "../.";
import avatar from "../../data/avatar.jpg";

const NavButton = ({ title, color, customfun, icon, dotColor }) => (
  <Tooltip title={title} placement="bottom">
    <button
      type="button"
      onClick={() => customfun()}
      style={{ color }}
      className="navbutton"
    >
      <span style={{ background: dotColor }} className="navspan" />
      {icon}
    </button>
  </Tooltip>
);

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavButton title="Menu" color="blue" icon={<AiOutlineMenu />} />
      <div className="navbar-item">
        <NavButton title="Cart" color="blue" icon={<FiShoppingCart />} />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          color="blue"
          icon={<BsChatLeftText />}
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          color="blue"
          icon={<RiNotification3Line />}
        />
        <Tooltip>
          <div>
            <img src={avatar} alt="user-profile" />
            <p>
              <span>Hi,</span>
              <span>Michel</span>
            </p>
            <MdOutlineKeyboardArrowUp/>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
