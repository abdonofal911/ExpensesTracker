import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-a90d1-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const respense = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = respense.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];
  console.log(response.data);
  for (const key in response.data) {
    const expensesObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expensesObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
