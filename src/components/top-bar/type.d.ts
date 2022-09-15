export type TopBarProps = {
  title: string;
  showFilters: {
    search: { type: string; placeholder: string };
    date:boolean;
    selects: {
      values: any[];
      placeholder: string;
      onChange: () => void;
      value:string
    }[];
    buttons: {
      label: string;
      onClick: () => void;
    }[];
  };
  isFetching?: boolean;
  // setFilterValues?:{[key:string]:any}
  setFilterValues?: any;
  routePath?: string;
};

// {

//     search: { placeholder: string };
//     date: boolean;
//     [key: string]:
//       | {
//           placeholder?: string;
//           values?: any[];
//           label: never;
//           type: "select";
//         }
//       | {
//           placeholder?: never;
//           values?: never;
//           label?: string;
//           type: "button";
//         };
//     // status: boolean;
//     // CSV: boolean;
