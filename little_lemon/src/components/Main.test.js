import { initializeTimes, updateTimes } from "./Main";

describe("Booking API functions", () => {

  beforeEach(() => {
    // Mock the fetchAPI function
    window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
  });

  test("initializeTimes returns available booking times", () => {
    const result = initializeTimes();

    expect(result).toEqual(["17:00", "18:00", "19:00"]);
  });

  test("updateTimes returns updated times based on selected date", () => {
    const state = [];
    const action = {
      type: "UPDATE_TIMES",
      date: "2026-03-05"
    };

    const result = updateTimes(state, action);

    expect(result).toEqual(["17:00", "18:00", "19:00"]);
  });

});