import { useState } from "react";

const useToggle = (mode) => {
  const [data, setData] = useState(mode);

  const toggleData = () => {
    setData(!data);
  };

  return [data, toggleData];
};

export default useToggle;

