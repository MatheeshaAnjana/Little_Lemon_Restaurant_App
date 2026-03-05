import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const availableTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm Validation Tests", () => {

  test("HTML5 validation attributes are applied", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(dateInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });


  test("submit button is disabled when form is invalid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitButton = screen.getByDisplayValue(/make your reservation/i);

    expect(submitButton).toBeDisabled();
  });


  test("submit button is enabled when form is valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByDisplayValue(/make your reservation/i);

    fireEvent.change(dateInput, { target: { value: "2026-03-10" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });

    expect(submitButton).not.toBeDisabled();
  });


  test("form submits when valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByDisplayValue(/make your reservation/i);

    fireEvent.change(dateInput, { target: { value: "2026-03-10" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });

    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalled();
  });

});