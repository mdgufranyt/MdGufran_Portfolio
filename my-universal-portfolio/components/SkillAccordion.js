import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../styles/commonStyles';

// This is required to enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const SkillAccordion = ({ title, iconName, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    // Animate the layout change.
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleOpen} style={styles.header}>
        <FontAwesome5 name={iconName} size={20} color={colors.primary} style={styles.icon} />
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <FontAwesome5
          name={isOpen ? 'angle-up' : 'angle-down'}
          size={20}
          color={colors.primary}
          style={styles.arrow}
        />
      </Pressable>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text,
  },
  arrow: {
    marginLeft: 'auto',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingLeft: 54, // Align with text in header
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default SkillAccordion;