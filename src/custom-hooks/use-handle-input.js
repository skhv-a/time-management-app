const { useState } = require('react');

let id = 0;

const useHandleInput = () => {
  const [isValid, setValid] = useState(false);

  const [goal, setGoal] = useState({
    title: '',
    description: '',
    isDone: false,
    isPinned: false,
    id: id++,
  });

  const handleInputForm = (e) => {
    return (inputType) => {
      setGoal({ ...goal, [inputType]: e.target.value.toLowerCase() });
    };
  };

  const handleTitleInput = (e) => {
    handleInputForm(e)('title');
    e.target.value.length >= 4 ? setValid(true) : setValid(false);
  };

  const handleDescriptionInput = (e) => {
    handleInputForm(e)('description');
  };

  return {
    handleTitleInput,
    handleDescriptionInput,
    goal,
    isValid,
    setValid,
  };
};

export default useHandleInput;
