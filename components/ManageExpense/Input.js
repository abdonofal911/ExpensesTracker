import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ Label, TextInputConfig }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.Label}>{Label}</Text>
      <TextInput style={styles.input} {...TextInputConfig} />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  Label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
});
