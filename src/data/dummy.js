import React from "react";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar4 from "./avatar4.jpg";
import avatar3 from "./avatar3.png";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";
import product8 from "./product8.jpg";
import { FiShoppingBag, FiEdit, FiPieChart } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineCalendar,
  AiOutlineLineChart,
  AiOutlineBarChart,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { BsKanban, BsBarChart } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { GiLouvrePyramid } from "react-icons/gi";
import { MdOutlineStackedBarChart } from "react-icons/md";

//SIDEBAR LINK
export const link = [
  {
    title: "dashboard",
    links: [
      {
        icon: <FiShoppingBag />,
        linkName: "ecommerce",
      },
    ],
  },

  //Pages
  {
    title: "pages",
    links: [
      {
        icon: <AiOutlineShoppingCart />,
        linkName: "orders",
      },
      {
        icon: <IoMdContacts />,
        linkName: "employee",
      },
      {
        icon: <RiContactsLine />,
        linkName: "customers",
      },
    ],
  },

  //Apps
  {
    title: "apps",
    links: [
      {
        icon: <AiOutlineCalendar />,
        linkName: "calendar",
      },
      {
        icon: <BsKanban />,
        linkName: "kanban",
      },
      {
        icon: <FiEdit />,
        linkName: "editor",
      },
      {
        icon: <BiColorFill />,
        linkName: "color-picker",
      },
    ],
  },

  //Charts
  {
    title: "chatrs",
    links: [
      {
        icon: <AiOutlineLineChart />,
        linkName: "line",
      },
      {
        icon: <FiPieChart />,
        linkName: "pie",
      },
      {
        icon: <AiOutlineBarChart />,
        linkName: "bar",
      },
      {
        icon: <AiOutlineAreaChart />,
        linkName: "area",
      },
      {
        icon: <RiStockLine />,
        linkName: "financial",
      },
      {
        icon: <GiLouvrePyramid />,
        linkName: "pyramid",
      },
      {
        icon: <MdOutlineStackedBarChart />,
        linkName: "stacked",
      },
      {
        icon: <BsBarChart />,
        linkName: "color-mapping",
      },
    ],
  },
];
