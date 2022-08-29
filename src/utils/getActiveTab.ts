const getActiveTab = (location: string | string[] | undefined) => {
  switch (true) {
    case location?.includes("dashboard"):
      return "Dashboard";
    case location?.includes("bulk-disburse"):
      return "Bulk Disburse";
    default:
      return "Dashboard";
  }
};

export default getActiveTab;
