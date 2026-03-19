import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex flex-1 py-32 bg-background">
      <Text className="text-foreground">Hello, world!</Text>
      <Text className="text-foreground-transparent">Date, May 2019</Text>
    </View>
  );
}