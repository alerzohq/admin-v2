import { amountConverter, thousandSeparator } from "../utils/formatValue"

export const overviewStats=(Statistics:{[key: string]:any})=>{
    let statistics = {
        card1:  `₦${amountConverter(Statistics?.totalAmountDeposited)}`,
        card2: `₦${amountConverter(Statistics?.totalAmounWithdrawn)}`,
        card3: thousandSeparator(Statistics?.totalNumberOfTransactions),
        card4: thousandSeparator(Statistics?.totalNumberOfActiveUsers),
      }
    return statistics
}

// export const dashboardLabels = {
//     card1: 'Active Terminals',
//     card2: 'Inactive Terminals',
//     card3: 'Defective Terminals',
//     card4: 'Unassigned Terminals',
//   }
//   export const dashboardIcons = {
//     card1: ActiveTerminalsIcon,
//     card2: InactiveTerminalsIcon,
//     card3: DefectiveTerminalsIcon,
//     card4: UnassignedTerminalsIcon,
//   }
  