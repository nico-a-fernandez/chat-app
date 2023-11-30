const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const MyPrivateKey = process.env.PRIVATE_KEY;
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.use(
	cors({
		origin: "https://chat-app-sigma-puce.vercel.app/",
	})
);

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

app.listen(3001);
