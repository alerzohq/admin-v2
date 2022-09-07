import moment from "moment";

export function validEmail(email: string){
    let alerzo = '@alerzo.com';
    if(email.indexOf(alerzo) === -1 ){
        return false;
    }else{
        return true
    }
  }
export const formatDate =(date:any,type:string)=>{
return moment(date).format(type); 
}

export const maskValue=(value:string)=>{      
     let maskValue= value.slice(4).replace(/\d(?=.* )/g, '*')
    return maskValue;
}