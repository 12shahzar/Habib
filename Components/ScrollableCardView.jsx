import React from 'react';
import { View, ScrollView, StyleSheet ,Text,Image} from 'react-native';

const ScrollableCardView = () => {
  const cards = [
    { id: 1, title: 'English', teacher: 'William', image: require('../assets/englishbook.png') },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    { id: 4, title: 'Card 4' },
    { id: 5, title: 'Card 5' },
    { id: 6, title: 'Card 6' },
    { id: 7, title: 'Card 7' },
    { id: 8, title: 'Card 8' },
    { id: 9, title: 'Card 9' },
    { id: 10, title: 'Card 10' },
    { id: 11, title: 'Card 11' },
    { id: 12, title: 'Card 12' },
  ];

  const renderCards = () => {
    return cards.map((card) => (
      <View key={card.id} style={styles.card}>
        {/* Customize card content here */}
        <View style={styles.cardimg}>
        <Image source={card.image} style={styles.cardImage} />
        </View>
        
        <Text style={styles.cardTitle}>{card.title}</Text>
        <View style={styles.teachercontainer}>
        <Text style={styles.cardteach}>Teacher:</Text>
        <Text style={styles.teachnam}>{card.teacher}</Text>
        </View>
        
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {renderCards()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Adjust card width as desired
    marginBottom: 16,
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOpacity:  0.19,
  shadowRadius: 5.62,
  elevation: 6,
    borderRadius: 8,
    height:180,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#AE2327',
    marginLeft:5,
  },
  cardimg:{
    width: '100%', // Adjust card width as desired
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#BFE2D6',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  teachercontainer:{

    display:'flex',
    flexDirection:'row',
  },
  cardteach:{
    fontSize: 15,
    fontWeight: 'bold',
    color:'black',
    marginLeft:5,
  },
  teachnam:
  {
    fontSize: 15,
    marginLeft:5,
    color:'#AE2327',
  }
});

export default ScrollableCardView;
