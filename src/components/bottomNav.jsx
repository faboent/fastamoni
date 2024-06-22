import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = ({ tabs, activeTab, onTabPress }) => {
  const navigation = useNavigation();

  const handleTabPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => onTabPress(index)}
        >
          <Image source={tab.icon} style={[styles.icon, index === activeTab && styles.activeIcon]} />
          <Text style={[styles.label, index === activeTab && styles.activeLabel]}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#10341C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  activeIcon: {
    tintColor: 'white', // Active icon color
  },
  label: {
    fontSize: 12,
    color: '#CBCBCB', // Default label color
  },
  activeLabel: {
    color: 'white', // Active label color
  },
});

export default BottomNavBar;
