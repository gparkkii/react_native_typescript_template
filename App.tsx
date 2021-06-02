import Test from 'components/Test';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return isLoading ? (
    <View>{/* <HomeScreen /> */}</View>
  ) : (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View>
        {/* <LoginScreen /> */}
        <Test />
      </View>
    </SafeAreaView>
  );
};

export default App;
