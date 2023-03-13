import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const addbeneficier = async beneficier => {
  const reference = storage().ref(beneficier.name + '.png');
  await reference.putFile(beneficier.image.uri);
  const url = await reference.getDownloadURL();
  console.log(url);
  firestore()
    .collection('Beneficiers')
    .add({...beneficier, image: {uri: url}})
    .then(() => {
      console.log('added');
    });
};
export const getbeneficiers = async () => {
  const users = await firestore()
    .collection('Beneficiers')
    .get()
    .then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(documentSnapshot => {
        data.push(documentSnapshot.data());
      });
      return data;
    });
  return users;
};

export const addtransaction = async transaction => {
  // get benficier data
  const [userid, usertransactions, amount] = await firestore()
    .collection('Beneficiers')
    // Filter results
    .where('name', '==', transaction.username)
    // Limit results
    .limit(1)
    .get()
    .then(querySnapshot => {
      return [
        querySnapshot.docs[0].id,
        querySnapshot.docs[0].data().transactions,
        parseInt(querySnapshot.docs[0].data().amount),
      ];
    });
  //update beneficier data with new transaction
  firestore()
    .collection('Beneficiers')
    .doc(userid)
    .update({
      transactions: [...usertransactions, transaction],
      amount: amount + parseInt(transaction.amount),
    })
    .then(() => {
      console.log('User updated!');
    });
  // get current user data
  const [currentuserId, balance] = await firestore()
    .collection('Users')
    // Filter results
    .where('phone', '==', transaction.from)
    // Limit results
    .limit(1)
    .get()
    .then(querySnapshot => {
      return [
        querySnapshot.docs[0].id,
        parseInt(querySnapshot.docs[0].data().balance),
      ];
    });
  //update current user with new transaction
  firestore()
    .collection('Users')
    .doc(currentuserId)
    .update({
      balance: balance - parseInt(transaction.amount),
    })
    .then(() => {
      console.log('User updated!');
    });
  //console.log(usertransactions);
};
