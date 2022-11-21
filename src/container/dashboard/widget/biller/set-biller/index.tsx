import React, { memo, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { Color } from '../../../../../assets/theme'
import { Button, Form, Text } from '../../../../../components'
import Modal from '../../../../../components/modal'
import { axiosInstance } from '../../../../../configs/axios-instance'
import { BillerLabel, BillerLogo, CircleFlag } from '../styles/biller.styles'
import { BillerSettings } from '../type'


const SetBiller = ({show, setShow,biller}:BillerSettings) => {
const queryClient=useQueryClient();

const [values, setValues]= useState({
     minimumBalance:0, 
    averageBalance:0, 
});
const{ minimumBalance, averageBalance } =values;

let payload={
minimumBalance,
averageBalance,
}

console.log('BILLERS',averageBalance)

useEffect(() => {
    setValues({...values,minimumBalance:biller?.minBalance,averageBalance:biller?.averageBalance })
// eslint-disable-next-line react-hooks/exhaustive-deps
},[biller?.minBalance,biller?.averageBalance])

const setBillerThreshold=async(payload:{})=>{
return axiosInstance.patch(`billers/${biller?.slug}`,payload)
}



const {mutate, isLoading}=useMutation(setBillerThreshold,{
 onSuccess:()=>{
  queryClient.invalidateQueries('billers');
  setShow(false);
  toast.success('Threshold set successfully')
 },
 onError:()=>{
 toast.error('Failed to set threshold')
 }
})

const handleChange=(name:string)=>(e:React.ChangeEvent<HTMLInputElement>) =>{
   setValues({ ...values,[name]:e.target.value})
}



const handleBiller=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    mutate(payload)
}

  return (
    <Modal  showModal={show} title={'Set Biller Threshold'} setShowModal={setShow} withoutFooter contentPadding={"1rem"}>
        <Form>
            <Form.Control pb={'1rem'}>
                <Form.Label>Biller</Form.Label>
                <BillerLabel>
                <BillerLogo width={'70px'} position={'left'}>
                {biller?.logo ? <img src={biller?.logo} alt="biller-logo" />:null}
                 </BillerLogo> 
                 <Text as={'small'} color={Color.alerzoGray2}>{biller?.displayName}</Text> 
                </BillerLabel>
            </Form.Control>
            <Form.Control pb={'1rem'}>
                <Form.Label>Minimum Threshold</Form.Label>
                <Form.Input type="number" 
                placeholder="Enter Minimum amount" value={minimumBalance} onChange={handleChange('minimumBalance')}/>
                <CircleFlag color={Color.alerzoDanger} />
            </Form.Control>
            <Form.Control pb={'1rem'}>
                <Form.Label>Average Threshold</Form.Label>
                <Form.Input type="number" placeholder="Enter average amount" value={averageBalance} onChange={handleChange('averageBalance')}/>
                <CircleFlag color={Color.alerzoWarning} />
            </Form.Control>

            <Form.Control pb={'1rem'}>
              <Button.Group align={'center'}>
              <Button loading={isLoading} width={'170px'} onClick={handleBiller}>
                    Save Changes
                </Button>
              </Button.Group>
              
            </Form.Control>
        </Form>
    </Modal> 
  )
}

export default memo(SetBiller)