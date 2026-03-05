// src/components/BookingForm.js
import { useState } from "react";

// ✅ Access the API from the window object
const submitAPI = window.submitAPI;

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Update available times when date changes
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    // ✅ Submit the booking via API
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      alert(`Reservation Confirmed!
Date: ${date}
Time: ${time}
Guests: ${guests}
Occasion: ${occasion}`);
    } else {
      alert(
        "Sorry, this time slot is no longer available. Please choose another time."
      );
    }
  };

  return (
    <>
      <h2>Book Now</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          maxWidth: "300px",
          gap: "20px",
          margin: "0 auto",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((timeOption) => (
            <option key={timeOption}>{timeOption}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;