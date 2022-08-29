import Historysvg from "../../../assets/images/svgs/historySvg";
// import Notificationsvg from "./Animations/assets/notificationSvg";
import UsersSvg from "../../../assets/images/svgs/usersSvg";
// import ProductSvg from "./Animations/assets/productSvg";
import ActiveUserSvg from "../../../assets/images/svgs/ActiveUserSvg";
// import ActiveNotificationsSvg from "./Animations/assets/ActiveNotificationsSvg";
import ActiveHistory from "../../../assets/images/svgs/ActiveHistory";
import Dashboard from "../../../assets/images/svgs/Dashboad";
import ActiveDashboard from "../../../assets/images/svgs/ActiveDashboard";
import ActiveBillers from "../../../assets/images/svgs/ActiveBiller";
import BillerSvg from "../../../assets/images/svgs/billerSvg";
import MerchantSvg from "../../../assets/images/svgs/merchantSvg";
import ActiveMerchant from "../../../assets/images/svgs/ActiveMerchant";
import ActiveTerminal from "../../../assets/images/svgs/ActiveTerminal";
import TerminalSvg from "../../../assets/images/svgs/terminalSvg";

const SideBarList = () => {
  const SidebarData = [
    {
      id: 0,
      title: "Dashboard",
      path: "/dashboard",
      Icon: Dashboard,
      ActiveIcon: ActiveDashboard,
    },
    {
      id: 1,
      title: "Bulk Disburse",
      Icon: UsersSvg,
      ActiveIcon: ActiveUserSvg,

      subNav: [
        {
          title: "Airtime Topup",
          path: "/bulk-disburse/airtime-topup",
        },
        {
          title: "Fund Transfer",
          path: "/bulk-disburse/fund-transfer",
        },
        {
          title: "Data Topup",
          path: "/bulk-disburse/data-topup",
        },
        {
          title: "Wallet Topup",
          path: "/bulk-disburse/wallet-topup",
        },
        {
          title: "Bulk Disburse Wallet ",
          path: "/bulk-disburse/bulk-disburse-wallet-history",
        },
      ],
    },
    {
      id: 2,
      title: "Users",
      Icon: UsersSvg,
      ActiveIcon: ActiveUserSvg,

      subNav: [
        {
          title: "Customers",
          path: "/users/customers",
        },
        {
          title: "POS Agents",
          path: "/users/pos-agents",
        },
        // {
        //   title: "Businesses",
        //   path: "/users/businesses",
        // },
        {
          title: "Employees",
          path: "/users/employees",
        },
      ],
    },
    {
      id: 3,
      title: "History",
      Icon: Historysvg,
      ActiveIcon: ActiveHistory,

      subNav: [
        {
          title: "Digital Bank",
          path: "/history/digital-bank",
        },
        {
          title: "POS",
          path: "/history/pos",
        },
        {
          title: "Disburse",
          path: "/history/disburse",
        },
        // {
        //   title: "mPOS",
        //   path: "/history/mpos",
        // },
        // {
        //   title: "Businesses",
        //   path: "/history/businesses",
        // },
      ],
    },
    // {
    //   id: 4,
    //   title: "Notification",
    //   Icon: Notificationsvg,
    //   ActiveIcon: ActiveNotificationsSvg,

    //   subNav: [
    //     {
    //       title: "Staffs",
    //       path: "/notification/staffs",
    //     },
    //     {
    //       title: "Users",
    //       path: "/notification/Users",
    //     },
    //   ],
    // },
    {
      id: 5,
      title: "Billers",
      Icon: BillerSvg,
      ActiveIcon: ActiveBillers,
      subNav: [
        // {
        //   title: "List",
        //   path: "/billers/list",
        // },
        {
          title: "Balance",
          path: "/billers/balance",
        },
        // {
        //   title: "Biller Switch",
        //   path: "/billers/biller-switch",
        // },
        // {
        //   title: "Health Check",
        //   path: "/billers/health-check",
        // },
      ],
    },
    // {
    //   id: 6,
    //   title: "Product",
    //   Icon: ProductSvg,
    //   ActiveIcon: ProductSvg,
    //   subNav: [
    //     {
    //       title: "Product price",
    //       path: "/product/product-price",
    //     },
    //     {
    //       title: "B2B commission",
    //       path: "/product/b2b-commission",
    //     },
    //   ],
    // },

    {
      id: 7,
      title: "Virtual account",
      Icon: Historysvg,
      ActiveIcon: ActiveHistory,
      subNav: [
        {
          title: "Wema",
          path: "/virtualAccount/wema",
        },
        // {
        //   title: "Refund",
        //   path: "/virtualAccount/refund",
        // },
      ],
    },
    {
      id: 8,
      title: "Merchant Mgt",
      Icon: MerchantSvg,
      ActiveIcon: ActiveMerchant,
      subNav: [
        {
          title: "Merchant",
          path: "/merchant/management",
        },
        {
          title: "Add Merchant",
          path: "/merchant/add-merchant",
        },
      ],
    },
    {
      id: 9,
      title: "Terminal Mgt",
      path: "/terminal/management",
      Icon: TerminalSvg,
      ActiveIcon: ActiveTerminal,
    },
    {
      id: 10,
      title: "Roles & Permissions",
      path: "/roles-permissions",
      Icon: UsersSvg,
      ActiveIcon: ActiveUserSvg,
    },
    {
      id: 11,
      title: "Warehouse Mgt",
      Icon: UsersSvg,
      ActiveIcon: ActiveUserSvg,

      subNav: [
        {
          title: "Warehouses",
          path: "/warehouse/list",
        },
        // {
        //   title: "Sales rep",
        //   path: "/warehouse/sales-rep",
        // },
        // {
        //   title: "Terminals",
        //   path: "/users/pos-agents",
        // },
        // {
        //   title: "Disburse funds",
        //   path: "/users/employees",
        // },
      ],
    },

    // {
    //   id: 11,
    //   title: "Reconciliation",
    //   path: "/reconciliation",
    //   Icon: Historysvg,
    //   ActiveIcon: ActiveHistroy,
    // },
  ];

  return { SidebarData };
};

export default SideBarList;
