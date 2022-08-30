
export function validEmail(email: string){
    let alerzo = '@alerzo.com';
    if(email.indexOf(alerzo) === -1 ){
        return false;
    }else{
        return true
    }
  }