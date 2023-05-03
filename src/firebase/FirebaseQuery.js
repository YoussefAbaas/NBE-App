import {useQuery, useQueryClient} from 'react-query';
import {useMutation} from 'react-query';
import firestore from '@react-native-firebase/firestore';
import {addbeneficier, addtransaction} from './FirestoreDB';

export function useBeneficiersData(mobilenumber) {
  const queryKey = ['Beneficiers', mobilenumber];

  const fetchBeneficiers = async () => {
    const snapshot = await firestore().collection('Beneficiers').get();
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  };

  const options = {
    select: data => {
      return data.filter(benef => benef.relateduserphone == mobilenumber);
    },
    staleTime: 2 * 60 * 1000,
  };

  return useQuery(queryKey, fetchBeneficiers, options);
}

export function useAddBeneficierData() {
  const queryclient = useQueryClient();
  const mutation = useMutation(
    data => {
      return addbeneficier(data);
    },
    {
      onSettled: () => {
        queryclient.invalidateQueries('Beneficiers');
      },
    },
  );

  return mutation;
}

export function useAddTransactionData() {
  const queryclient = useQueryClient();
  const mutation = useMutation(addtransaction, {
    onSettled: () => {
      queryclient.invalidateQueries('Beneficiers');
    },
  });

  return mutation;
}

export function useUserData(uid) {
  const queryKey = ['User'];

  const fetchUser = async () => {
    const user = await firestore().collection('Users').doc(uid).get();
    return user.data();
  };

  const options = {
    staleTime: 2 * 60 * 1000,
    enabled: false,
  };

  return useQuery(queryKey, fetchUser, options);
}

export function useAddUserData() {
  const mutation = useMutation(data => {
    return firestore().collection('Users').doc(data.userId).set({
      phone: data.phoneNumber,
      accountnum: data.accountnum,
      balance: 100000,
    });
  });

  return mutation;
}
