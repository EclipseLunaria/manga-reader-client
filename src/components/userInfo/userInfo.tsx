import React from 'react';
import UserIcon from './userIcon';
import UserMenu from './userMenu';
const UserInfo = () => {
  const [isMenuHidden, setIsMenuHidden] = React.useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
    console.log('Menu is hidden:', isMenuHidden);
  };
  return (
    <div className="relative my-auto p-1 ml-2 z-50">
      <UserIcon onClick={toggleMenu} />
      {!isMenuHidden && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMenu}
          ></div>

          <UserMenu closeMenu={() => setIsMenuHidden(true)} />
        </>
      )}
    </div>
  );
};

export default UserInfo;
