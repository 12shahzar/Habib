import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TouchableWithoutFeedback,Image } from 'react-native';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <TouchableWithoutFeedback onPress={closeDropdown}>
      <View>
        <TouchableOpacity onPress={toggleDropdown}>
          {/* Replace 'img' with your image component */}
          <Image source={require('../assets/detail.png')} alt="Dropdown" />
        </TouchableOpacity>
        
        {isOpen && (
          <View>
            {/* Dropdown content */}
            <Text>Option 1</Text>
            <Text>Option 2</Text>
            <Text>Option 3</Text>
            {/* ... more options */}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Dropdown;
