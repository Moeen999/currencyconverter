import { useState } from "react";
import { getcurrencyData } from "./API/postCurrencyAPI";
import Footer from "./Footer";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  // const [convertedAmount, setConvertedAmount] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputdata] = useState({
    amount: 0,
    fromCurr: "USD",
    toCurr: "PKR",
  });
  const {
    data: convertedAmount,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["currency"],
    queryFn: () =>
      getcurrencyData(inputData.fromCurr, inputData.toCurr , inputData.amount),
    enabled: false,
  });

  const fromArr = [
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "CAD",
    "AUD",
    "CHF",
    "CNY",
    "INR",
    "PKR",
    "AED",
    "SAR",
    "KWD",
    "BHD",
    "ZAR",
    "NZD",
    "SGD",
    "HKD",
    "THB",
    "MYR",
    "BDT",
    "NPR",
    "TRY",
    "RUB",
    "BRL",
    "MXN",
  ];
  const toArr = [
    "PKR",
    "EUR",
    "GBP",
    "CAD",
    "AUD",
    "CHF",
    "CNY",
    "USD",
    "INR",
    "AED",
    "SAR",
    "NPR",
    "JPY",
    "KWD",
    "ZAR",
    "NZD",
    "SGD",
    "BDT",
    "MYR",
    "HKD",
    "BRL",
    "BHD",
    "TRY",
    "THB",
    "RUB",
    "MXN",
  ];

  const hanldeCurrencyConvert = async () => {
   if(inputData.amount > 0 ) refetch();
    // setIsLoading(true);
    // try {
    //   const { data } = await getcurrencyData(
    //     inputData.fromCurr,
    //     inputData.toCurr,
    //     inputData.amount
    //   );
    //   setConvertedAmount(data.conversion_result);
      // setIsLoading(false);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <section className="currencyConverter">
      <div className="currencyDiv">
        <h1>Currency Converter App</h1>

        <div>
          <label htmlFor="currency_amount">
            Amount:
            <input
              id="currency_amount"
              type="number"
              value={inputData.amount}
              onChange={(e) =>
                setInputdata({ ...inputData, amount: e.target.value })
              }
            />
          </label>
        </div>

        <div className="currSelectors">
          <div>
            {/* FROM */}
            <label>From:</label>
            <select
              value={inputData.fromCurr}
              onChange={(e) =>
                setInputdata({ ...inputData, fromCurr: e.target.value })
              }
            >
              {fromArr.map((currCountry) => (
                <option key={currCountry} value={currCountry}>
                  {currCountry}
                </option>
              ))}
            </select>

            {/* TO */}
            <label>To:</label>
            <select
              value={inputData.toCurr}
              onChange={(e) =>
                setInputdata({ ...inputData, toCurr: e.target.value })
              }
            >
              {toArr.map((currCountry) => (
                <option key={currCountry} value={currCountry}>
                  {currCountry}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          disabled={isLoading || inputData.amount <= 0}
          onClick={hanldeCurrencyConvert}
        >
          {isLoading ? "Converting..." : "Convert"}
        </button>
      </div>
      <hr />
      {convertedAmount && (
        <div>
          <h2>
            {inputData.amount} {inputData.fromCurr} ={" "}
            {convertedAmount.data.conversion_result.toFixed(2)} {inputData.toCurr}
          </h2>
        </div>
      )}
      <Footer />
    </section>
  );
};
export default App;
