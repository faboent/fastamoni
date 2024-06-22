import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Auth/authSlice'; // Adjust the path as per your project structure
import waving from '../../assets/images/waving.png'; // Adjust path based on your project
import icon from '../../assets/images/icon.png'; // Adjust path based on your project

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.email);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setUsers(response.data.data); // Assuming response.data.data is the array of users
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const tabs = [
    {
      label: 'Events',
      icon: require('../../assets/images/history.png'), // Adjust path based on your project
      screen: 'Screen1',
    },
    {
      label: 'update profile',
      icon: require('../../assets/images/events.png'), // Adjust path based on your project
      screen: 'Screen2',
    },
    {
      label: 'Logout',
      icon: require('../../assets/images/icon.png'), // Adjust path based on your project
    },
    // Add more tabs as needed
  ];

  const handleTabPress = (index) => {
    setActiveTab(index);
    switch (index) {
      case 0:
        navigate('HomeScreen');
        break;
      case 1:
        navigate('CreateEventsScreen');
        break;
      case 2:
        dispatch(logout());
        break;
      // Add cases for additional tabs
      default:
        break;
    }
  };

  const renderGridItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigate('UserProfile', { userId: item.id })}
    >
      <Text>
        {item.first_name} {item.last_name}
      </Text>
      <Text>Email: {item.email}</Text>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image source={waving} style={styles.waving} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.title}>Welcome</Text>
              <Text style={styles.fullName}>{userEmail || 'Guest'}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 24, color: 'black' }}>Hello ReqRes users!</Text>
        </View>
        <FlatList
          data={users}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderGridItem}
          contentContainerStyle={styles.gridContainer}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.bottomNavItem, activeTab === index && styles.activeNavItem]}
            onPress={() => handleTabPress(index)}
          >
            <Image source={tab.icon} style={styles.tabIcon} />
            <Text style={{ color: 'white' }}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  fullName: {
    fontSize: 18,
  },
  waving: {
    width: 35,
    height: 36,
    marginTop: 10,
  },
  gridContainer: {
    marginTop: 20,
  },
  gridItem: {
    width: Dimensions.get('window').width / 2 - 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#10341C',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  activeNavItem: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: 'white',
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
});

export default HomeScreen;
