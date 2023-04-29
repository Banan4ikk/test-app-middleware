import { useFonts } from 'expo-font';

export const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    'Manrope-Bold': require('../../assets/fonts/Manrope/Manrope-Bold.ttf'),
    'Manrope-ExtraBold': require('../../assets/fonts/Manrope/Manrope-ExtraBold.ttf'),
    'Manrope-ExtraLight': require('../../assets/fonts/Manrope/Manrope-ExtraLight.ttf'),
    'Manrope-Light': require('../../assets/fonts/Manrope/Manrope-Light.ttf'),
    'Manrope-Medium': require('../../assets/fonts/Manrope/Manrope-Medium.ttf'),
    'Manrope-Regular': require('../../assets/fonts/Manrope/Manrope-Regular.ttf'),
    'Manrope-SemiBold': require('../../assets/fonts/Manrope/Manrope-SemiBold.ttf'),
  });

  return { fontsLoaded };
};
