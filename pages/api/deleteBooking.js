let bookings = [];  // In-memory storage for demo purposes

export default function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query; // Get ID from query parameter

    // Find and remove the booking
    const bookingIndex = bookings.findIndex((booking) => booking.id === parseInt(id));

    if (bookingIndex !== -1) {
      bookings.splice(bookingIndex, 1); // Remove booking from the array
      return res.status(200).json({ message: "Booking deleted successfully" });
    }

    // If booking not found
    return res.status(404).json({ error: "Booking not found" });
  }

  // If the method is not DELETE
  res.status(405).json({ error: "Method Not Allowed" });
}
