import React, { useState, useCallback, useContext } from 'react';
import { 
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import FeatherIcon from 'react-native-vector-icons/Feather'; 
import {EventRegister} from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';

export default function Profile({ darkMode, setDarkMode }) {
  const { user } = useUser();
 



  // Update dark mode state when the switch is toggled

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{ uri: user?.imageUrl }}
                style={styles.profileAvatar}
              />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.profileName}>{user?.firstName}</Text>
            <Text style={styles.profileAddress}>
              {user?.address || "No address provided"}
            </Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: "#007afe" }]}>
                <FeatherIcon name="moon" color="#fff" size={20} />
              </View>

              <Text style={styles.rowLabel}>Dark Mode</Text>

              <View style={styles.rowSpacer} />

              <Switch
                value={darkMode}
                onValueChange={(value) => {
                  setDarkMode(value); // Update the local state
                  EventRegister.emit("ChangeTheme", value); // Emit event to notify App component
                }}
              />
            </View>

            {/* Add more preference components here */}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>

            <TouchableOpacity onPress={() => {}} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: "#8e8d91" }]}>
                <FeatherIcon name="flag" color="#fff" size={20} />
              </View>

              <Text style={styles.rowLabel}>Report Bug</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>

            {/* Add more resource components here */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  profile: {
    padding: 24,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
 