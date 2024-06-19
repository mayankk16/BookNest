import React, { useState, useContext } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { loadStripe } from "@stripe/stripe-js";

const STRIPE_PUB_KEY = "pk_test_51PPq0wP4Rh0kp2FAAqaPIQtB75Xlio16kScNlLJYheb6DSOL3Mg6Fvj62NbstZ9JNPq2TvjD8Jj0cWSEQ5xyJZto00SreuT8D8"

const AppContext = React.createContext(undefined);
const stripePromise = loadStripe(STRIPE_PUB_KEY);


export const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        isLoggedIn: !isError,
        stripePromise
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
}

