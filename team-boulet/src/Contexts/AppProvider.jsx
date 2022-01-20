import { createContext, useContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [choice1, setChoice1] = useState(
    localStorage.getItem("choice1")
      ? JSON.parse(localStorage.getItem("choice1"))
      : null
  );

  const [choice2, setChoice2] = useState(
    localStorage.getItem("choice2")
      ? JSON.parse(localStorage.getItem("choice2"))
      : null
  );

  const [choice3, setChoice3] = useState(
    localStorage.getItem("choice3")
      ? JSON.parse(localStorage.getItem("choice3"))
      : null
  );

  useEffect(() => {
    if (choice1) {
      localStorage.setItem("choice1", JSON.stringify(choice1));
    } else {
      localStorage.removeItem("choice1");
    }
  }, [choice1]);

  useEffect(() => {
    if (choice2) {
      localStorage.setItem("choice2", JSON.stringify(choice2));
    } else {
      localStorage.removeItem("choice2");
    }
  }, [choice2]);

  useEffect(() => {
    if (choice3) {
      localStorage.setItem("choice3", JSON.stringify(choice3));
    } else {
      localStorage.removeItem("choice3");
    }
  }, [choice3]);

  useEffect(() => {
    setTotal(() => {
      const array = cart.map((article) => article.quantity);
      const reducer = (a, b) => a + b;

      if (cart.length > 0) {
        return array.reduce(reducer);
      }
      return 0;
    });
  }, [cart]);



  const AppStates = useMemo(
    () => ({
      cart,
      setCart,
      total,
      setTotal,
      choice1,
      setChoice1,
      choice2,
      setChoice2,
      choice3,
      setChoice3,
    }),
    [cart, total, choice1, choice2, choice3]
  );

  return (
    <AppContext.Provider value={AppStates}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useApp = () => useContext(AppContext);

export default AppProvider;
