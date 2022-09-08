import { AIRTIMEDETAILSTABLE, AIRTIMEMORETABLE, BETTINGUSERTABLE, CABLEPRODUCTDETAILSTABLE, CUSTOMERMORETABLE, CUSTOMERTABLE, DATAMORETABLE, DETAILSTABLE, ELECTRICITYPRODUCTTABLE, INTERNETDETAILSTABLE, RECIPIENTTABLE, SESSIONTABLE, TOKENDETAILSTABLE, VASDETAILSTABLE } from "./tab-data"

export const detailsHelper = (slug: string, data: any) => {
    const type = data?.type;
    const metaData = data?.metadata?.reduce((o: any, {
        key,
        value
    }: { key: number; value: string }) => (o[key] = value, o), {});
    if (slug === "bank-transfer") {
        return [
            {
                spacing: false,
                header: DETAILSTABLE,
                data: {
                    name: type === "credit" ? metaData?.accountName : data?.actionPayload?.senderAccountName,
                    type: data?.type,
                    amount: data?.amount,
                    balance: data?.total,
                    accountNumber: "credit" ? metaData?.accountNumber :data?.actionPayload?.senderAccountNumber,
                    summary: metaData?.narration
                },
            },
            {
                spacing: false,
                header: SESSIONTABLE,
                data: {
                    displayName: data?.biller?.displayName,
                    sessionId: metaData?.sessionId,
                    channel: data?.channel
                },
            },
            {
                spacing: true,
                header: RECIPIENTTABLE,
                data: {
                    name: type === "credit" ? data?.actionPayload?.craccountname : metaData?.accountName,
                    product: data?.product?.displayName,
                    package: data?.product?.displayName,
                    reference: data?.billerReference,
                    userId: type === "credit" ?`${data?.actionPayload?.craccount}/${data?.userId}`: `${data?.actionPayload?.accountNumber}/${data?.userId}`
                }
            }
        ];
    }
    if (slug === "dstv") {
        return [
            {
                spacing: false,
                header: VASDETAILSTABLE,
                data: {
                    customer: metaData?.customerName,
                    type: data?.type,
                    amount: data?.amount,
                    balance: data?.total,
                    product: data?.product?.displayName,
                    reference: data?.reference,
                },
            },
            {
                spacing: false,
                header: CABLEPRODUCTDETAILSTABLE,
                data: {
                    cardNumber: metaData?.smartCardNumber,
                    bouquet: metaData?.bouquet,
                    status: data?.status,
                    biller: data?.biller?.displayName,
                    channel: data?.channel,
                },
            },

        ];
    }
    if (slug === "ikeja-electric-prepaid" || slug === "portharcourt-electric-postpaid") {
        return [
            {
                spacing: false,
                header: VASDETAILSTABLE,
                data: {
                    customer: metaData?.customerName,
                    type: data?.type,
                    amount: data?.amount,
                    balance: data?.total,
                    product: data?.product?.displayName,
                    reference: data?.reference,
                },
            },
            {
                spacing: false,
                header: ELECTRICITYPRODUCTTABLE,
                data: {
                    meterNumber: metaData?.smartCardNumber,
                    disco: metaData?.disco,
                    status: data?.status,
                    biller: data?.biller?.displayName,
                    channel: data?.channel,
                    address: metaData?.address,
                },
            },
            {
                spacing: false,
                header: TOKENDETAILSTABLE,
                data: {
                    token: metaData?.token,
                    phoneNumber: metaData?.phoneNumber,
                }
            }
        ];
    }
    if (slug === "bet9ja" || slug === "betking") {
        return [
            {
                spacing: false,
                header: VASDETAILSTABLE,
                data: {
                    customer: metaData?.name,
                    type: data?.type,
                    amount: data?.amount,
                    balance: data?.total,
                    product: data?.product?.displayName,
                    reference: data?.reference,
                },
            },
            {
                spacing: false,
                header: BETTINGUSERTABLE,
                data: {
                    customerId: metaData?.customerId,
                    biller: data?.biller?.displayName,
                    status: data?.status,
                    channel: data?.channel,
                },
            
            }
        ];
    }
    if (slug === "smile") {
        return [
            {
                spacing: false,
                header: VASDETAILSTABLE,
                data: {
                    customer: metaData?.customerName,
                    type: data?.type,
                    amount: data?.amount,
                    balance: data?.total,
                    product: data?.product?.displayName,
                    reference: data?.reference,
                },
            },
            {
                spacing: false,
                header: INTERNETDETAILSTABLE,
                data: {
                    accountNumber: metaData?.accountNumber,
                    biller: data?.biller?.displayName,     
                    bundleName: metaData?.bundleName,
                    status: data?.status,
                    channel: data?.channel,
                },
            
            }
        ];
    }
    if (slug === "mtn-vtu") {
        return [
            {
                spacing: false,
                header: AIRTIMEDETAILSTABLE,
                data: {
                    phoneNumber: metaData?.phoneNumber,
                    type: data?.type,
                    amount: data?.amount,
                    balance: data?.total,
                    product: data?.product?.displayName,
                    reference: data?.reference,
                },
            },
            {
                spacing: false,
                header: AIRTIMEMORETABLE,
                data: {
                    biller: data?.biller?.displayName,     
                   status: data?.status,
                    channel: data?.channel,
                },
            
            }
        ];
    }
    if (slug === "glo-bundle" || slug === "mtn-bundle") {
        return [
            {
                spacing: false,
                header: AIRTIMEDETAILSTABLE,
                data: {
                    phoneNumber: metaData?.phoneNumber,
                    type: data?.type,
                    amount: data?.amount,
                    balance: data?.total,
                    product: data?.product?.displayName,
                    reference: data?.reference,
                },
            },
            {
                spacing: false,
                header: DATAMORETABLE,
                data: {
                    bundle: metaData?.bundle,
                    biller: data?.biller?.displayName,     
                   status: data?.status,
                    channel: data?.channel,
                },
            
            }
        ];
    }
}

export const otherHelper = (data: any) => {
    const recipientObject = data?.metadata?.reduce((o: any, {
        key,
        value
    }: { key: number; value: string }) => (o[key] = value, o), {});
    return [
        {
            spacing: false,
            header: CUSTOMERTABLE,
            data: {
                customerId: recipientObject?.customerId || data?.userId,
                customerName: recipientObject?.accountName || recipientObject?.customerName,
                phoneNumber: recipientObject?.phoneNumber,
                dob: recipientObject?.dateOfBirth,
                email: recipientObject?.email
            },
        },
        {
            spacing: false,
            header: CUSTOMERMORETABLE,
            data: {
                segment: data?.segment,
                customerType: data?.userType,
                kyc: data?.kyc,
                status: data?.status
            },
        },

    ];

}

