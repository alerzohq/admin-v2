
export type TransactionData = {
    name: string;
    amount: string;
    type: string;
    total: string;
    summary:string;


}

export type Transaction = {
    data:TransactionData;
}