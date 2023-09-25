import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { s } from 'react-native-wind';

const HomeScreen = ({navigation}) => {
  // Simulated data for featured content
  const featuredContent = [
    {
      title: 'Wellness Tips',
      description: 'Explore tips for a healthier work-life balance.',
    },
    {
      title: 'Upcoming Training',
      description: 'Check out our upcoming professional development courses.',
    },
  ];

  // Simulated employee spotlight
  const employeeSpotlight = {
    name: 'John Doe',
    achievement: 'Employee of the Month',
  };

  return (
    <ScrollView style={s`p-4 bg-purple-400`}>
      {/* Welcome Message */}
      <Text style={s`text-2xl font-bold mb-4`}>Welcome to WorkLife Harmony!</Text>

      {/* Featured Content */}
      <Text style={s`text-lg mb-2`}>Featured Content:</Text>
      {featuredContent.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={s`bg-white p-4 rounded shadow-md mb-2`}
        >
          <Text style={s`text-lg font-bold mb-2`}>{item.title}</Text>
          <Text style={s`text-gray-600`}>{item.description}</Text>
        </TouchableOpacity>
      ))}

      {/* Employee Spotlight */}
      <Text style={s`text-lg mb-2`}>Employee Spotlight:</Text>
      <View style={s`bg-white p-4 rounded shadow-md mb-4`}>
        <Text style={s`text-lg font-bold`}>{employeeSpotlight.name}</Text>
        <Text style={s`text-gray-600`}>{employeeSpotlight.achievement}</Text>
      </View>

      {/* Quick Links */}
      <Text style={s`text-lg mb-2`}>Quick Links:</Text>
      <View style={s`flex-row`}>
        <TouchableOpacity
          style={s`bg-blue-500 py-2 px-4 rounded mr-2`}
          onPress={() => navigation.navigate('WellnessScreen')}
        >
          <Text style={s`text-white font-bold`}>Wellness</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s`bg-blue-500 py-2 px-4 rounded`}
          onPress={() => navigation.navigate('TrainingScreen')}
        >
          <Text style={s`text-white font-bold`}>Training</Text>
        </TouchableOpacity>
      </View>

      {/* Motivational Quotes (you can fetch these dynamically) */}
      <Text style={s`text-lg mt-4`}>Motivational Quote of the Day:</Text>
      <Text style={s`text-gray-600 italic mb-4`}>
        "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill
      </Text>

      {/* Notifications (you can display recent notifications here) */}
      <Text style={s`text-lg mb-2`}>Notifications:</Text>
      <View style={s`bg-white p-4 rounded shadow-md`}>
        {/* Display notifications here */}
        <Text style={s`text-gray-600`}>No new notifications.</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
