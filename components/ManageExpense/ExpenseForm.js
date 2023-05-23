import { StyleSheet, Text, TextInput, View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangeHandler = () => {
    console.log("hi");
  };
  return (
    <View style={styles.form}>
     <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
        style={styles.rowInput}
          Label="Amount"
          TextInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          Label="Date"
          style={styles.rowInput}
          TextInputConfig={{
            placeholder: "YYYY-MM-DD",
            keyboardType: "decimal-pad",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>

      <Input
        Label="Description"
        TextInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
      },
      inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      rowInput: {
        flex: 1,
      },
});
