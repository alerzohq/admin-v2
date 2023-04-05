import { Dispatch, SetStateAction } from 'react'
import { amountHelper, formatDate } from '../utils/formatValue'
import {
  CUSTOMERMORETABLE,
  DETAILSTABLE1,
  DETAILSTABLE2,
  DETAILSTABLE3,
} from './tab-data'
export const detailsHelper = (
  data: any,
  setFetch: Dispatch<SetStateAction<boolean>>
) => {
  let metaHeaders: { [key: string]: any }[] = []
  const {
    product,
    action,
    channel,
    charge,
    commissions,
    created_at,
    updated_at,
    summary,
    total,
    user_type,
    user_id,
    wallet_id,
    biller_reference,
    biller_id,
    metadata,
    customer_name,
    type,
    amount,
    balance,
    reference,
    biller,
  } = data || {}
  const shouldFetch = user_type?.toLowerCase() === 'business-user'

  const metaDataArr = metadata?.map(
    (val: { [key: string]: any }, i: number) => {
      const key = val?.key
      const label = val?.label
      metaHeaders.push({
        label,
        value: key,
        columnWidth: i === metadata?.length - 1 ? 'large' : 'small',
      })
      return { [key]: val?.value }
    }
  )
  let resultObject = metaDataArr?.reduce(function (
    result: any,
    currentObject: any
  ) {
    for (let key in currentObject) {
      if (currentObject.hasOwnProperty(key)) {
        let val = currentObject[key]
        if (key === 'amount' || key === 'balance' || key === 'total') {
          val = amountHelper(currentObject[key])
        }
        result[key] = val
      }
    }
    return result
  },
  {})
  const tableData = {
    customer_name,
    type,
    amount: amountHelper(amount),
    balance: amountHelper(balance),
    reference,
    biller: biller?.display_name,
    user_id,
    wallet_id,
    biller_reference,
    biller_id,
    user_type,
    action,
    channel,
    charge: amountHelper(charge),
    commission: commissions?.['0']
      ? amountHelper(commissions?.['0']?.value)
      : amountHelper(commissions),
    created_at: formatDate(created_at, 'YYYY-MM-DD HH:mm:ss'),
    updated_at: formatDate(updated_at, 'YYYY-MM-DD HH:mm:ss'),
    product: product?.display_name || '',
    summary,
    total: amountHelper(total),
  }

  return [
    {
      spacing: false,
      clickable: {
        url:
          user_type === 'business'
            ? `/dashboard/businesses/${user_id}`
            : `/dashboard/digital-bank/${user_id}`,
        index: 0,
        setFetch,
        shouldFetch: shouldFetch,
      },
      header: DETAILSTABLE1,
      data: tableData,
    },
    {
      spacing: false,
      header: DETAILSTABLE2,
      data: tableData,
    },
    {
      spacing: false,
      header: DETAILSTABLE3,
      data: tableData,
    },

    {
      spacing: false,
      header: metaHeaders,
      data: resultObject,
    },
  ]
}

export const otherHelper = (data: any) => {
  const userType = data?.user_type
  let metaHeaders: { [key: string]: any }[] = []
  const metaDataArr = data?.metadata?.map(
    (val: { [key: string]: any }, i: number) => {
      const key = val?.key
      const label = val?.label
      metaHeaders.push({
        label,
        value: key,
        columnWidth: i === data?.metadata?.length - 1 ? 'large' : 'small',
      })
      return { [key]: val?.value }
    }
  )
  let resultObject = metaDataArr?.reduce(function (
    result: any,
    currentObject: any
  ) {
    for (let key in currentObject) {
      if (currentObject.hasOwnProperty(key)) {
        let val = currentObject[key]
        if (key === 'amount' || key === 'balance' || key === 'total') {
          val = amountHelper(currentObject[key])
        }
        result[key] = val
      }
    }
    return result
  },
  {})
  return [
    {
      title: userType?.toLowerCase()?.includes('business')
        ? 'Business Details'
        : 'Customer Details',
      spacing: false,
      header: metaHeaders,
      data: resultObject,
    },
    {
      spacing: false,
      header: CUSTOMERMORETABLE,
      data: {
        segment: data?.segment,
        customerType: data?.user_type,
        kyc: data?.kyc,
        status: data?.status,
      },
    },
  ]
}
