import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export default function IncomeEntries() {
  const { state, dispatch } = useContext(AppContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  function addIncome(event) {
    event.preventDefault();
    const value = Number(amount);
    if (
      !description.trim() ||
      amount.trim() === "" ||
      !Number.isFinite(value) ||
      value <= 0
    )
      return;
    dispatch({
      type: "ADD_INCOME",
      payload: { description: description.trim(), amount: value },
    });
    setDescription("");
    setAmount("");
  }

  return (
    <section className="bg-green-100 border border-green-500 rounded-md p-4 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Income Entries</h2>
      <form className="mb-4" onSubmit={addIncome}>
        <input
          aria-label="Income description"
          type="text"
          placeholder="Description"
          className="border p-2 w-full mb-2 rounded"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          aria-label="Income amount"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Amount"
          className="border p-2 w-full mb-2 rounded"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          + Add Income
        </button>
      </form>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border p-2">Description</th>
            <th className="border p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {state.incomes.map((income, index) => (
            <tr key={index}>
              <td className="border p-2">{income.description}</td>
              <td className="border p-2">${income.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
