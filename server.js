const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Default route for root URL
app.get("/", (req, res) => {
  res.send("Welcome, Server is running on Prince System");
});

// POST /bfhl endpoint
app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  const userId = "Prince_83764";
  const email = "pk4758@srmist.edu.in";
  const rollNumber = "RA2111003030236";

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));

  const highestAlphabet =
    alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

  res.json({
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet,
  });
});

// GET /bfhl endpoint
app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
