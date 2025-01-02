let bookings = [];  // In-memory storage for demo purposes

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, contact, guests, date, time } = req.body;

    // Creating a new booking
    const newBooking = {
      id: bookings.length + 1, // Assigning an ID to each booking
      name,
      contact,
      guests,
      date,
      time,
    };

    bookings.push(newBooking); // Add the new booking to our in-memory storage

    return res.status(200).json({ booking: newBooking });
  }

  // If the method is not POST
  res.status(405).json({ error: "Method Not Allowed" });
}
