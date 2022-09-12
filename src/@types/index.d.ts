export type SelectInputProps={
    value: string;
    label: string;
} | null | undefined;

export type filterProps={
count:number;
pageNumber:number;
status?: string;
from?:number;
to?:number;
query?:string;

}