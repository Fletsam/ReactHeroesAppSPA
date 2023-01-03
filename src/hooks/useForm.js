import { useState } from "react";

export const useForm = (initalForm = {}) => {
  const [formstate, setFormstate] = useState(initalForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormstate({
      ...formstate,
      [name]: value,
    });
  };
  const onReset = () => {
    setFormstate(initalForm);
  };
  return {
    ...formstate,
    formstate,
    onInputChange,
    onReset,
  };
};
