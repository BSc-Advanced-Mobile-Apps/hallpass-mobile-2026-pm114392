import { ITask } from "@/app/index";
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { View } from "react-native";

interface TaskProps {
  task: ITask;
}
export default function Task({ task } : TaskProps) {
  return (
    <View className="flex w-full flex-row">
      <View className="flex h-full w-24 px-8 py-5">
        <Checkbox
          className="border-foreground checked:bg-foreground"
          checked={task.isChecked}
          onCheckedChange={setChecked}
        />
      </View>
      <View className="border-foreground-transparent flex h-full flex-1 gap-1 border-b py-4">
        <Text className="text-foreground text-xl">{Title}</Text>
        <Text className="text-foreground-transparent text-xl">Test category</Text>
      </View>
    </View>
  );
}