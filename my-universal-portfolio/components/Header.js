import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const NavLink = ({ href, iconName, label }) => (
  <Pressable style={styles.navLink}>
    <FontAwesome5 name={iconName} size={16} color="#4a4a4a" style={styles.navIcon} />
    <Text>{label}</Text>
  </Pressable>
);

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // On web, we can use a fixed header. On mobile, it's part of the scroll.
  // The `position: 'fixed'` style only works on web.
  const headerStyle = Platform.OS === 'web' ? styles.webHeader : styles.header;

  return (
    <View style={headerStyle}>
      <View style={styles.nav}>
        <Text style={styles.navLogo}>MD Gufran</Text>

        {/* Mobile Menu Toggle */}
        <Pressable style={styles.navToggle} onPress={() => setMenuOpen(!isMenuOpen)}>
          <FontAwesome5 name="th" size={24} color="#333" />
        </Pressable>

        {/* Navigation List - Conditionally render or style for mobile */}
        {/* A full implementation would use a Modal for the mobile menu */}
        <View style={styles.navMenu}>
          <NavLink href="#home" iconName="home" label="Home" />
          <NavLink href="#about" iconName="user" label="About" />
          <NavLink href="#skills" iconName="file-alt" label="Skills" />
          <NavLink href="#qualification" iconName="briefcase" label="Qualification" />
          <NavLink href="#portfolio" iconName="image" label="Projects" />
          <NavLink href="#contact" iconName="comment-alt" label="Contact-Me" />
        </View>

        <View style={styles.navButtons}>
          {/* Placeholder for Theme change button */}
          <FontAwesome5 name="moon" size={20} color="#333" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#f0f2f5', // Same as page background
    zIndex: 100,
  },
  webHeader: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#f0f2f5',
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  nav: {
    maxWidth: 968,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 'auto',
    paddingHorizontal: 16,
  },
  navLogo: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  navMenu: {
    flexDirection: 'row',
    // This would be hidden on mobile and shown in a modal/overlay
    display: Platform.OS === 'web' ? 'flex' : 'none',
  },
  navLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  navIcon: {
    marginRight: 4,
  },
  navToggle: {
    // This would be shown only on mobile
    display: Platform.OS === 'web' ? 'none' : 'flex',
  },
  navButtons: {},
});

export default Header;