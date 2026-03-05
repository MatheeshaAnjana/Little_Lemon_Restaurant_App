import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch }) {

  return (
    <main>

      <h1>Reserve a Table</h1>
      <p>Please fill the form to reserve your table.</p>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />

    </main>
  );
}

export default BookingPage;