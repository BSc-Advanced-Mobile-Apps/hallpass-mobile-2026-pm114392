import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';

export default function HomeScreen() {
  return (
    <View className="flex flex-1 py-32 bg-background">
      <View className='flex flex-row'>
        <View className='flex w-16 items-center justify-center'>
          <Checkbox checked={false} className='border-2'/>
          </View>
          <View className='border-foreground-transparent border-b py-4'>
      <Text className="text-foreground">Hello, world!</Text>
      <Text className="text-foreground-transparent">Date, May 2019</Text>
      </View>
    
    </View>
    </View>
  );
}