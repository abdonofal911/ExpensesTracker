import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ Label, TextInputConfig }) => {
  const inputStyles = [styles.input];

  if (TextInputConfig && TextInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.Label}>{Label}</Text>
      <TextInput style={inputStyles} {...TextInputConfig} />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
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
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
