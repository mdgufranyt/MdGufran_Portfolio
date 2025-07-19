import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking, useWindowDimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeBlob from './HomeBlob';
import { profileImage } from '../constants/assets';

const SocialLink = ({ url, iconName }) => (
  <Pressable onPress={() => Linking.openURL(url)}>
    <FontAwesome5 name={iconName} size={24} color="#4a4a4a" style={styles.socialIcon} />
  </Pressable>
);

const Home = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const desktopContent = (
    <>
      <View style={styles.socialBar}>
        <SocialLink url="https://www.linkedin.com/in/mdgufranyt/" iconName="linkedin" />
        <SocialLink url="https://github.com/mdgufranyt" iconName="github" />
        <SocialLink url="https://leetcode.com/mdgufranyt/" iconName="code-branch" />
        <SocialLink url="https://www.hackerrank.com/mdgufran" iconName="brackets-curly" />
        <SocialLink url="https://instagram.com/mdgufranyt/" iconName="instagram" />
        <SocialLink url="https://twitter.com/mdgufranyt/" iconName="twitter" />
      </View>

      <View style={styles.blobContainer}>
        <HomeBlob imageUrl={profileImage} />
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.title}>Hi, I'm MD Gufran</Text>
        <Text style={styles.subtitle}>Computer Science Engineering Student</Text>
        <Text style={styles.description}>
          Third-year undergraduate engineering student at{' '}
          <Text style={{ fontWeight: 'bold' }}>Dronacharya Group of Institution</Text>, Greater Noida.
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Contact me</Text>
          <FontAwesome5 name="comment-alt" size={20} color="white" />
        </Pressable>
      </View>
    </>
  );

  const mobileContent = (
    <>
      <View style={[styles.dataContainer, styles.mobileDataContainer]}>
        <Text style={[styles.title, styles.mobileTitle]}>Hi, I'm MD Gufran</Text>
        <Text style={styles.subtitle}>Computer Science Engineering Student</Text>
      </View>
      <View style={styles.blobContainer}>
        <HomeBlob imageUrl={profileImage} />
      </View>
      <Text style={[styles.description, styles.mobileDescription]}>
        Third-year undergraduate engineering student at{' '}
        <Text style={{ fontWeight: 'bold' }}>Dronacharya Group of Institution</Text>, Greater Noida.
      </Text>
      <Pressable style={[styles.button, styles.mobileButton]}>
        <Text style={styles.buttonText}>Contact me</Text>
        <FontAwesome5 name="comment-alt" size={20} color="white" />
      </Pressable>
      <View style={[styles.socialBar, styles.mobileSocialBar]}>
        <SocialLink url="https://www.linkedin.com/in/mdgufranyt/" iconName="linkedin" />
        <SocialLink url="https://github.com/mdgufranyt" iconName="github" />
        <SocialLink url="https://leetcode.com/mdgufranyt/" iconName="code-branch" />
        <SocialLink url="https://www.hackerrank.com/mdgufran" iconName="brackets-curly" />
        <SocialLink url="https://instagram.com/mdgufranyt/" iconName="instagram" />
        <SocialLink url="https://twitter.com/mdgufranyt/" iconName="twitter" />
      </View>
    </>
  );

  return (
    <View style={styles.section} id="home">
      <View style={[styles.container, isMobile && styles.mobileContainer]}>{isMobile ? mobileContent : desktopContent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  container: {
    // On web, you can set a max-width for a centered layout
    maxWidth: 968,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mobileContainer: {
    flexDirection: 'column',
    paddingTop: 40,
  },
  socialBar: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 40,
  },
  mobileSocialBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 0,
    marginTop: 24,
  },
  socialIcon: {
    marginVertical: 10,
    marginHorizontal: 12,
  },
  blobContainer: {
    // Container for the SVG
  },
  dataContainer: {
    flex: 1, // Take up remaining space
    marginLeft: 40,
  },
  mobileDataContainer: {
    marginLeft: 0,
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mobileTitle: {
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 24,
  },
  mobileDescription: {
    textAlign: 'center',
    marginTop: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6E61CA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start', // Don't stretch to full width
  },
  mobileButton: {
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
});

export default Home;