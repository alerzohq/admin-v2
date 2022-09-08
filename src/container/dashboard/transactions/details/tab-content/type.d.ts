
export type TransactionData = {
    name: string;
    amount: string;
    type: string;
    balance: string;
    summary:string;


}

export type Transaction = {
    data:TransactionData;
    slug: string;
    tab: string;
}