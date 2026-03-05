import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const isFormValid = date !== "" && guests >= 1 && guests <= 10;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion
    };

    submitForm(formData);
  };

  return (
    <section aria-labelledby="booking-heading">

      <h2 id="booking-heading">Reserve a Table</h2>

      <form
        onSubmit={handleSubmit}
        aria-label="Booking Form"
        style={{
          display: "grid",
          maxWidth: "300px",
          gap: "20px",
          margin: "0 auto"
        }}
      >

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
          aria-label="Reservation Date"
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Reservation Time"
        >
          <option value="">Select Time</option>

          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
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
          required
          aria-label="Number of Guests"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your Reservation"
          disabled={!isFormValid}
          aria-label="On Click"
        />

      </form>

    </section>
  );
}

export default BookingForm;