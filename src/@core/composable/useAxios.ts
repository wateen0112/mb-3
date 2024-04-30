import axios from "axios"
import { API_URL } from '~config';

export const useAxios = ()=>{
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmY3NTQ3NzhjNDMxZDZkZDczODFkY2ViMDkwZjBlNjJiMGJhYzJkNzU1MzNlZDE4OWY5ZmZiMDc1NmE2YzAzN2Q1YzE4MTRhYmU5ODQ0YWIiLCJpYXQiOjE2ODAyODE3NDQuNzczNDkxLCJuYmYiOjE2ODAyODE3NDQuNzczNDk2LCJleHAiOjE3MTE5MDQxNDQuNzQ5NzEzLCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.Izg-fkzreEmgK12l11osXlvvNghbUqr7qCHNOiB9Vx4vZl-ifJMlbxlV4CVkZlzHGMBpTCOq494yDXCWb_0O8nA13zUwfaBLdWVlS-fgPyjUjOldjhOhoba6gNWfX3Z_jE1lVagUKkZlpw4foFwwlu0L9xC3mLRb99efbfz4RJQUEonL0ddhOBYwLLIJ6yl4eof2wgqoTvaj6iGI1UKt571ZXKd1-6V6WO_Mq9bmqYZ1fCmE7wtYew1HItXprWUpyWhGb_XwXNQ09ZiVenLLalwXCcxRLoPTB4YG-u9Qsr4Dr6ECJ5JnV_rSKo5aL5EjcdVCvMVzASOlSuiiYbDjlbo8kqloRT5_71dSojpM822U4BNDmx8BJdv_tTvjuBdmJ1dr9H1tG8rWWBy6n7hsYjyn7Zh_vCI1shnvRe3xvPK-A5tReXoCtTJuyMi_DbhGp7R6ks-RAranqOqS0ZVcswAeXLd2jD8BQDUngICNPyrb2mDEdTl_FpkRrBvulguAq0KQZo97mTlQLCWEAolA1fJQkBfdlnZd8YymmLdgNWsEFeNi5SHJihQoTfU0DrdcDe9dYse9YQZcg-r7bodT0xM1PdQFSHjcTsFumFgUSHY7lZl-FoRpDMWLHXzEejVW2qgi7p-lm_-fv2Sl_5FuwEssuiaCAWqX4W3bIApTPzE'
  const config = {
    headers: {
      'Content-Type': 'application/json',
     
    },
    timeout: 5000
  };
const POST  = async (url:string,payload :any,hasToken:boolean=true)=>{
 if(hasToken){
  axios.post(API_URL+url, payload)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
 }
 else {
  axios.post(API_URL+url, payload)
  .then(response => {
    console.log(response.data);
    return response
  })
  .catch(error => {
    console.error(error);
  });
 }
}
const GET  = async (url:string)=>{

  axios.get(API_URL+url, config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
 }
return {POST,GET}
}
