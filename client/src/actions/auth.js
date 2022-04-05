import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const singIn = (formData, navigate) => async dispatch => {
  try {
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const singUp = (formData, navigate) => async dispatch => {
  try {
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
