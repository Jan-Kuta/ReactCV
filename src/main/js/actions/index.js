import axios from 'axios';

const ROOT_URL = '/api';

export const FETCH_CV = "FETCH_CV";
export const FETCH_CVS = "FETCH_CVS";
export const CREATE_CV = "CREATE_CV";

export function selectCV(userId) {
  const url=`${ROOT_URL}/users/${userId}`;
  const request = axios.get(url);

  return {
    type: FETCH_CV,
    payload: request
  };
}

export function fetchCVs(){
  const url=`${ROOT_URL}/users?projection=base`;
  const request = axios.get(url);

  return{
    type: FETCH_CVS,
    payload: request
  };
}

export function createCV(values, callback){
  const url=`${ROOT_URL}/users`;
  const request = axios.post(url, values)
    .then(() => callback())
    .catch((err) => { alert(err);})

  return{
    type: CREATE_CV,
    payload: request
  }
}