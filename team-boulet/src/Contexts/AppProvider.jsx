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

  const [product1, setProduct1] = useState(
    localStorage.getItem("product1")
      ? JSON.parse(localStorage.getItem("product1"))
      : null
  );

  const [product2, setProduct2] = useState(
    localStorage.getItem("product2")
      ? JSON.parse(localStorage.getItem("product2"))
      : null
  );

  const [product3, setProduct3] = useState(
    localStorage.getItem("product3")
      ? JSON.parse(localStorage.getItem("product3"))
      : null
  );

  useEffect(() => {
    if (product1) {
      localStorage.setItem("product1", JSON.stringify(product1));
    } else {
      localStorage.removeItem("product1");
    }
  }, [product1]);

  useEffect(() => {
    if (product2) {
      localStorage.setItem("product2", JSON.stringify(product2));
    } else {
      localStorage.removeItem("product2");
    }
  }, [product2]);

  useEffect(() => {
    if (product3) {
      localStorage.setItem("product3", JSON.stringify(product3));
    } else {
      localStorage.removeItem("product3");
    }
  }, [product3]);

  const [package1, setPackage1] = useState(
    localStorage.getItem("package1")
      ? JSON.parse(localStorage.getItem("package1"))
      : null
  );

  const [package2, setPackage2] = useState(
    localStorage.getItem("package2")
      ? JSON.parse(localStorage.getItem("package2"))
      : null
  );

  const [package3, setPackage3] = useState(
    localStorage.getItem("package3")
      ? JSON.parse(localStorage.getItem("package3"))
      : null
  );

  useEffect(() => {
    if (package1) {
      localStorage.setItem("package1", JSON.stringify(package1));
    } else {
      localStorage.removeItem("package1");
    }
  }, [package1]);

  useEffect(() => {
    if (package2) {
      localStorage.setItem("package2", JSON.stringify(package2));
    } else {
      localStorage.removeItem("package2");
    }
  }, [package2]);

  useEffect(() => {
    if (package3) {
      localStorage.setItem("package3", JSON.stringify(package3));
    } else {
      localStorage.removeItem("package3");
    }
  }, [package3]);

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
      product1,
      setProduct1,
      product2,
      setProduct2,
      product3,
      setProduct3,
      package1,
      setPackage1,
      package2,
      setPackage2,
      package3,
      setPackage3,
    }),
    [cart, total, choice1, choice2, choice3, product1, product2, product3, package1, package2, package3]
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
