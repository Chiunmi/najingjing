import React, { useState } from 'react';
import { View } from 'react-native';
import TimePicker from '../Components/Schedules/TimePicker';

export default function ParentComponent() {
  const [time, setTime] = useState(new Date());

  return (
    <View>
      <TimePicker time={time} onTimeChange={setTime} />
    </View>
  );
}