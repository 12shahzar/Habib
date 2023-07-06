import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import ScrollableCardView from './ScrollableCardView';
import Syllabus from './Syllabus';
import Material from './Material';
import Liveclasses from './Liveclasses';

const Test = () => {
  const options = ['Subjects', 'Syllabus', 'Material', 'Live Classes'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionPress = option => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    // Render different content based on the selected option
    switch (selectedOption) {
      case 'Subjects':
        return (
          <>
            <Text style={styles.heading}>Subject</Text>
            <ScrollableCardView />
          </>
        );
      case 'Syllabus':
        return (
          <>
            <Text style={styles.heading}>Introduction to Syllabus</Text>
            <Syllabus />
          </>
        );
      case 'Material':
        return (
          <>
            <Text style={styles.heading}>Manage Study Material</Text>
            <Material />
          </>
        );

      case 'Live Classes':
        return (
          <>
            <Text style={styles.heading}>Live Classes</Text>
            <Liveclasses />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                selectedOption === option && styles.selectedOption, // Apply different style for selected option
              ]}
              onPress={() => handleOptionPress(option)}>
              <Text
                style={[
                  styles.optionText,
                  selectedOption === option && styles.selectedOptionText, // Apply different style for selected option text
                ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  optionsContainer: {
    paddingHorizontal: 16,
  },
  option: {
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    height: 40,
  },
  optionText: {
    color: 'black',
    fontWeight: 'bold',
  },
  selectedOption: {
    backgroundColor: '#AE2327',
  },
  selectedOptionText: {
    color: 'white',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollcontainer: {
    flex: 1,
    backgroundColor: '#AE2327',
    display: 'flex',
  },
  heading: {
    color: '#AE2327',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    height: 150,
    width: '45%',
    backgroundColor: 'black',
  },
});

export default Test;
