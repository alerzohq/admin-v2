import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import IconClose from "../../../assets/images/svgs/IconClose";
import IconOpen from "../../../assets/images/svgs/IconOpen";
import { useNavigate } from "react-router-dom";
import styles from "./sidenav.module.css";

export const SubMenu = ({ item, activeTab, setActiveTab }) => {
  const [dropdowns, setDropdowns] = useState(false);
  const [lastActive, setLastActive] = useState("Dashboard");
  const [closeDropdown, setCloseDropdown] = useState(dropdowns);
  let navigate = useNavigate();
  const ButtonParentVariants = {
    closed: {
      height: "auto",
      transition: {
        duration: "0.5",
      },
    },
    open: {
      height: "auto",
      transition: {
        duration: "0.5",
      },
    },
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      height: "auto",
      transition: {
        delay: "0.5",
        duration: "0.5",
      },
      display: "block",
      overFlow: "hidden",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      height: 0,
      transition: {
        delay: "0.4",
        duration: "0.4",
      },
      transitionEnd: {
        display: "none",
        height: "0px",
      },
    },
  };

  useEffect(() => {
    if (item.title === activeTab) {
      setDropdowns(true);
    } else {
      setDropdowns(false);
    }
  }, [activeTab, item.title]);

  const handleActiveTab = () => {
    if (item.title === activeTab && dropdowns && !closeDropdown) {
      return setCloseDropdown(true);
    }
    setCloseDropdown(false);
    setActiveTab(item.title);
  };
  const handleRoute = (route) => {
    setCloseDropdown(false);
    setActiveTab(item.title);
    navigate(route);
  };
  const { Icon, ActiveIcon } = item;
  const location = useLocation();
  const splitPath = location.pathname.split("/")[1];
  if (splitPath.includes("/")) {
    splitPath.split("/");
  }

  useEffect(() => {
    if (splitPath.includes(activeTab.toLowerCase().split(" ")[0])) {
      setLastActive(activeTab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, activeTab]);
  useEffect(() => {
    if (closeDropdown) {
      setActiveTab(lastActive);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeDropdown]);
  return (
    <>
      <motion.div
        key="parent"
        variants={ButtonParentVariants}
        initial="closed"
        animate={dropdowns ? "open" : "closed"}
        className={dropdowns ? styles.active : styles.notActive}
      >
        <div
          className={styles.dash}
          onClick={() => {
            item.path ? handleRoute(item.path) : handleActiveTab();
          }}
        >
          <div className={styles.iconTextBox}>
            {dropdowns ? <ActiveIcon /> : <Icon />}
            <div className={styles.sidenavHtext}>
              <h5>{item?.title}</h5>
            </div>
          </div>
          <div>
            {item.subNav && dropdowns && !closeDropdown ? (
              <IconClose />
            ) : item.subNav ? (
              <IconOpen />
            ) : null}
          </div>
        </div>
        <motion.div
          initial="exit"
          animate={dropdowns ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          {!closeDropdown &&
            dropdowns &&
            item.subNav
              ?.filter((t) => t !== null)
              .map((item, index) => {
                return (
                  <Link to={item.path} key={index}>
                    <p
                      className={
                        location.pathname.includes(item.path)
                          ? styles.subNavActive
                          : styles.subtitle
                      }
                    >
                      {item.title}
                    </p>
                  </Link>
                );
              })}
        </motion.div>
      </motion.div>
    </>
  );
};
