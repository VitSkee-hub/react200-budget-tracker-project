import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Summary() {
  const { state } = useContext(AppContext);
  const totalIncome = state.incomes.reduce(
    (total, item) => total + item.amount,
    0,
  );
  const totalExpenses = state.expenses.reduce(
    (total, item) => total + item.amount,
    0,
  );
  const balance = totalIncome - totalExpenses;

  return (
    <section className="bg-blue-100 border border-blue-500 rounded-md p-4 mt-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Summary</h2>
      <p className="mb-2">Total Income: ${totalIncome.toFixed(2)}</p>
      <p className="mb-2">Total Expense: ${totalExpenses.toFixed(2)}</p>
      <p className="font-bold">Left after spending: ${balance.toFixed(2)}</p>
    </section>
  );
}
