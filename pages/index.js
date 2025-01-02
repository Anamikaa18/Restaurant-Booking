import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Home() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("12:00");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/createBooking", {
        name,
        contact,
        date,
        time,
        guests,
      });
      setStatus(`Booking Confirmed!`);
    } catch (error) {
      setStatus("Failed to make the reservation.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-lg sm:max-w-md lg:max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Book a Table</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Contact Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium">Contact Number</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Date Picker */}
          <div className="flex flex-col">
            <label className="text-sm font-medium">Date</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              className="mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Time Select */}
          <div className="flex flex-col">
            <label className="text-sm font-medium">Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-md"
            >
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-sm font-medium">Number of Guests</label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-md"
              min="1"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Confirm Booking
            </button>
          </div>
        </form>

        {status && (
          <p className="mt-4 text-center text-lg font-semibold text-green-500">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
