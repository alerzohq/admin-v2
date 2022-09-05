type props={
    item :{[key: string]:any} | null ,
    name?:string;
}

export const transformData=({item,name}:props)=>{

  if(item && name === 'transaction'){
    const {reference,amount,type,action,status,biller:{displayName},createdAt} = item;
    return {reference, amount,type,action,displayName,status,createdAt}
  }
 

}