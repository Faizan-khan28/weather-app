import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_Key = "d87b79daa8037847eed15b798c3a30e4";

export default function WeatherApp () {

  let [city, setCity] = useState("");
  let [weatherinfo, setweatherInfo] = useState({
    name: "City Name",
    temp: 0,
    Humidity: 0,
    mintem: 0,
    maxtem: 0,
    feelslike: 0,
    weather: "Weather type"
  });

  let weatherData = async() => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse)

    let result = {
      name: jsonResponse.name,
      temp: jsonResponse.main.temp,
      Humidity: jsonResponse.main.humidity,
      mintem: jsonResponse.main.temp_min,
      maxtem: jsonResponse.main.temp_max,
      feelslike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    }
    console.log(result)
    return result;
  }

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let submit = async (event) => {
    event.preventDefault();
    setCity("")
    console.log(city);
    let newinfo = await weatherData();
    updateInfo(newinfo);

  }

  let updateInfo = (newinfo) => {
    setweatherInfo(newinfo);
    console.log(newinfo)
  }

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-[#cfe8fc] ">
      <Container className="flex justify-center">
        <Box
          sx={{ bgcolor: "#cfe8fc" }}
          className="flex items-center gap-6 flex-col"
        >
          <h1 className="font-medium text-[40px]">Weather App By Faizan</h1>
          <form onSubmit={submit}>
            <div>
              <TextField
                style={{ width: "300px" }}
                label="Enter City Name"
                variant="outlined"
                required
                value={city}
                onChange={handleChange}
              />
            </div>
            <div className="text-center mt-5">
              <Button
                type="submit"
                style={{ background: "black", width: "150px" }}
                variant="contained"
              >
                Search
              </Button>
            </div>
          </form>

          <div className="text-[18px] font-medium">
            <h1 className="text-[40px] text-center">City: {weatherinfo.name}</h1>
            <p>temp: {weatherinfo.temp}&deg;C</p>
            <p>Humidity: {weatherinfo.Humidity}&deg;C</p>
            <p>Min-Tem: {weatherinfo.mintem}&deg;C</p>
            <p>Max-Tem: {weatherinfo.maxtem}&deg;C</p>
            <p>Feels Like: {weatherinfo.feelslike}&deg;C</p>
            <p>Weather: {weatherinfo.weather}</p>
          </div>
        </Box>
      </Container>
    </div>
  );
}
