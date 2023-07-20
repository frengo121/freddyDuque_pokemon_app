import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const Paginator = ({ handlePage, page, isLastPage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, page === 1 ? styles.buttonDisabled : null]}
        onPress={() => handlePage("back")}
        disabled={page === 1}
      >
        <Text style={styles.text}> {"<"}</Text>
        <Text style={styles.text}> Atras</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isLastPage ? styles.buttonDisabled : null]}
        disabled={isLastPage}
        onPress={() => handlePage("next")}
      >
        <Text style={styles.text}> Siguiente</Text>
        <Text style={styles.text}> {">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Paginator;
