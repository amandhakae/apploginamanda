import { Provider } from "react-native-paper";
import { themeDark, themeLight } from "./src/config/theme";
import { useColorScheme } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const theme = isDarkMode ? themeDark : themeLight;

  return (
    <Provider theme={theme}>
      {/* aqui usamos o provider do RNP */}
      <AppNavigator />
    </Provider>
  );
}
