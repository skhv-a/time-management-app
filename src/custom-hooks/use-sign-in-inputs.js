const { useState } = require('react');

const useSignInInputs = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const data = {
    username,
    password,
  };

  return {
    inputsChangers: {
      setUsernameOnInput(e) {
        setUsername(e.target.value);
      },
      setPasswordOnInput(e) {
        setPassword(e.target.value);
      },
    },
    inputsValues: {
      username: data.username,
      password: data.password,
    },
  };
};

export default useSignInInputs;
