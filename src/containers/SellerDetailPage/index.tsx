import { CustomModal, Toast } from '@components';
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'firebase';
import SellerDetailPageUI from './SellerDetailPageUI';
import { SellerDetailPagePropType } from './types';

export default function SellerDetailPage({
  sellerModal,
  setSellerModal,
  item,
}: SellerDetailPagePropType) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    userType: '',
  });
  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });
  const fetchUser = async () => {
    const docRef = doc(db, 'users', item?.user_id ? item.user_id : '');

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const selectedFields = {
          name: userData.name,
          email: userData.email,
          userType: userData.userType,
        };

        setUser(selectedFields);
      } else {
        setShowToast({
          visible: true,
          text: 'User Not Found !',
        });
      }
    } catch (error) {
      setShowToast({
        visible: true,
        text: `Error fetching user: ${error}`,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {showToast.visible && (
        <Toast
          visible={showToast.visible}
          setVisible={setShowToast}
          text={showToast.text}
        />
      )}
      <CustomModal isOpen={sellerModal} onClose={() => setSellerModal(false)}>
        <SellerDetailPageUI user={user} />
      </CustomModal>
    </>
  );
}
