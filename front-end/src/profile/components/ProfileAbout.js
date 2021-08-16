import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../../shared/context/auth-context';
import { useHttp } from '../../shared/hooks/useHttp';

const ProfileAbout = props => {
  const [isLoading, success, error, sendReq] = useHttp();
  const auth = useContext(AuthContext);

  return (
    <>
      <h2 className="text-3xl">Hello, {auth.userData.username}</h2>
    </>
  );
}

export default ProfileAbout;