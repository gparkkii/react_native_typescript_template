import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native';
import Test from 'components/Test';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return isLoading ? (
    <View>{/* Loading Screen */}</View>
  ) : (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View>
        <Test />
      </View>
    </SafeAreaView>
  );
};

export default App;
