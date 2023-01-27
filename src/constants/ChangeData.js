import { useState } from "react";

export const Refresh = () => {
  const [refresh, setRefresh] = useState(true);

  return {
    refresh,
    setRefresh,
  };
};
