import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Linking, useWindowDimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { commonStyles, colors } from '../styles/commonStyles';
import { project1, project2, project3, project4 } from '../constants/assets';
import { FontAwesome5 } from '@expo/vector-icons';

const projects = [
  {
    title: 'DarkSurfer-Extension',
    description: 'A project based on the application of advanced Language Models (LMs) to detect and eliminate dark patterns on websites. It aims to improve user-awareness by exposing devious design practices in real-time.',
    image: project4,
    githubUrl: 'https://github.com/mdgufranyt/DarkSurfer-Extension',
    liveUrl: 'https://github.com/mdgufranyt/DarkSurfer-Extension', // Placeholder
  },
  {
    title: 'Responsive Weather Forecast Website',
    description: 'This project is a weather website that provides live weather updates and forecasts based on your location. Stay informed about current weather conditions, temperature, and more.',
    image: project1,
    githubUrl: 'https://github.com/mdgufranyt/Responsive-Weather-Forecast-Website',
    liveUrl: 'https://mdgufranyt.github.io/Responsive-Weather-Forecast-Website/',
  },
  {
    title: 'Language Translator',
    description: 'This language translator web app is a user-friendly tool built with HTML, CSS, and JavaScript. It leverages Google Translate API to seamlessly translate text between multiple languages.',
    image: project2,
    githubUrl: 'https://github.com/mdgufranyt/Language-Translator',
    liveUrl: 'https://mdgufranyt.github.io/Language-Translator/',
  },
  {
    title: 'Sorting Visualizer',
    description: 'Sorting Visualizer is a Java-based project that allows users to visualize various sorting algorithms in action using a Graphical User Interface (GUI).',
    image: project3,
    githubUrl: 'https://github.com/mdgufranyt/Sorting-Visualizer',
    liveUrl: 'https://github.com/mdgufranyt/Sorting-Visualizer', // Placeholder
  },
];

const Portfolio = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={[commonStyles.section, { backgroundColor: colors.white }]} id="portfolio">
      <Text style={commonStyles.sectionTitle}>Projects</Text>
      <Text style={commonStyles.sectionSubtitle}>Most recent work</Text>

      <View style={[commonStyles.sectionContainer, styles.swiperContainer, isMobile && styles.mobileSwiperContainer]}>
        <Swiper
          style={styles.wrapper}
          showsButtons={!isMobile}
          showsPagination={!isMobile}
          loop={false}
          nextButton={<Text style={styles.swiperButton}>›</Text>}
          prevButton={<Text style={styles.swiperButton}>‹</Text>}
          activeDotColor={colors.primary}
        >
          {projects.map((project, index) => (
            <View key={index} style={[styles.slide, isMobile && styles.mobileSlide]}>
              <Image source={project.image} style={[styles.projectImage, isMobile && styles.mobileProjectImage]} />
              <View style={styles.projectData}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDescription}>{project.description}</Text>
                <View style={styles.buttonContainer}>
                  <Pressable style={[commonStyles.button, styles.projectButton]} onPress={() => Linking.openURL(project.githubUrl)}>
                    <Text style={commonStyles.buttonText}>GitHub</Text>
                    <FontAwesome5 name="external-link-alt" size={16} color="white" />
                  </Pressable>
                  <Pressable style={[commonStyles.button, styles.projectButton]} onPress={() => Linking.openURL(project.liveUrl)}>
                    <Text style={commonStyles.buttonText}>Live</Text>
                    <FontAwesome5 name="external-link-alt" size={16} color="white" />
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    height: 450, // Give the swiper a fixed height
  },
  mobileSwiperContainer: {
    height: 550, // A bit taller for mobile column layout
  },
  wrapper: {},
  slide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  mobileSlide: {
    flexDirection: 'column',
    padding: 16,
  },
  projectImage: {
    width: '40%',
    height: '80%',
    borderRadius: 12,
    marginRight: 24,
  },
  mobileProjectImage: {
    width: '100%',
    height: '40%',
    marginRight: 0,
    marginBottom: 16,
  },
  projectData: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.text,
  },
  projectDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.subtext,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  projectButton: {
    marginRight: 16,
  },
  swiperButton: {
    color: colors.primary,
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default Portfolio;