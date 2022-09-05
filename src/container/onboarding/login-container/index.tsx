
import React, { useState,useEffect} from "react";
import { EmailIcon, LockIcon } from "../../../assets/icons";
import { Color } from "../../../assets/theme";
import { Button, Form, Loader, Stack, Text } from "../../../components";
import { useAppContext } from "../../../context";
import { useMutation } from "../../../hooks";
import { validEmail } from "../../../utils/formatValue";
import AuthLayout from "../layout";
import { formValue } from "./formValues";
import { Action } from '../../../context/actions'
import { setStorage } from "../../../utils/session-storage";
import { useNavigate } from "react-router-dom";
import { Path } from "../../../constants/route-path";
import toast from "react-hot-toast";


const LoginContainer = () => {

const navigate = useNavigate() 
const {dispatch} = useAppContext()  
const [isTriggerSubmit, setIsTriggerSubmit] = useState(false);
const [values, setValues] = useState(formValue);
const { email, password } = values;


const [loginUser, { data, error, loading }] = useMutation({pathUrl: "login", payload:values, methodType: "post"});



useEffect(() => {
  if(data){ 
    dispatch({type:Action.LOGIN,
      payload:data
    });
    setStorage('user',data,()=>{
      navigate(Path.DASHBOARD)
    })
  }else if(error){
    toast.error(`Invalid Credentials`)
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
},[error,data])


  

 



const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsTriggerSubmit(true);
    if (email && validEmail(email) && password && password.length >= 8) {
      setIsTriggerSubmit(false);
      await loginUser();
    }
   
};

const handleChange =(name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setValues({...values, [name]: e.target.value.trim()});
};





return (
    <AuthLayout>
      <Stack alignItems={"center"} id='login' >
        <Form width={"65%"}>
          <Text
            margin={"auto"}
            as={"h1"}
            color={Color.alerzoDarkGray}
            padding={"1rem 0"}
          >
            {`Admin Login`}
          </Text>
          <Text
            as={"p"}
            padding={"0 1rem"}
            align={"center"}
            weight={"500"}
            color={Color.alerzoDarkGray}
          >
            {" Enter email address and password to access admin dashboard"}
          </Text>
          <Form.Control pb={"1rem"}>
            <Form.Label>Email address</Form.Label>
            <Form.Input
              Icon={EmailIcon}
              type="text"
              onChange={handleChange("email")}
              placeholder="Enter your email address"
              
            />
            {isTriggerSubmit && (
              <Text as={"small"} weight={"500"} color={Color.alerzoDanger}>
                {isTriggerSubmit && email === ""
                  ? "Email address is required*"
                  : email !== "" && !validEmail(email)
                  ? "Please provide an alerzo email*"
                  : ""}
              </Text>
            )}
          </Form.Control>

          <Form.Control pb={"1rem"}>
            <Form.Label> Password</Form.Label>
            <Form.Input
              Icon={LockIcon}
              type="password"
              onChange={handleChange("password")}
              placeholder="Enter your password"
            />
            {isTriggerSubmit && (
              <Text as={"small"} weight={"500"} color={Color.alerzoDanger}>
                {isTriggerSubmit && password === ""
                  ? "Password is required*"
                  : password !== "" && password.length < 8
                  ? "Password must be 8 characters long"
                  : ""}
              </Text>
            )}
          </Form.Control>

          <Form.Control>
            <Button onClick={submitForm}>
              {loading ? <Loader color={Color.alerzoWhite}/> : "Login"}
            </Button>
          </Form.Control>
        </Form>
      </Stack>
    </AuthLayout>
  );
};

export default LoginContainer;
