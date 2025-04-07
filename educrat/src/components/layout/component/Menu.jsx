import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menuList } from "@/data/menu";
import { useLocation } from "react-router-dom";

export default function Menu({ allClasses, headerPosition }) {
  const [menuItem, setMenuItem] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    menuList.forEach((menu) => {
      menu?.links?.forEach((link) => {
        if (link.href === pathname) {
          setMenuItem(menu.title);
        }
      });
    });
  }, [pathname]);

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        headerPosition ? headerPosition : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="menu js-navList">
          <ul className={`${allClasses ? allClasses : ""}`}>
            {menuList.map((menu, index) => (
              <li key={index} className="menu-item-has-children">
                <Link
                  to={menu.links.length === 1 ? menu.links[0].href : "#"}
                  className={menuItem === menu.title ? "activeMenu" : ""}
                >
                  {menu.title}
                  {menu.links.length > 1 && (
                    <i className="icon-chevron-right text-13 ml-10"></i>
                  )}
                </Link>
                {menu.links.length > 1 && (
                  <ul className="subnav">
                    {menu.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.href}
                          className={
                            pathname === link.href ? "activeMenu" : ""
                          }
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
