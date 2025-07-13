import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"; // ✅ Import Payment correctly
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51Qr6P1GsNCQU0zeToVUPQICntnt3obcAcz5GQQJatTl4rOSUdd0hOHFCZhtwDPrNMmrwAcHkAEQwywxGnKept3a000nGz93yTj");

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      dispatch({
        type: "SET_USER",
        user: authUser ? authUser : null,
      });
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          {/* Checkout Page */}
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          {/* Payment Page (Fixed Route) */}
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                <Payment /> {/* ✅ Use Payment component instead of PaymentIcon */}
                </Elements>
              </>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





