import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import iconSearch from '../images/icon-search.png';
import iconThreeDots from '../images/icon-3-dots.png';

export const ChannelHeader = ({navigation, channel}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Text style={styles.hamburgerIcon}>☰</Text>
        </TouchableOpacity>
        {channel && channel.data && channel.data.name ? (
          <Text style={styles.channelTitle}>
            #{channel.data.name.toLowerCase().replace(' ', '_')}
          </Text>
        ) : (
          <Text style={styles.channelTitle}>#channel_name</Text>
        )}
      </View>
      <View style={styles.rightContent}>
        <TouchableOpacity style={styles.searchIconContainer}>
          <Image source={iconSearch} style={styles.searchIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIconContainer}>
          <Image source={iconThreeDots} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  leftContent: {
    flexDirection: 'row',
  },
  hamburgerIcon: {
    fontSize: 27,
  },
  channelTitle: {
    color: 'black',
    marginLeft: 10,
    fontWeight: '900',
    fontSize: 17,
    fontFamily: 'Lato-Regular',
  },
  rightContent: {
    flexDirection: 'row',
    marginRight: 10,
  },
  searchIconContainer: {marginRight: 15, alignSelf: 'center'},
  searchIcon: {
    height: 18, width: 18,
  },
  menuIcon: {
    height: 18, width: 18
  },
  menuIconContainer: {alignSelf: 'center'},
});