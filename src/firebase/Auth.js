import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

async function registerPhoneNumber(phoneNumber, password) {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      phoneNumber + '@nbe.com',
      password,
    );
    firestore()
      .collection('Users')
      .doc(userCredential.user.uid)
      .set({phone: phoneNumber, accountnum: Math.floor(Math.random() * 1e16)})
      .then(() => {
        console.log('added');
      });
  } catch (error) {
    alert('error in registration');
    console.log(error);
  }
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
