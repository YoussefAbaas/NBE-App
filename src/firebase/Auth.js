import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {acc} from 'react-native-reanimated';

const handleSendCode = async phoneNumber => {
  auth().settings.appVerificationDisabledForTesting = true;

  return new Promise((resolve, reject) => {
    auth()
      .verifyPhoneNumber('+2' + phoneNumber)
      .on('state_changed', phoneAuthSnapshot => {
        switch (phoneAuthSnapshot.state) {
          case auth.PhoneAuthState.CODE_SENT:
            resolve(phoneAuthSnapshot.verificationId);
            break;
          case auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT:
            reject('Auto verify timed out');
            break;
          case auth.PhoneAuthState.AUTO_VERIFIED:
            reject('Auto verified');
            break;
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
const handleVerifyCode = async (verificationId, verificationCode) => {
  const credential = auth.PhoneAuthProvider.credential(
    verificationId,
    verificationCode,
  );
  try {
    await auth().signInWithCredential(credential);
    console.log('Verification successful');
    return true;
  } catch (error) {
    console.log('Verification failed', error);
    return false;
  }
};
async function registerPhoneNumber(phoneNumber, password) {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      phoneNumber + '@nbe.com',
      password,
    );
    return userCredential.user.uid;
  } catch (error) {
    alert('error in registration');
    console.log(error);
  }
  return accountnum;
}
async function signIn(phoneNumber, password) {
  let result = false;
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      phoneNumber + '@nbe.com',
      password,
    );
    return userCredential.user.uid;
  } catch (error) {
    alert('error in user name or password');
    result = false;
  }
}

export {signIn, registerPhoneNumber, handleSendCode, handleVerifyCode};
