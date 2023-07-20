import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack initialRouteName="/">
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default Layout;
