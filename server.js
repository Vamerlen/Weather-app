require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const PORT = 5000;
const API_KEY = process.env.OPENWEATHER_API_KEY;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
    session({
        secret: "weather_secret",
        resave: false,
        saveUninitialized: true,
    })
);

app.get("/", (req, res) => {
    res.render("index", { weather: req.session.weather || null, error: null });
});

app.post("/", async (req, res) => {
    const city = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    try {
        const response = await axios.get(url);
        const forecast = response.data.list[8]; // 24-hour forecast (8th 3-hour interval)
        const weather = {
            city: response.data.city.name,
            temp: forecast.main.temp,
            feels_like: forecast.main.feels_like,
            rain: forecast.weather[0].main === "Rain" ? "Yes" : "No",
            description: forecast.weather[0].description,
        };
        req.session.weather = weather; // Save the weather data in session
        res.render("index", { weather, error: null });
    } catch (error) {
        res.render("index", { weather: null, error: "City not found!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
