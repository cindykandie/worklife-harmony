import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { s } from 'react-native-wind';

const WellnessScreen = () => {
  // Sample wellness tips (you can fetch this data dynamically)
  const wellnessTips = [
    {
      title: 'Stress Management',
      description: 'Discover effective ways to manage workplace stress.',
    },
    {
      title: 'Mindfulness Meditation',
      description: 'Practice mindfulness meditation techniques for mental well-being.',
    },
    // Add more wellness tips as needed
  ];

  return (
    <ScrollView style={s`p-4 bg-purple-400`}>
      <Text style={s`text-2xl font-bold mb-4`}>Wellness</Text>

      {wellnessTips.map((item, index) => (
        <View key={index} style={s`bg-white p-4 rounded shadow-md mb-2`}>
          <Text style={s`text-lg font-bold mb-2`}>{item.title}</Text>
          <Text style={s`text-gray-600`}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default WellnessScreen;
