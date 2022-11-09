import { AlerzoLogo } from "../../../../assets/icons";
import { Color } from "../../../../assets/theme";
import Button from "../../../button";
import { ErrorContainer } from "../styles/error-boundary.styles";

import errorImg from "../../../../assets/images/pngs/error.png"
import {  useNavigate } from "react-router-dom";
const ErrorBody = ({error }: {error:{[key:string]:any}}) =>{
  const navigate = useNavigate()

     return (
        <ErrorContainer>
        <AlerzoLogo
          className={'logo'}
          onClick={() => { }}
          height={'25'}
          width={'150'}
          color={Color.alerzoBlue}
        />
        <img src={errorImg} alt="signout" />
        <h2 data-testid="errorboundary">You have run into an error while trying to perform this action</h2>
        <Button
          radius="10px"
          fontSize="14px"
          weight="700"
          onClick={()=>navigate("dashboard",{replace: true})}
        >
          Go Back To Dashboard
        </Button>
      </ErrorContainer>
     )
}

export default ErrorBody;