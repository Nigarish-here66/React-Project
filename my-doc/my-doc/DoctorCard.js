import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function DoctorCard({ name, specialty, rating, avatar }) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Image source={avatar} style={styles.avatarImage} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.specialty}>{specialty}</Text>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingOval}>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.rating}>{rating.toFixed(1)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    width: '45%',
    marginBottom: 20,
    alignItems: 'center',
    elevation: 4,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3A3C',
    marginBottom: 5,
    textAlign: 'center',
  },
  specialty: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 10,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingOval: {
    backgroundColor: '#5A81F7',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    fontSize: 16,
    color: '#FFD700',
  },
  rating: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 5,
  },
});

export default DoctorCard;
