import moment from "moment";

export function validEmail(email: string){
    let alerzo = '@alerzo.com';
    if(email.indexOf(alerzo) === -1 ){
        return false;
    }else{
        return true
    }
  }
export const formatDate =(date:string,type:string)=>{
return moment(date).format(type); 
}