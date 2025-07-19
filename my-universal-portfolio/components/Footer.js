import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking, useWindowDimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../styles/commonStyles';

const Footer = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.footer}>
      <View style={[styles.footerContainer, isMobile && styles.mobileFooterContainer]}>
        <View style={isMobile && { alignItems: 'center' }}>
          <Text style={styles.footerTitle}>MD Gufran</Text>
          <Text style={styles.footerSubtitle}>Computer Science Engineering Student</Text>
        </View>

        <View style={[styles.footerLinks, isMobile && styles.mobileFooterLinks]}>
          <Pressable><Text style={styles.footerLink}>Portfolio</Text></Pressable>
          <Pressable><Text style={styles.footerLink}>Contact</Text></Pressable>
        </View>

        <View style={styles.footerSocials}>
          <Pressable onPress={() => Linking.openURL('https://www.instagram.com/mdgufranyt/')}>
            <FontAwesome5 name="instagram" size={24} color={colors.white} style={styles.footerSocial} />
          </Pressable>
          <Pressable onPress={() => Linking.openURL('https://twitter.com/mdgufranyt/')}>
            <FontAwesome5 name="twitter" size={24} color={colors.white} style={styles.footerSocial} />
          </Pressable>
        </View>
      </View>

      <Text style={styles.footerCopy}>&#169; 2025 MD Gufran. All Right Reserved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.primary,
    paddingVertical: 32,
  },
  footerContainer: {
    maxWidth: 968,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  mobileFooterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
  },
  footerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
  },
  footerSubtitle: {
    fontSize: 15,
    color: colors.white,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 24,
  },
  mobileFooterLinks: {
    order: -1, // Move links to the top on mobile
  },
  footerLink: {
    color: colors.white,
    fontSize: 16,
  },
  footerSocials: {
    flexDirection: 'row',
    gap: 20,
  },
  footerSocial: {},
  footerCopy: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Footer;