import React from 'react';
import { TextInput, Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import DoctorCard from './DoctorCard';

function App() {
  const doctors = [
    { name: 'Dr. John Smith', specialty: 'Dermatologist', rating: 4.9, avatar: require('./assets/gamer.png') },
    { name: 'Dr. Anna Dinn', specialty: 'Psychologist', rating: 4.9, avatar: require('./assets/girl.png') },
    { name: 'Dr. Angela Rayez', specialty: 'Therapist', rating: 4.8, avatar: require('./assets/woman.png') },
    { name: 'Dr. Chris Bronte', specialty: 'Dentist', rating: 5.0, avatar: require('./assets/man.png') }
  ];
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <Image 
          source={require('./assets/Search.png')}
          style={styles.searchIcon} 
        />
        <TextInput
          placeholder="Search conditions, doctors..."
          style={styles.searchBar}
          placeholderTextColor="#C7C7CD"
        />
      </View>
      <Text style={styles.title}>Let's find your doctor</Text>
      <View style={styles.doctorGrid}>
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            rating={doctor.rating}
            avatar={doctor.avatar}  // Pass the avatar here
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 150,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8FC', // Light background color
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A3A3C',
    marginBottom: 20,
    textAlign: 'left',  // Aligns text to the left
    marginTop: 5, // Add extra space for mobile screen header
    alignSelf: 'flex-start',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',  // Set background color to white
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,  // Slight shadow for better UI appearance
  },
  searchIcon: {
    width: 17,
    height: 17,
    tintColor: '#888',  // Use tintColor to apply the same color as text
    marginRight: 5,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#888',  // Text color set to gray
    outline: 'none',
    backgroundColor: 'transparent',
  },
  doctorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default App;
