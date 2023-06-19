import { TouchableOpacity, Image } from "react-native";
//styles
import styles from "./screenheader.style";

export const ScreenHeaderBtn = ({ iconUrl, dimansion, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimansion)}
      />
    </TouchableOpacity>
  );
};
