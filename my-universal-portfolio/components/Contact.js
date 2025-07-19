import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Linking,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { commonStyles, colors } from '../styles/commonStyles';

const ContactInfo = ({ iconName, title, subtitle, url }) => (
  <Pressable onPress={() => url && Linking.openURL(url)}>
    <View style={styles.contactInfo}>
      <FontAwesome5 name={iconName} size={24} color={colors.primary} />
      <View style={styles.contactTextContainer}>
        <Text style={styles.contactTitle}>{title}</Text>
        <Text style={styles.contactSubtitle}>{subtitle}</Text>
      </View>
    </View>
  </Pressable>
);

const FormField = ({ label, ...textInputProps }) => (
  <View style={styles.formContent}>
    <Text style={styles.formLabel}>{label}</Text>
    <TextInput style={styles.formInput} {...textInputProps} />
  </View>
);

const Contact = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // For simplicity, we'll use a mailto link instead of a real form submission
  const handleSendMessage = () => {
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:mdgufranyt25@gmail.com?subject=Contact from Portfolio&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailtoUrl);
  };

  return (
    <View style={commonStyles.section} id="contact">
      <Text style={commonStyles.sectionTitle}>Contact Me</Text>
      <Text style={commonStyles.sectionSubtitle}>Get in touch</Text>

      <View style={[commonStyles.sectionContainer, styles.container, isMobile && styles.mobileContainer]}>
        <View style={styles.leftColumn}>
          <ContactInfo
            iconName="phone-alt"
            title="Contact Me"
            subtitle="+91 8130669169"
            url="tel:8130669169"
          />
          <ContactInfo
            iconName="envelope"
            title="Email"
            subtitle="mdgufranyt25@gmail.com"
            url="mailto:mdgufranyt25@gmail.com"
          />
          <ContactInfo
            iconName="map-marker-alt"
            title="Location"
            subtitle="Delhi, India"
          />
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.formGrid}>
            <FormField label="Name" placeholder="Enter your name" value={name} onChangeText={setName} />
            <FormField label="Email" placeholder="Enter your email" keyboardType="email-address" value={email} onChangeText={setEmail} />
          </View>
          <FormField
            label="Message"
            placeholder="Enter your message"
            multiline
            numberOfLines={7}
            style={styles.textArea}
            value={message}
            onChangeText={setMessage}
          />
          <Pressable style={[commonStyles.button, styles.sendButton]} onPress={handleSendMessage}>
            <Text style={commonStyles.buttonText}>Send Message</Text>
            <FontAwesome5 name="paper-plane" size={20} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 48,
  },
  mobileContainer: {
    flexDirection: 'column',
    gap: 40,
  },
  leftColumn: {
    flex: 1,
    gap: 24,
  },
  rightColumn: {
    flex: 1.5,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactTextContainer: {
    marginLeft: 16,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  contactSubtitle: {
    fontSize: 15,
    color: colors.subtext,
  },
  formGrid: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 24,
  },
  formContent: {
    flex: 1,
  },
  formLabel: {
    fontSize: 15,
    color: colors.subtext,
    marginBottom: 4,
  },
  formInput: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    outlineStyle: Platform.OS === 'web' ? 'none' : undefined,
  },
  textArea: {
    height: 150, // Approximate height for 7 lines
    textAlignVertical: 'top',
    marginBottom: 24,
  },
  sendButton: {
    alignSelf: 'flex-start',
  },
});

export default Contact;