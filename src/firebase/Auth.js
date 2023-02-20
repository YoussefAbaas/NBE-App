import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {acc} from 'react-native-reanimated';

async function registerPhoneNumber(phoneNumber, password) {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      phoneNumber + '@nbe.com',
      password,
    );
    var accountnum = Math.floor(Math.random() * 1e16);
    firestore()
      .collection('Users')
      .doc(userCredential.user.uid)
      .set({phone: phoneNumber, accountnum: accountnum})
      .then(() => {
        console.log('added');
      });
  } catch (error) {
    alert('error in registration');
    //console.log(error);
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
    var user = await firestore()
      .collection('Users')
      .doc(userCredential.user.uid)
      .get();
    console.log(user.data());
    result = true;
  } catch (error) {
    alert('error in user name or password');
    result = false;
  }
  return [result, user.data()];
}

export {signIn, registerPhoneNumber};
