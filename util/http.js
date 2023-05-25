import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-a90d1-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];
//  console.log(response.data);
  for (const key in response.data) {
    const expensesObj = {
      id: key,
      amount: response.data[key.amount],
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expensesObj);
  }
  return expenses;
}
