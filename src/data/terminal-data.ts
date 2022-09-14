import { formatDate } from "../utils/formatValue";

export const TABS = [
    { label: "Terminal Details", value: "details", title: "Terminal Details" },
    { label: "Merchant Details", value: "merchant", title: "Merchant Details" },
    { label: "Terminal Status History", value: "stats-history", title: "" },
    { label: "Terminal Transaction History", value: "trans-history", title: "" },
];

export const DETAILSTABLE = [
    { label: "Terminal ID", value: "tid", columnWidth: 'small' },
    { label: "Terminal Serial No", value: "serialNumber", columnWidth: 'small' },
    { label: "Variant", value: "variant", columnWidth: 'small' },
    { label: "Status", value: "status", columnWidth: 'small' },
    { label: "Date Updated", value: "updatedAt", columnWidth: 'small' },
    { label: "Date Created", value: "createdAt", columnWidth: 'large' },
];

export const OTHERDETAILSTABLE = [
    { label: "Terminal Model", value: "model", columnWidth: 'small' },
    { label: "Source Account No.", value: "accountNumber", columnWidth: 'small' },
    { label: "Source Account Name", value: "accountName", columnWidth: 'small' },
    { label: "References", value: "references", columnWidth: 'small' },
    { label: "Date", value: "date", columnWidth: 'small' },
    { label: "Session ID", value: "sessionId", columnWidth: 'large' },
];

export const data = {
    "status": true,
    "message": "Fetched terminals",
    "data": [
        {
            "id": "02aae9f9-c692-41aa-803d-3c0c0d3fc9e2",
            "tid": "2ALZ1816",
            "serialNumber": "00052001043",
            "defective": false,
            "defectReason": null,
            "userId": "774e05df-c5fc-44d3-a88c-94ac11923f38",
            "userType": "admin",
            "active": false,
            "createdAt": "2022-09-14T08:42:08.234Z",
            "updatedAt": "2022-09-14T08:42:08.234Z",
            "terminalSpecificationId": "e2025982-a6e2-470b-9c63-1be84dab5614",
            "model": "A75",
            "accountNumber": "0805661234",
            "accountName": "Jonathan Lewis",
            "references": "001043",
            "sessionId": "2025982",
            "variant": "POS",
            
        }
    ]
}
export const terminalHelper = (data: any) => {
    return [
        {
            spacing: false,
            header: DETAILSTABLE,
            data: {
                tid: data?.tid,
                serialNumber: data?.serialNumber,
                amount: data?.amount,
                status: data?.active ? "Active" : "Disabled",
                variant: data?.variant,
                updatedAt: data?.updatedAt ? formatDate(data?.updatedAt,'YYYY-MM-DD HH:mm:ss') : '',
                createdAt: data?.createdAt ? formatDate(data?.createdAt,'YYYY-MM-DD HH:mm:ss') : '',
            },
        },
        {
            spacing: false,
            header: OTHERDETAILSTABLE,
            data: {
                model: data?.model,
                accountNumber: data?.accountNumber,
                accountName: data?.accountName,
                references: data?.references,
                date: data?.createdAt ? formatDate(data?.createdAt,'YYYY-MM-DD HH:mm:ss') : '',
                sessionId: data?.sessionId
            },
        },
    ]

}