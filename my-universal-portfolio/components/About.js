import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Linking,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { profileImage, resumePdf } from '../constants/assets';

const InfoBox = ({ title, name }) => (
  <View style={styles.infoBox}>
    <Text style={styles.infoTitle}>{title}</Text>
    <Text style={styles.infoName}>{name}</Text>
  </View>
);

const About = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleDownloadCv = () => {
    // On web, this will open the PDF. On native, it will try to open with a document viewer.
    // For a true download on web, you might need a server-side header or a different approach.
    Linking.openURL(resumePdf);
  };

  return (
    <View style={styles.section} id="about">
      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.sectionSubtitle}>My introduction</Text>

      <View style={[styles.container, isMobile && styles.mobileContainer]}>
        <Image
          source={profileImage}
          style={[styles.aboutImage, isMobile && styles.mobileAboutImage]}
        />

        <View style={styles.dataContainer}>
          <Text style={styles.description}>
            I'm a third-year ISE undergraduate, passionate about technology and
            an avid reader. I have a self-motivated and can-do attitude,
            thriving in challenging and dynamic environments. Seeking a
            competitive position to enhance my skills and contribute to a
            professional organization. I'm very much passionate to learn new
            stuff that interests me and can help me to get better.
          </Text>

          <View style={styles.infoContainer}>
            <InfoBox title="7.5+" name={'Aggregate\nCGPA'} />
            <InfoBox title="04+" name="Projects" />
            <InfoBox title="01+" name={'Months\nexperience'} />
          </View>

          <Pressable style={styles.button} onPress={handleDownloadCv}>
            <Text style={styles.buttonText}>Download CV</Text>
            <FontAwesome5 name="download" size={20} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 48,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 968,
    width: '100%',
    paddingHorizontal: 16,
  },
  mobileContainer: {
    flexDirection: 'column',
  },
  aboutImage: {
    width: 250,
    height: 250,
    borderRadius: 12,
    marginRight: 40,
  },
  mobileAboutImage: {
    width: 200,
    height: 200,
    marginRight: 0,
    marginBottom: 24,
  },
  dataContainer: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: Platform.OS === 'web' ? 'left' : 'center',
    marginBottom: 32,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  infoBox: {
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  infoName: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6E61CA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: Platform.OS === 'web' ? 'flex-start' : 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
});

export default About;