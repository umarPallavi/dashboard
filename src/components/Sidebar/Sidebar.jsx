import React from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopee } from "react-icons/si";

import { link } from "../../data/dummy";

const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className="sidebar">
      {activeMenu && (
        <>
          <div className="logo-container">
            {/* logo */}
            <Link to="/" className="logo-link">
              <SiShopee className="logo" />
              <span>LOGO</span>
            </Link>

            {/* close button */}
            <Tooltip title="Menu" placement="bottom">
              <button
                type="button"
                onClick={() => {}}
                className="cancle-button"
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>

          {/* Sidebar content  */}
          <div className="sidebar-content">
            {link.map((item) => (
              <div key={item.title}>
                <p className="sidebar-title">{item.title}</p>
                {item.links.map((link) => (
                  <div>
                    <NavLink
                      key={link.linkName}
                      to={`${link.linkName}`}
                      onClick={() => {}}
                      className={({isActive}) =>
                        isActive ? "activeLink" : "normalLink"
                      }
                    >
                      {link.icon}
                      <span>{link.linkName}</span>
                    </NavLink>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
