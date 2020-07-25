const { useState } = require('react');

const useSignUpInputs = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const data = {
    email,
    password,
    confirmPassword,
    username,
  };

  return {
    inputsChangers: {
      setEmailOnInput(e) {
        setEmail(e.target.value);
      },
      setUsernameOnInput(e) {
        setUsername(e.target.value);
      },
      setPasswordOnInput(e) {
        setPassword(e.target.value);
      },
      setConfirmPasswordOnInput(e) {
        setConfirmPassword(e.target.value);
      },
    },
    inputsValues: {
      email: data.email,
      username: data.username,
      password: data.password,
      confirmPassword: data.confirmPassword,
    },
  };
};

export default useSignUpInputs;
