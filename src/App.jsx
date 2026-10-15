import { AppProvider } from "./context/AppContext";
import ExpenseEntries from "./components/ExpenseEntries";
import IncomeEntries from "./components/IncomeEntries";
import Summary from "./components/Summary";

export default function App() {
  return (
    <AppProvider>
      <main className="min-h-screen bg-gray-100 flex flex-col items-center px-4 pb-8">
        <h1 className="text-4xl font-bold my-6">Budget Tracker</h1>
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
          <ExpenseEntries />
          <IncomeEntries />
        </div>
        <Summary />
      </main>
    </AppProvider>
  );
}
