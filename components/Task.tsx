import * as React from "react";
import { TouchableOpacity, View } from "react-native";

import TaskDialogue from "@/components/TaskDialogue";
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,  // Added: Required wrapper for content
  DialogTrigger,
} from '@/components/ui/dialog';

import { ITask } from '@/app';
import { Button } from "./ui/button";

export interface TaskProps {
  task: ITask;
  onUpdate?: (task: ITask) => void;
  onDelete?: (id: number) => void;  // Added: Optional delete handler
}

function Task({ task: initialTask, onUpdate, onDelete }: TaskProps) {  // Added type
  const [task, setTask] = React.useState(initialTask);
  const [showDialog, setShowDialog] = React.useState(false);

  const handleSetChecked = () => {
     const updatedTask = { ...task, isChecked: !task.isChecked };
    setTask(updatedTask);
    if (onUpdate) {
      onUpdate(updatedTask);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(task.id);
    }
  }

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>  {/* Controlled Dialog */}
      <DialogTrigger asChild>
        <TouchableOpacity className="flex w-full flex-row" delayLongPress={500}>
          <View className="flex h-full w-24 px-8 py-5">
            <Checkbox
              testID="checkbox"
              className="border-foreground checked:bg-foreground"
              checked={task.isChecked}  // Fixed: Use task.isChecked
              onCheckedChange={handleSetChecked}  // Fixed: Use handler (receives checked value, but toggle logic works)
            />
          </View>
          <View className="border-foreground-transparent flex h-full flex-1 gap-1 border-b py-4">
            <Text className="text-foreground text-xl">{task.title}</Text>  {/* Fixed: task.title */}
            <Text className="text-foreground text-xl">{task.category}</Text>  {/* Fixed: task.category */}
            <Text className="text-foreground text-xl">{task.date}</Text>
          </View>

          <Button onPress={handleDelete}>
            <Text>Delete</Text>
          </Button>
        </TouchableOpacity>
      </DialogTrigger>

      
        <TaskDialogue
          task={task}
          setTask={setTask}
          setShowDialog={setShowDialog}
          showDialog={showDialog}
          onUpdate={onUpdate}  // Added: Pass onUpdate to TaskDialogue for saving edits
        />
    </Dialog>
  );
}

export { Task };