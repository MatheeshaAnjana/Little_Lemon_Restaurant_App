// src/components/Main.js
import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Homepage from "../pages/Homepage";
import BookingPage from "../pages/BookingPage";

// ✅ Access the API from the window object
const fetchAPI = window.fetchAPI;

/* Initialize times for today using fetchAPI */
export function initializeTimes() {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  return fetchAPI(today); // Returns array of available times
}

/* Reducer function */
export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.date); // fetch available times for selected date
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
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;