import axios from "axios";

export const validatePhoneNumber = async (number) => {
  const baseUrl = 'http://apilayer.net/api/validate';
  const accessKey = process.env.REACT_APP_PHONE_API_KEY;
  const url = `${baseUrl}?access_key=${accessKey}&number=${number}&country_code=HK&format=1`;
  const response = await axios.get(url);
  console.log('phone validation', response.data);
  return response;
}

export const validateEmail = async (email) => {
  const baseUrl = 'http://apilayer.net/api/check';
  const accessKey = process.env.REACT_APP_EMAIL_API_KEY;
  const url = `${baseUrl}?access_key=${accessKey}&email=${email}&smtp=1&format=1`;
  const response = await axios.get(url);
  console.log('email validation', response.data);
  return response;
}
