import axios from 'axios';

const ROOT_URL = '/api';

export const CV_SELECTED = "CV_SELECTED";
export const FETCH_CVS = "FETCH_CVS";
export const CREATE_CV = "CREATE_CV";

export function selectCV(cv) {
  return {
    type: CV_SELECTED,
    payload: cv
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

export function createCV(){
  const url=`${ROOT_URL}/users`;
  const request = axios.post(url, {});

  return{
    type: CREATE_CV,
    payload: request
  }
}