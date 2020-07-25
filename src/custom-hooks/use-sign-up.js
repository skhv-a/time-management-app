import { useState } from 'react';

const useSignUp = () => {
  const [isSignUpFullScreen, setSignUpFullScreen] = useState(false);
  const [isSignUpClicked, setSignUpClicked] = useState(false);

  return {
    signUpProps: {
      isSignUpFullScreen,
      isSignUpClicked,
    },
    signUpPropsChangers: {
      setFullWidth() {
        setSignUpClicked(true);
        setSignUpFullScreen(true);
      },
      setSignUpWidthDefault() {
        setSignUpFullScreen(false);
      },
      setIsSignUpClickedDefault() {
        setSignUpClicked(false);
      },
    },
  };
};

export default useSignUp;
