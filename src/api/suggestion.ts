import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getSuggestions = async (param: string) => {
  const { data } = await axios.get<Sick[]>(`${SERVER}/sick?sickNm_like=${param}`);
  return data;
};
