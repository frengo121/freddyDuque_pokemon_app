import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack initialRouteName="/">
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default Layout;
