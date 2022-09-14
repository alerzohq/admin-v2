type props={
    item :{[key: string]:any} | null ,
    name?:string;
}

export const transformData=({item,name}:props)=>{

  if(item && name === 'transaction'){
    const {reference,amount,type,action,status,biller,created_at} = item;
    let displayName = biller?.displayName || ''
    return {reference, amount,type,action,displayName,status,created_at}
  }
 

}