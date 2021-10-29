import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/Io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Teams",
        path: "/teams",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpen: <RiIcons.RiArrowOpenFill />,
        subNav: [
            {
                title: "Atlanta Hawks",
                path: "/teams/Atlanta Hawks",
                icon: <IoIcons.IoIosPaper />, 
            }

        ]
    }
]