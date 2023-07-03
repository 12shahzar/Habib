import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Test = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    // Render different content based on the selected option
    switch (selectedOption) {
      case 'Option 1':
        return <Text>Content for Option 1</Text>;
      case 'Option 2':
        return <Text>Content for Option 2</Text>;
      case 'Option 3':
        return <Text>Content for Option 3</Text>;
      case 'Option 4':
        return <Text>Content for Option 4</Text>;
      case 'Option 5':
        return <Text>Content for Option 5</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === option && styles.selectedOption, // Apply different style for selected option
            ]}
            onPress={() => handleOptionPress(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === option && styles.selectedOptionText, // Apply different style for selected option text
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
  option: {
    marginRight: 8,
    height:40,
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOpacity:  0.19,
  shadowRadius: 5.62,
  elevation: 6,
  paddingEnd:15,
  paddingStart:15,
  borderRadius:15,
  justifyContent: 'center',
  alignItems:'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AE2327',
  },
});

export default Test;
