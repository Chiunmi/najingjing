import React from 'react';
import { View, Text, touchableo} from 'react-native';

const GradeLevels = ({ level, setSelectedLevel }) => {
  const gradeLevels = {
    'Junior Highschool': ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'],
    'Senior Highschool': ['Grade 11', 'Grade 12'],
    'College': ['Course 1', 'Course 2', 'Course 3', 'Course 4'] // Add college courses here
  };

  return (
    <View>
      {Object.keys(gradeLevels).map((levelName) => (
        <TouchableOpacity
          key={levelName}
          style={{ backgroundColor: level === levelName ? '#ccc' : '#fff', padding: 8, margin: 8, borderRadius: 8 }}
          onPress={() => setSelectedLevel(levelName)}
        >
          <Text style={{ color: '#333' }}>{levelName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default GradeLevels;