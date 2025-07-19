import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#6E61CA',
  text: '#333',
  subtext: '#555',
  background: '#f0f2f5',
  white: '#fff',
  border: '#ddd',
};

export const commonStyles = StyleSheet.create({
  section: {
    paddingVertical: 60,
    alignItems: 'center',
    width: '100%',
  },
  sectionContainer: {
    maxWidth: 968,
    width: '100%',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: colors.subtext,
    marginBottom: 48,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    marginRight: 8,
  },
});