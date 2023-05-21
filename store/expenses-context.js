import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 29.35,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "a Book",
    amount: 4.25,
    date: new Date("2021-6-19"),
  },
  {
    id: "e3",
    description: "a T-Shirt",
    amount: 14.95,
    date: new Date("2021-2-18"),
  },
  {
    id: "e4",
    description: "a Coffe",
    amount: 0.55,
    date: new Date("2021-1-17"),
  },
  {
    id: "e5",
    description: "a Book",
    amount: 3.55,
    date: new Date("2021-3-15"),
  },
  {
    id: "e6",
    description: "a pair of shoes",
    amount: 29.35,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "a Book",
    amount: 4.25,
    date: new Date("2023-5-19"),
  },
  {
    id: "e8",
    description: "a T-Shirt",
    amount: 14.95,
    date: new Date("2023-5-18"),
  },
  {
    id: "e9",
    description: "a T-Shirt",
    amount: 14.95,
    date: new Date("2023-5-20"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: ({ description, amount, date }, id) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex((expense) => {
        expense.id === action.payload.id;
      });
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense({ expenseData }) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense({ id }) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense({ expenseData, id }) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;