import { useState } from "react";

const useModal = (state = false) => {
  const [visible, setVisible] = useState(state);
  function toggle() {
    setVisible(!visible);
  }
  return { visible, toggle };
};

export default useModal;
