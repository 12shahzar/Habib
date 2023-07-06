import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const Syllabus = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const handlePrevious = () => {
    setActiveComponent(activeComponent - 1);
  };

  const handleNext = () => {
    setActiveComponent(activeComponent + 1);
  };

  const getHeadingText = () => {
    switch (activeComponent) {
      case 1:
        return 'Mid Term';
      case 2:
        return 'Final Term';
      default:
        return '';
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <Component1 />;
      case 2:
        return <Component2 />;
      default:
        return null;
    }
  };

  const Component1 = () => {
    return (
      <>
        <ScrollView style={styles.component}>
          <View style={styles.downlod}>
            <Text style={styles.subjectname}>English</Text>
            <View style={styles.complimentcomponent}>
              <Text style={styles.compliment}>Subject-English solution</Text>
              <TouchableOpacity>
                <Image source={require('../assets/Downlod.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.downlod}>
            <Text style={styles.subjectname}>English</Text>
            <View style={styles.complimentcomponent}>
              <Text style={styles.compliment}>Subject-English solution</Text>
              <TouchableOpacity>
                <Image source={require('../assets/Downlod.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.downlod}>
            <Text style={styles.subjectname}>English</Text>
            <View style={styles.complimentcomponent}>
              <Text style={styles.compliment}>Subject-English solution</Text>
              <TouchableOpacity>
                <Image source={require('../assets/Downlod.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.downlod}>
            <Text style={styles.subjectname}>English</Text>
            <View style={styles.complimentcomponent}>
              <Text style={styles.compliment}>Subject-English solution</Text>
              <TouchableOpacity>
                <Image source={require('../assets/Downlod.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.downlod}>
            <Text style={styles.subjectname}>English</Text>
            <View style={styles.complimentcomponent}>
              <Text style={styles.compliment}>Subject-English solution</Text>
              <TouchableOpacity>
                <Image source={require('../assets/Downlod.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  };

  const Component2 = () => {
    return (
      <>
        <ScrollView style={styles.component}>
          <View style={styles.downlod}>
            <Text style={styles.subjectname}>Math</Text>
            <View style={styles.complimentcomponent}>
              <Text style={styles.compliment}>Subject-Math solution</Text>
              <TouchableOpacity>
                <Image source={require('../assets/Downlod.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.downlod}>
            <Text style={styles.subjectname}>Math</Text>
            <View style={styles.complimentcomponent}>
              <Text style={styles.compliment}>Subject-Math solution</Text>
              <TouchableOpacity>
                <Image source={require('../assets/Downlod.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.downlod}>
            <Text style={styles.subjectname}>Math</Text>
            <View style={styles.complimentcomponent}>
              <Text style={styles.compliment}>Subject-Math solution</Text>
              <TouchableOpacity>
                <Image source={require('../assets/Downlod.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.downlod}>
            <Text style={styles.subjectname}>Math</Text>
            <View style={styles.complimentcomponent}>
              <Text style={styles.compliment}>Subject-Math solution</Text>
              <TouchableOpacity>
                <Image source={require('../assets/Downlod.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.downlod}>
            <Text style={styles.subjectname}>Math</Text>
            <View style={styles.complimentcomponent}>
              <Text style={styles.compliment}>Subject-Math solution</Text>
              <TouchableOpacity>
                <Image source={require('../assets/Downlod.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <TouchableOpacity
          style={[styles.iconButton, activeComponent === 1 && styles.disabled]}
          disabled={activeComponent === 1}
          onPress={handlePrevious}>
          <Image source={require('../assets/backarrow.png')} />
        </TouchableOpacity>
        <Text style={styles.heading}>{getHeadingText()}</Text>
        <TouchableOpacity
          style={[styles.iconButton, activeComponent === 2 && styles.disabled]}
          disabled={activeComponent === 2}
          onPress={handleNext}>
          <Image source={require('../assets/forwardarrow.png')} />
        </TouchableOpacity>
      </View>
      {renderComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topcontainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  iconButton: {
    borderRadius: 5,
  },

  disabled: {
    opacity: 0.5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  component: {
    // justifyContent: 'space-around',
    width: '100%',
    flex: 1,
    marginVertical: 10,
  },
  downlod: {
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 5,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  subjectname: {
    color: '#AE2327',
    fontSize: 24,
    fontWeight: 'bold',
  },
  complimentcomponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Syllabus;
