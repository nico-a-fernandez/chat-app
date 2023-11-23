const express = require("express");
const cors = require("cors");
require("dotenv").config();

const MyPrivateKey = process.env.PRIVATE_KEY;
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

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
			{ headers: { "private-key": { MyPrivateKey } } }
		);
		return res.status(r.status).json(r.data);
	} catch (error) {}

	return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
