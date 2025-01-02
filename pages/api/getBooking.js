let bookings = [];  // In-memory storage for demo purposes

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(bookings); // Return all bookings
  }

  // If the method is not GET
  res.status(405).json({ error: "Method Not Allowed" });
}
