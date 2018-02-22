import axios from 'axios';

const ROOT_URL = '/api';

export const FETCH_CV = "FETCH_CV";
export const DESELECT_CV = "DESELECT_CV";
export const FETCH_CVS = "FETCH_CVS";
export const CREATE_CV = "CREATE_CV";
export const UPDATE_CV = "UPDATE_CV";

export function selectCV(userId) {
  const url=`${ROOT_URL}/users/${userId}`;
  const request = axios.get(url);

  return {
    type: FETCH_CV,
    payload: request
  };
}

export function deselectCV(){
  return{
    type: DESELECT_CV,
    payload: null
  };
}

export function fetchCVs(){
  const url=`${ROOT_URL}/users`;
  const request = axios.get(url);

  return{
    type: FETCH_CVS,
    payload: request
  };
}

export function createCV(values, callback){
  const url=`${ROOT_URL}/users`;
  const request = axios.post(url, values)
    .then((val) => callback(val.data))
    .catch((err) => { alert(err);});

  return{
    type: CREATE_CV,
    payload: request
  }
}

export function updateCV(values, userId, callback){
  const url=`${ROOT_URL}/users/${userId}`;
  const request = axios.put(url, values)
    .then((val) => callback(val.data))
    .catch((err) => alert(err));

  return {
    type: UPDATE_CV,
    payload: request
  }
}