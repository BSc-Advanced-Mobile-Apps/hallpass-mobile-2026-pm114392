import * as React from 'react';
import { View } from 'react-native';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

export default function SettingsScreen() {
  return (
    <View className="bg-background flex-1 items-center justify-center">
      <card className="mx-4">
      <Text variant="h1" className="font-semibold">
        Update Uno
      </Text>
      </card>
      <card className="mx-4">
      <Text variant="h1" className="font-semibold">
        Update Duos
      </Text>
      </card>
    </View>
  );
}
