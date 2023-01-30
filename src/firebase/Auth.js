import auth from '@react-native-firebase/auth';
import {FastField} from 'formik';
import {useEffect, useState} from 'react';

async function registerPhoneNumber(phoneNumber, password) {
  try {
    await auth().createUserWithEmailAndPassword(
      phoneNumber + '@nbe.com',
      password,
    );
  } catch (error) {
    alert('error in registration');
  }
}
async function signIn(phoneNumber, password) {
  let result = false;
  try {
    await auth().signInWithEmailAndPassword(phoneNumber + '@nbe.com', password);
    result = true;
  } catch (error) {
    alert('error in user name or password');
    result = false;
  }
  return result;
}

export {signIn, registerPhoneNumber};
