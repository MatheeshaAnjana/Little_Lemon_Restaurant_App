import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Homepage from "../pages/Homepage";
import BookingPage from "../pages/BookingPage";

/* Initial available times */
export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

/* Reducer function */
export function updateTimes(state, action) {

  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes(); // later can fetch based on date
    default:
      return state;
  }

}

function Main() {

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

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
            />
          }
        />

      </Routes>

    </main>
  );
}

export default Main;