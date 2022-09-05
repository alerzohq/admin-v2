export const TABS = [
    { label: "Transaction Details", value: "details", title: "Transaction Details" },
    { label: "Other Information", value: "other", title: "Customer Details" },
    { label: "Transaction Receipt", value: "receipt", title: "" },
    { label: "Staff Notes", value: "notes", title: ""  },
];

export const DETAILSTABLE = [
    { label: "Name", value: "name", columnWidth: 'large' },
    { label: "Type", value: "type", columnWidth: 'small' },
    { label: "Amount", value: "amount", columnWidth: 'small' },
    { label: "Balance", value: "total", columnWidth: 'small' },
    { label: "Narration", value: "summary", columnWidth: 'large' },
];
export const SESSIONTABLE = [
    { label: "Session ID", value: "billerReference", columnWidth: 'small' },
    { label: "Biller", value: "displayName", columnWidth: 'small' },
    { label: "Provider", value: "displayName", columnWidth: 'small' },
    { label: "Channel", value: "channel", columnWidth: 'large' },
];
export const RECIPIENTTABLE = [
    { label: "Recipient", value: "name", columnWidth: 'small'},
    { label: "Product", value: "product", columnWidth: 'small' },
    { label: "Package", value: "package", columnWidth: 'small'},
    { label: "Reference Number", value: "reference", columnWidth: 'small' },
    { label: "Account Number/User ID", value: "userId", columnWidth: 'large' },
];
export const transaction = {
    "id": "3d4b00ee-a838-4a64-8ee0-e27c9b530d48",
    "reference": "1662044052038678718",
    "name": "E-TRANZACT/ZIBIRI ANTHONY IMONIKHIE",
    "billerReference": "1662044052038189497",
    "userId": "6f6f5667-15a9-405a-9c2f-0c7e49641384",
    "userType": "customer",
    "channel": null,
    "amount": "5000",
    "charge": "0",
    "total": "100",
    "status": "successful",
    "recipient": {
        "name": "Anthony Zibiri",
        "product": "VIRTUAL_ACCOUNT",
        "package": "VIRTUAL_ACCOUNT",
        "reference": "ALP_WVA_WD1QI0 5VGIQC",
        "userId": "E-TRANZACT/ZIBIRI ANTHONY IMONIKHIE/0039117450/7747299925/AlerzoPay/Antho"
    },
    "metadata": [
        {
            "key": "network",
            "label": "Network",
            "value": "mtn",
            "internal": false
        },
        {
            "key": "phoneNumber",
            "label": "Phone Number",
            "value": "07031929576",
            "internal": false
        }
    ],
    "createdAt": "2022-09-01T14:54:14.579Z",
    "updatedAt": "2022-09-01T14:54:37.608Z",
    "action": "Airtime Purchase",
    "actionPayload": {
        "amount": 100,
        "network": "mtn",
        "reference": "1662044052038189497",
        "phoneNumber": "07031929576"
    },
    "summary": "E-TRANZACT/ZIBIRI ANTHONY IMONIKHIE/0039117450/7747299925 /AlerzoPay/Antho",
    "type": "debit",
    "walletId": "763310ef-227d-483b-95be-d9de53797a6b",
    "commissions": [],
    "margin": null,
    "product": {
        "slug": "mtn-vtu",
        "displayName": "MTN VTU"
    },
    "runs": [
        {
            "id": 42,
            "states": [
                "ready",
                "processing"
            ],
            "version": "v1",
            "createdAt": "2022-09-01T14:54:23.825Z",
            "updatedAt": "2022-09-01T14:54:24.025Z",
            "error": null,
            "transactionId": "3d4b00ee-a838-4a64-8ee0-e27c9b530d48"
        }
    ],
    "biller": {
        "slug": "mtn",
        "displayName": "MTN"
    },
    "objectID": "3d4b00ee-a838-4a64-8ee0-e27c9b530d48"
};
