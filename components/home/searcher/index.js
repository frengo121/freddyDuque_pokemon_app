import { TextInput, View } from "react-native";
import { styles } from "./styles";
import SearchIcon from "../searchIcon";

const Searcher = ({ searchTerm, handleChange }) => {
  return (
    <View style={styles.container}>
      <SearchIcon />
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={searchTerm}
        placeholder="Buscar"
      />
    </View>
  );
};

export default Searcher;
