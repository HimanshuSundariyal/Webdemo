import React from 'react';
import Errors from './index';
import {
    mandatoryFieldsError,
    errorMessage,
  } from "../../../config";

export default {
    title: 'Errors',
    component: Errors
}


export const Critical = {
  args: {
    errorType: 'critical',
    errorMessage: 'Critical Error',
  },
};

export const Warning = {
  args: {
    errorType: 'warning',
    errorMessage: 'Warning Error',
  },
}; 

export const Alert = {
  args: {
    errorType: 'alert',
    errorMessage: 'Alert Error',
  },
}; 

