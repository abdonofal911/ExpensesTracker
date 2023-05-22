import { Text, TextInput, View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangeHandler = () => {
    console.log("hi");
  };
  return (
    <View>
      <Input
        Label="Amount"
        TextInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        Label="Date"
        TextInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        Label="Description"
        TextInputConfig={{
          multiline : true, 
        }}
      />
    </View>
  );
};

export default ExpenseForm;
