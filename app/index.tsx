import * as React from 'react';
import { View } from 'react-native';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

export default function HomeScreen() {
  return (
    <View className="bg-background flex-1 items-center justify-center gap-5 p-6">
      <Card className="w-full max-w-sm rounded-2xl p-6">
        <CardHeader className="items-center">
          <CardTitle variant="h1" className="text-brand-primary pb-2 text-center">
            Hall Pass Updated
          </CardTitle>
          <Text variant="muted" className="text-muted-foreground">
            {new Date().toLocaleTimeString()}
          </Text>
        </CardHeader>

        <CardContent>
          <View className="flex-row justify-center gap-3">
            <View className="items-center">
              <Text className="text-muted-foreground text-sm">An app for</Text>
              <CardTitle variant="h3" className="text-foreground font-semibold">
                Students
              </CardTitle>
            </View>
          </View>
        </CardContent>

        <CardFooter className="flex-col gap-3">
          <View className="flex-row items-center overflow-hidden">
            <Text variant="code">Update me with your own code</Text>
          </View>
        </CardFooter>
      </Card>
    </View>
  );
}
