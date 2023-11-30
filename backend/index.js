const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const MyPrivateKey = process.env.PRIVATE_KEY;
const app = express();

// Use a single cors middleware with multiple origin configurations
app.use(
	cors({
		origin: [
			"http://localhost:3001",
			"https://chat-app-sigma-puce.vercel.app/",
		],
		credentials: true,
	})
);

app.use(express.json());

app.post("/authenticate", async (req, res) => {
	const { username } = req.body;

	try {
		const r = await axios.put(
			"https://api.chatengine.io/users/",
			{
				username: username,
				secret: username,
				first_name: username,
			},
			{ headers: { "private-key": MyPrivateKey } }
		);
		return res.status(r.status).json(r.data);
	} catch (e) {
		return res.status(e.response.status).json(e.response.data);
	}
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
