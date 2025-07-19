import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import SkillAccordion from './SkillAccordion';
import { commonStyles, colors } from '../styles/commonStyles';

const SkillItem = ({ name }) => (
  <View style={styles.skillItem}>
    <Text style={styles.skillName}>{name}</Text>
  </View>
);

const Skills = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const programmingSkills = (
    <SkillAccordion title="Programming Languages" iconName="code" defaultOpen>
      <SkillItem name="C" />
      <SkillItem name="Java" />
      <SkillItem name="JavaScript" />
      <SkillItem name="HTML/CSS" />
      <SkillItem name="SQL" />
    </SkillAccordion>
  );

  const librarySkills = (
    <SkillAccordion title="Libraries/Frameworks" iconName="cubes">
      <SkillItem name="React.js" />
      <SkillItem name="Express.js" />
      <SkillItem name="React Native" />
    </SkillAccordion>
  );

  const toolsSkills = (
    <SkillAccordion title="Tools/Platforms" iconName="tools" defaultOpen>
      <SkillItem name="Git/Github" />
      <SkillItem name="VS Code" />
      <SkillItem name="Android Studio" />
    </SkillAccordion>
  );

  const databaseSkills = (
    <SkillAccordion title="Databases" iconName="database">
      <SkillItem name="MySQL" />
      <SkillItem name="PostgreSQL" />
    </SkillAccordion>
  );

  return (
    <View style={commonStyles.section} id="skills">
      <Text style={commonStyles.sectionTitle}>Skills</Text>
      <Text style={commonStyles.sectionSubtitle}>My technical level</Text>
      <View style={[commonStyles.sectionContainer, styles.container, isMobile && styles.mobileContainer]}>
        <View style={styles.column}>
          {programmingSkills}
          {librarySkills}
        </View>
        <View style={styles.column}>
          {toolsSkills}
          {databaseSkills}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mobileContainer: {
    flexDirection: 'column',
  },
  column: {
    flex: 1,
    marginHorizontal: 8,
  },
  skillItem: {
    width: '48%', // Two items per row on desktop
    marginBottom: 16,
  },
  skillName: {
    fontSize: 16,
    color: colors.text,
  },
});

export default Skills;