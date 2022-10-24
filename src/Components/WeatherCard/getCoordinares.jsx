import axios from "axios";

const listAuthors = async (city) => {
  let cityCoordinates = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid={071b215412d0eab5fef2a63c265b5f06}`
  );
  return cityCoordinates;
};
