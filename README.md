# 🌦️ **Weather Forecast App**

This is a web application that uses the OpenWeather API to tell users if it will rain tomorrow in their chosen location. The app features a sleek, responsive design, provides additional weather details, and securely handles API keys using environment variables.

---

## 🚀 **Features**

- **Real-time Weather Forecast**: Get tomorrow's forecast, including temperature, rain prediction, and weather descriptions.  
- **Secure API Integration**: API key securely stored using `.env` file.  
- **Responsive Design**: Optimized for both desktop and mobile users.  
- **Session Storage**: Remembers the last searched location during the session.  
- **"Feels Like" Temperature**: Provides additional weather insights.  

---

## 📂 **File Structure**

```plaintext
weather-app/
├── views/
│   ├── index.ejs          # EJS template for the UI
├── public/
│   ├── styles.css         # CSS for styling
├── .env                   # Environment file for API key
├── server.js              # Main server logic
├── package.json           # Project configuration
```

---

## 🛠️ **Installation & Setup**

1. **Clone this repository**:  
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**:  
   ```bash
   npm install
   ```

3. **Create a `.env` file**:  
   Add your OpenWeather API key:  
   ```plaintext
   OPENWEATHER_API_KEY=your_openweather_api_key
   ```

4. **Start the development server**:  
   ```bash
   npx nodemon server.js
   ```

5. **Open your browser**:  
   Navigate to:  
   ```
   http://localhost:3000
   ```

---

## 🖥️ **Technologies Used**

- **Node.js**: JavaScript runtime for building server-side applications.  
- **Express.js**: Fast and minimalist web framework for Node.js.  
- **EJS**: Embedded JavaScript templates for dynamic UI rendering.  
- **Axios**: Promise-based HTTP client for API requests.  
- **CSS**: Custom styles for a professional and responsive design.  

---

## 📚 **Usage Instructions**

1. **Enter a City**:  
   Input the name of any city in the text box.  

2. **Check Weather**:  
   Click the **"Check Weather"** button to fetch the forecast.  

3. **View Results**:  
   The app will display:  
   - Temperature  
   - Feels Like temperature  
   - Rain prediction  
   - Weather description  

---

## ⚠️ **Error Handling**

- If the city is not found, an error message will be displayed:  
  *"City not found!"*.  
- Ensure the API key is valid and the `.env` file is correctly configured.  

---

## 📜 **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  

---

## 🌟 **Acknowledgements**

- [OpenWeather API](https://openweathermap.org/api)  
- [Express.js](https://expressjs.com/)  
- [Axios Documentation](https://axios-http.com/)  

---

## 💡 **Future Enhancements**

- Add weather icons based on the forecast.  
- Support multiple languages for international users.  
- Implement a dark mode for the interface.  

---
