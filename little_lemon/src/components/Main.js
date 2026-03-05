import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

import Homepage from "../pages/Homepage";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";

/* Initialize times */
export function initializeTimes() {
  const today = new Date();

  if (window.fetchAPI) {
    return window.fetchAPI(today);
  }

  return [];
}

/* Reducer */
export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    if (window.fetchAPI) {
      return window.fetchAPI(new Date(action.date));
    }
  }

  return state;
}

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  /* Submit booking */
  const submitForm = (formData) => {
    if (window.submitAPI) {
      const success = window.submitAPI(formData);

      if (success) {
        navigate("/confirmed");
      }
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />

        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;