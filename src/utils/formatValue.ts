import moment from "moment";

//Validate Alerzo email

export function validEmail(email: string){
    let alerzo = '@alerzo.com';
    if(email.indexOf(alerzo) === -1 ){
        return false;
    }else{
        return true
    }
  }



//Formate Date

export const formatDate =(date:any,type:string)=>{
return moment(date).format(type); 
}

//Mask string
export const maskValue=(value:string)=>{      
     let maskValue= value.slice(4).replace(/\d(?=.* )/g, '*')
    return maskValue;
}

//Valid form field are not empty
export const formIsValid = (payload:{[key: string]:any})=>{
    let isValid = false
     let result  =  Object.keys(payload).filter((key)=>payload[key] === '');
 
     if (result?.length) {
         isValid=false;
     }else{
     isValid = true
     }
   return isValid;
 }