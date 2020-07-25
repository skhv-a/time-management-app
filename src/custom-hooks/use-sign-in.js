import { useState } from 'react';

const useSignIn = () => {
  const [isSignInFullScreen, setSignInFullScreen] = useState(false);
  const [isSignInClicked, setSignInClicked] = useState(false);

  return {
    signInProps: {
      isSignInFullScreen,
      isSignInClicked,
    },
    signInPropsChangers: {
      setFullWidth() {
        setSignInClicked(true);
        setSignInFullScreen(true);
      },
      setSignInWidthDefault() {
        setSignInFullScreen(false);
      },
      setIsSignInClickedDefault() {
        setSignInClicked(false);
      },
    },
  };
};

export default useSignIn;
