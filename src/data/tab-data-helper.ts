import { amountHelper } from '../utils/formatValue'
import {
  CUSTOMERMORETABLE,
  CUSTOMERTABLE,
  DETAILSTABLE1,
  DETAILSTABLE2,
  DETAILSTABLE3,
} from './tab-data'
export const detailsHelper = (data: any) => {
  let metaHeaders: { [key: string]: any }[] = []
  const {
    product,
    action,
    channel,
    charge,
    commission,
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
  } = data
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
  var resultObject = metaDataArr?.reduce(function (
    result: any,
    currentObject: any
  ) {
    for (var key in currentObject) {
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
    commission: amountHelper(commission),
    created_at,
    updated_at,
    product: product?.display_name,
    summary,
    total: amountHelper(total),
  }
  return [
    {
      spacing: false,
      clickable: { url: user_type.includes("business") ? `/dashboard/businesses`: `/dashboard/digital-bank/${user_id}`, index: 0 },
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
  const recipientObject = data?.metadata?.reduce(
    (o: any, { key, value }: { key: number; value: string }) => (
      (o[key] = value) 
    ),
    {}
  )
  return [
    {
      spacing: false,
      header: CUSTOMERTABLE,
      data: {
        customerId: recipientObject?.customerId || data?.userId,
        customerName:
          recipientObject?.accountName || recipientObject?.customerName,
        phoneNumber: recipientObject?.phoneNumber,
        dob: recipientObject?.dateOfBirth,
        email: recipientObject?.email,
      },
    },
    {
      spacing: false,
      header: CUSTOMERMORETABLE,
      data: {
        segment: data?.segment,
        customerType: data?.userType,
        kyc: data?.kyc,
        status: data?.status,
      },
    },
  ]
}
