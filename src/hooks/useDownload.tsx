import toast from 'react-hot-toast'
import {
  axiosInstance,
  axiosInstanceUniqueUrl,
} from '../configs/axios-instance'
import axios from 'axios';
const download = (blob:any, filename:string) => {
  console.log(blob, "nnnn")
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  // the filename you want
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};


export const downloadBulkCSV = async () => {
  let getToken = localStorage.getItem('token')
  let token = localStorage.getItem('token') ? JSON.parse(`${getToken}`) : null

  var myHeaders = new Headers()
  axios({
    url: 'https://alerzopay.s3.eu-west-1.amazonaws.com/terminal/batch_terminal_template.xlsx', //your url
    method: 'GET',
    responseType: 'blob', // important
}).then((response:any) => {
  download(new Blob([response.data]), "sample.csv")
})
.catch((error) => {
      toast.error("Failed to download CSV, kindly try again")
    });


  }
