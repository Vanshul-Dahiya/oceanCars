export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "e82dca1c2amshd95ab015a1ec42bp1f1eb2jsn825e7a6b7d54",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
