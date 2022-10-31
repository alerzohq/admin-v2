import { CUSTOMERMORETABLE, CUSTOMERTABLE, DETAILSTABLE } from './tab-data'
export const detailsHelper = (data: any) => {
  let metaHeaders: { [key: string]: any }[] = []
  const { metadata, customer_name, type, amount, balance, reference, biller } =
    data
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
        result[key] = currentObject[key]
      }
    }
    return result
  },
  {})
  const tableData = {
    customer_name,
    type,
    amount,
    balance,
    reference,
    biller: biller?.display_name,
  }
  return [
    {
      spacing: false,
      header: DETAILSTABLE,
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
      (o[key] = value), o
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
