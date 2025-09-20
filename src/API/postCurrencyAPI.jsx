import axios from "axios";

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/3f4bff15248ac52ad75537e3/",
});

export const getcurrencyData = (fromCurrency, toCurrency, amount) => {
 return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
