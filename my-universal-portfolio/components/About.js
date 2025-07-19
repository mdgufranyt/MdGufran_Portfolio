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
import { commonStyles, colors } from '../styles/commonStyles';

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
    <View style={commonStyles.section} id="about">
      <Text style={commonStyles.sectionTitle}>About Me</Text>
      <Text style={commonStyles.sectionSubtitle}>My introduction</Text>

      <View style={[commonStyles.sectionContainer, styles.container, isMobile && styles.mobileContainer]}>
        <Image
          source={profileImage}
          style={[styles.aboutImage, isMobile && styles.mobileAboutImage]}
        />

        <View style={styles.dataContainer}>
          <Text style={styles.descriptionText}>
            I'm a third-year ISE undergraduate, passionate about technology and
            an avid reader. I have a self-motivated and can-do attitude,
            thriving in challenging and dynamic environments. Seeking a
            competitive position to enhance my skills and contribute to a
            professional organization. I'm very much passionate to learn new
            stuff that interests me and can help me to get better.
          </Text>

          <View style={styles.infoContainer}>
            <InfoBox title="7.5+" name={'Aggregate CGPA'} />
            <InfoBox title="04+" name="Projects" />
            <InfoBox title="01+" name={'Months experience'} />
          </View>

          <Pressable style={[commonStyles.button, styles.button]} onPress={handleDownloadCv}>
            <Text style={commonStyles.buttonText}>Download CV</Text>
            <FontAwesome5 name="download" size={20} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
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
    color: colors.text,
  },
  infoName: {
    fontSize: 14,
    color: colors.subtext,
    textAlign: 'center',
  },
  button: {
    alignSelf: Platform.OS === 'web' ? 'flex-start' : 'center',
  },
});

export default About;