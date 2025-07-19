import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  SafeAreaView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { commonStyles, colors } from '../styles/commonStyles';

const educationData = [
  {
    title: 'Class 10th',
    subtitle: 'GSBV - CBSE Board',
    location: 'High School',
    date: '- 2019',
    details: [
      'Subjects Studied: Science, Maths, English, Social Studies, Hindi, Urdu.',
      'Scored 82%',
    ],
  },
  {
    title: 'Class 12th',
    subtitle: 'GSBV - CBSE Board',
    location: 'Pre University College',
    date: '- 2021',
    details: [
      'Subjects studied: Physics, Chemistry, Maths, English, Engineering Graphics, Physical Education.',
      'Scored 80%',
    ],
  },
  {
    title: 'College-Btech CSE',
    subtitle: 'Dronacharya Group of Institution',
    location: '',
    date: '2022 - 2026',
    details: [
      'Studying core subjects of CS including DSA, OOSD with C++, Design analysis and algorithm, Operating systems, and Computer Network, Database Management System.',
      'Scored an aggregate of 7.5 CGPA till now.',
    ],
  },
];

const TimelineItem = ({ data, isLeft, isLast, onViewMore }) => {
  const content = (
    <View style={styles.timelineContent}>
      <Text style={styles.timelineTitle}>{data.title}</Text>
      <Text style={styles.timelineSubtitle}>{data.subtitle}</Text>
      {data.location ? <Text style={styles.timelineLocation}>{data.location}</Text> : null}
      <View style={styles.timelineDateContainer}>
        <FontAwesome5 name="calendar-alt" size={14} color={colors.subtext} />
        <Text style={styles.timelineDate}>{data.date}</Text>
      </View>
      <Pressable style={styles.viewMoreButton} onPress={() => onViewMore(data)}>
        <Text style={styles.viewMoreText}>View More</Text>
        <FontAwesome5 name="arrow-right" size={14} color={colors.primary} />
      </Pressable>
    </View>
  );

  const graphics = (
    <View style={styles.timelineGraphics}>
      <View style={styles.timelineRounder} />
      {!isLast && <View style={styles.timelineLine} />}
    </View>
  );

  return (
    <View style={styles.timelineRow}>
      {isLeft ? content : <View style={{ flex: 1 }} />}
      {graphics}
      {!isLeft ? content : <View style={{ flex: 1 }} />}
    </View>
  );
};

const Qualification = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewMore = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={commonStyles.section} id="qualification">
      <Text style={commonStyles.sectionTitle}>Qualification</Text>
      <Text style={commonStyles.sectionSubtitle}>My personal journey</Text>

      <View style={commonStyles.sectionContainer}>
        <View style={styles.tabsContainer}>
          <Pressable style={[styles.tabButton, styles.activeTab]}>
            <FontAwesome5 name="graduation-cap" size={20} color={colors.primary} />
            <Text style={styles.tabText}>Education</Text>
          </Pressable>
        </View>

        <View style={styles.timelineContainer}>
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              data={item}
              isLeft={index % 2 === 0}
              isLast={index === educationData.length - 1}
              onViewMore={handleViewMore}
            />
          ))}
        </View>
      </View>

      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedItem.title} Summary:</Text>
              <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <FontAwesome5 name="times" size={24} color={colors.subtext} />
              </Pressable>
              <View style={styles.modalList}>
                {selectedItem.details.map((detail, index) => (
                  <View key={index} style={styles.modalListItem}>
                    <FontAwesome5 name="check-circle" size={16} color={colors.primary} />
                    <Text style={styles.modalListText}>{detail}</Text>
                  </View>
                ))}
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 32 },
  tabButton: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  activeTab: { color: colors.primary },
  tabText: { fontSize: 18, fontWeight: '500', marginLeft: 8, color: colors.primary },
  timelineContainer: { paddingHorizontal: 20 },
  timelineRow: { flexDirection: 'row' },
  timelineContent: { flex: 1, paddingHorizontal: 20, paddingBottom: 32 },
  timelineTitle: { fontSize: 18, fontWeight: '500', color: colors.text },
  timelineSubtitle: { fontSize: 15, color: colors.subtext },
  timelineLocation: { fontSize: 15, color: colors.subtext },
  timelineDateContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  timelineDate: { marginLeft: 8, color: colors.subtext },
  timelineGraphics: { alignItems: 'center' },
  timelineRounder: { width: 14, height: 14, borderRadius: 7, backgroundColor: colors.primary },
  timelineLine: { flex: 1, width: 2, backgroundColor: colors.primary },
  viewMoreButton: { flexDirection: 'row', alignItems: 'center', marginTop: 16 },
  viewMoreText: { color: colors.primary, marginRight: 4, fontWeight: '500' },
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingTop: 40,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  modalList: {},
  modalListItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  modalListText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
  },
});

export default Qualification;