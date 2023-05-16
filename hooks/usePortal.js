import { useState, useCallback, useEffect } from "react";

import { createPortal, unmountComponentAtNode } from "react-dom";

const usePortal = (id) => {
  const [portal, setPortal] = useState({
    render: () => null,
    remove: () => null,
  });
  const el = document.getElementById(id);

  const createNewPortal = useCallback((id) => {
    const Portal = ({ children }) => createPortal(children, el);
    const remove = () => unmountComponentAtNode(el);
    return { render: Portal, remove };
  }, []);

  useEffect(() => {
    if (el) portal.remove();
    const newPortal = createNewPortal(id);
    setPortal(newPortal);
    return () => newPortal.remove(el);
  }, [createNewPortal, portal, id, el]);

  return portal.render;
};
export default usePortal;
