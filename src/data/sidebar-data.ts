import { Dashboard,UserIcon } from "../assets/icons";
import { Color } from "../assets/theme";
import { Path } from "../constants/route-path";

export const sideBarData=[
    {
     id:1,
     title: "Dashboard",
     Icon: Dashboard,
     path:`/${Path.DASHBOARD}`,
     activeIconColor:Color.alerzoWhite
     },
     {
        id:2,
        title: "Users",
        Icon: UserIcon,
        path:`/${Path.DASHBOARD}/${Path.USERS}`,
        activeIconColor:'',
    },
    {
     id:3,
     title: "Transactions",
     Icon: UserIcon,
     activeIconColor:'',
     path:`/${Path.DASHBOARD}/${Path.TRANSACTION}`
     
    //  subMenu:[
    //      {name: "All Transactions",
    //       subPath:`/${Path.DASHBOARD}/${Path.TRANSACTION}`
    //       }, 
    //  ]
    },

 ]