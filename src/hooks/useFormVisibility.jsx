import { useState } from 'react';

const useFormVisibility = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return {
    isFormVisible,
    openForm,
    closeForm,
  };
};

export default useFormVisibility;
