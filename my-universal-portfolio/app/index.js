import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Import your section components here
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
// import Skills from '../components/Skills';
// import Qualification from '../components/Qualification';
// import Portfolio from '../components/Portfolio';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

export default function PortfolioScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* The Header is fixed, so it's outside the ScrollView */}
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Mock placeholder components. You will replace these */}
        {/* with your actual component imports. */}
        <Home />
        <About />
        {/* <Skills /> */}
        {/* <Qualification /> */}
        {/* <Portfolio /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', // A neutral background color
  },
  scrollContainer: {
    // paddingHorizontal is now handled by the container in each section
    // to allow for full-width backgrounds if needed.
  },
});