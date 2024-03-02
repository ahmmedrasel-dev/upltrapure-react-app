import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Ultra Pure Engineering`;
  }, [title]);
};

export default useTitle;
