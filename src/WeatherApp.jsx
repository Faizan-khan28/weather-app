import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function () {

  let [city, setCity] = useState("")

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let submit = (event) => {
    event.preventDefault();
    setCity("")
    console.log(city);
  }

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] ">
      <Container className="flex justify-center">
        <Box
          sx={{ bgcolor: "#cfe8fc", height: "500px", width: "400px" }}
          className="flex items-center gap-9 rounded-md  flex-col"
        >
          <h1 className="font-medium text-[40px]">Weather App</h1>
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
            <h1 className="text-[40px] text-center">Delhi</h1>
            <p>temp:</p>
            <p>Humidity:</p>
            <p>Min-Tem:</p>
            <p>Max-Tem:</p>
            <p>Feels Like cold</p>
          </div>
        </Box>
      </Container>
    </div>
  );
}
