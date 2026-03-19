import { useState } from 'react'
import { View } from 'react-native';


export interface ITask {
  title: string;
  category: string;
  isChecked: boolean;
}
export default function HomeScreen() {
  // 1. Define useState variables here
const [checked, setChecked] = useState(true);
  // 2. Define your handler function here - 'handleCheckboxChange'
const task: ITask = {
    title: "My test item",
    category: "Test category",
    isChecked: false,
  };

const handleCheckboxChange = () => {
  setChecked((prevChecked) => !prevChecked);
};

  return (
     <View className="bg-background flex-1 items-center justify-center gap-5 p-6">
      
    </View>
  );
}