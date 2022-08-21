import React from 'react'
import * as Icon4 from "react-icons/md";
import * as Icon3 from "react-icons/fi";
import * as Icon2 from "react-icons/ai";
import * as Icon1 from "react-icons/bi";


export const SidebarData =[
{
     title: 'Home',
     path: '/Home',
     icon: <Icon1.BiHomeHeart />,
     classN: 'nav-text'
 },
 {
    title: 'Team',
    path: '/Team',
    icon: <Icon2.AiOutlineTeam />,
    classN: 'nav-text'
},
{
    title: 'Feedback',
    path: '/Feedback',
    icon: <Icon4.MdFeedback />,
    classN: 'nav-text'
},
{
    title: 'Setting',
    path: '/Setting',
    icon: <Icon3.FiSettings />,
    classN: 'nav-text'
}

]