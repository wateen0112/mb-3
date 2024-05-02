import axios from "axios";
import { API_URL } from '~config';

export const useAxios = () => {
  const accessToken =  localStorage.getItem('token')
  const config = {

    headers: {
      Authorization: `Bearer ${accessToken}`,
      mode: 'no-cors',
      'Content-Type': 'application/json',
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      Accept: '*/*',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*', // This may not be effective depending on server configuration
    },
    timeout: 5000
  };

  const handleResponse = (response) => {
    console.log(response.data);
    return response.data;
  };

  const handleError = (error) => {
    console.error(error);
    throw error;
  };

  const POST = async (url: string, payload: any, hasToken: boolean = true) => {
    try {
      const response = await axios.post(API_URL + url, payload, config);
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  };

  const GET = async (url: string) => {
    try {
      const response = await axios.get(API_URL + url, config);
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  };

  return { POST, GET };
};
