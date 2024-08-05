import React from 'react';
import UserIcon from './UserIcon';
import UserMenu from './UserMenu';
const UserInfo = () => {
  const [isMenuHidden, setIsMenuHidden] = React.useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
    console.log('Menu is hidden:', isMenuHidden);
  };
  return (
    <div className="relative my-auto p-1 ml-2">
      <UserIcon onClick={toggleMenu} />
      {!isMenuHidden && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMenu}
          ></div>

          <UserMenu />
        </>
      )}
    </div>
  );
};

export default UserInfo;
