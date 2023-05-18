import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

const Dummy_Expenses = [
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
  }, {
    id: "e6",
    description: "a pair of shoes",
    amount: 29.35,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "a Book",
    amount: 4.25,
    date: new Date("2021-6-19"),
  },
  {
    id: "e8",
    description: "a T-Shirt",
    amount: 14.95,
    date: new Date("2021-2-18"),
  },
];
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={Dummy_Expenses} />
      <ExpensesList expenses={Dummy_Expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    paddingHorizontal:24 , paddingTop : 24 , paddingBottom : 0
  },
});
