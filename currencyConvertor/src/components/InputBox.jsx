import React, { useId } from "react";

const InputBox = ({
  label,
  currencyOptions = [],
  amount,
  onAmountChange,
  selectCurrency,
  onCurrencyChange,
}) => {
  const amountInputId = useId();
  return (
    <>
      <div className="space-y-4 mt-5 border border-gray-600 rounded-lg p-4">
        <div className="flex items-center">
          <p className="text-gray-600">Currency Type</p>
          <select
            className="w-full p-3 border rounded-md"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center-2">
          <label htmlFor={amountInputId} className="text-gray-600 mr-2">
            {label}
          </label>
          <div className="relative w-full">
            <input
              type="number"
              id={amountInputId}
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-400"
              value={amount}
              onChange={(e) =>
                onAmountChange && onAmountChange(Number(e.target.value))
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBox;
