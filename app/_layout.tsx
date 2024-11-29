import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';
import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as DefaultTheme,
  ThemeProvider,
} from 'react-native-paper';
import Colors from '@/constants/Colors';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts(require('../assets/fonts/SpaceMono-Regular.ttf'));

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()
  const paperTheme =
    colorScheme === 'dark'
      ? { ...DarkTheme, colors: Colors.dark }
      : { ...DefaultTheme, colors: Colors.light };

  return (
    <ThemeProvider theme={paperTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
