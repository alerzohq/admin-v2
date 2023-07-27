import { DepositIcon, Users2Icon, UsersSolidIcon, WithDrawIcon } from "../assets/icons"

export const billerLabels = {
    card1: 'Total Billers',
    card2: 'Total Products',
    card3: 'Active Billers',
    card4: 'Inactive Billers',
  }
  export const billerIcons = {
    card1: DepositIcon,
    card2: WithDrawIcon,
    card3: Users2Icon,
    card4: UsersSolidIcon,

  }

  export const billerStats = (Statistics: { [key: string]: number }) => {
    const statistics = {
      card1: Statistics?.totalBillers,
      card2: Statistics?.totalProducts,
      card3: Statistics?.activeBillers,
      card4: Statistics?.inactiveBillers,
    }
    return statistics
  }

export const billerTableHeaders=[
  'Biller Name',
  'Email Address',
  'Phone Number',
  'Status',
  'Date Added',
  'Date Updated'
]
export const accordionTableHeaders=['Product Name', 'Type','Commission','Merchant’s Rate','Status']

