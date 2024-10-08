import React, { ReactNode, useEffect, useState } from 'react';
import LoggedOutMenu from './loggedOutMenu';

const UserMenu = (props: { closeMenu: () => void }) => {
  const [activeModal, setActiveModal] = useState<null | ReactNode>(null);

  const onModalClose = () => {
    setActiveModal(null);
    props.closeMenu();
  };
  useEffect(() => {}, [activeModal]);
  return (
    <div className="menu absolute w-[300px] h-[500px] bg-primary rounded-lg right-0 mt-2 p-4 z-20">
      <LoggedOutMenu
        setActiveModal={setActiveModal}
        onModalClose={onModalClose}
      />
      {activeModal}
    </div>
  );
};

export default UserMenu;
