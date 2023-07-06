import {ScrollView, StyleSheet, Text, View, Image,TouchableWithoutFeedback,DrawerLayoutAndroid, TouchableOpacity} from 'react-native';
import  React, { useState }from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <Sidebar/>
      <ScrollView style={styles.homecontainer} >
        <Image
          style={styles.banerimg}
          source={require('../assets/bannerhome.png')}
        />
        <View style={styles.datedrow}>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Text style={styles.date}>
                13
            </Text>
            <View>
                <Text>
                    Wed
                </Text>
                <Text>
                    July,2020
                </Text>
            </View>
            </View>
            <View style={styles.btntoday}>
                   <Text style={styles.today}>
                    Today
                   </Text>
            </View>
        </View>
        <ScrollView style={styles.bottomcalender}>
          <View style={styles.rowview}>
          <Image style={styles.clenderimg} source={require('../assets/calender.png')}/>
        <Text style={styles.textcalender}>
        Calendar
                   </Text>
                   </View>
                   <View style={styles.calender}>

                   </View>
                   <View  style={styles.statscard}>
                    <View style={styles.childone}>
                      <View style={styles.childupper}>
                        <Text style={styles.blacktext}>
                        Student Statistics
                        </Text>
                        <View style={styles.stylishcorner}>
                        <TouchableWithoutFeedback onPress={closeDropdown}>
      <View>
        <TouchableOpacity onPress={toggleDropdown}>
          {/* Replace 'img' with your image component */}
          <Image source={require('../assets/detail.png')} alt="Dropdown" />
        </TouchableOpacity>
        
        {isOpen && (
          <View style={styles.dropdown}>
            {/* Dropdown content */}
            <Text>Downlod Png</Text>
            <Text>Downlod Jpg</Text>
            <Text>Downlod Svg</Text>
            {/* ... more options */}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
                        
                        </View>

                      </View>
                      

                      <View style={styles.childbtm}>
                        <View style={styles.subchild}>
                          <Text>
                            English
                          </Text>
                          <Text>
                            urdu
                          </Text>
                          <Text>
                            Math
                          </Text>
                          <Text>
                            Islamiat
                          </Text>

                        </View>
                        <View style={styles.subchild}>
                          <Text>
                            English
                          </Text>
                          <Text>
                            urdu
                          </Text>
                          <Text>
                            Math
                          </Text>
                          <Text>
                            Islamiat
                          </Text>

                        </View>
                        
                        </View>

                    </View>
                    <View style={styles.childtwo}>
                      <View style={styles.childupper}>
                        <Text style={styles.blacktext}>
                        Attendance
                        </Text>
                        <View style={styles.stylishcorner}>
                          <TouchableOpacity>
                          <Image source={require('../assets/detail.png')}/>
                          </TouchableOpacity>
                        
                        </View>

                      </View>
                      

                      <View style={styles.childbtm}>
                        <View style={styles.subchild}>
                          <Text>
                            English
                          </Text>
                          <Text>
                            urdu
                          </Text>
                          <Text>
                            Math
                          </Text>
                          <Text>
                            Islamiat
                          </Text>

                        </View>
                        <View style={styles.subchild}>
                          <Text>
                            English
                          </Text>
                          <Text>
                            urdu
                          </Text>
                          <Text>
                            Math
                          </Text>
                          <Text>
                            Islamiat
                          </Text>

                        </View>
                        
                        </View>

                    </View>

                   </View>

                   <View style={styles.latestnews}>
                   <View style={styles.childuppernew}>
                        <Text style={styles.blacktext}>
                        Latest News & Notices
                        </Text>
                        <View style={styles.stylishcorner2}>
                        <TouchableWithoutFeedback onPress={closeDropdown}>
      <View>
        <TouchableOpacity>
          {/* Replace 'img' with your image component */}
          <Image source={require('../assets/detail.png')} alt="Dropdown" />
        </TouchableOpacity>
        
      
      </View>
    </TouchableWithoutFeedback>
                        
                        </View>

                      </View>
                      <View style={styles.childbtmnew}>
                        <Text style={styles.news}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                        <Text style={styles.time}>5 years ago</Text>
                        <Text style={styles.news}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                        <Text style={styles.time}>5 years ago</Text>
                        <Text style={styles.news}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                        <Text style={styles.time}>5 years ago</Text>
                        <Text style={styles.news}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                        <Text style={styles.time}>5 years ago</Text>
                        <Text style={styles.news}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                        <Text style={styles.time}>5 years ago</Text>
                      </View>

                   </View>

        </ScrollView>
      </ScrollView>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    
  },
  homecontainer: {
    height: '75%',
   
  },
  banerimg: {
    width: '100%',
    height: 150,
    margin:5,
  
  },
  date:{
    fontSize:50,
    fontWeight:'bold',
    color:'#07354B',
  },
  datedrow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin:2.5,
  },
  btntoday:{
    height:50,
    width:130,
    backgroundColor: 'pink',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    
  },
  today:{
    color:'#AE2327',
    fontWeight:'bold',
    fontSize:20,
  },
  bottomcalender:{
    width:'100%',
    height:'auto',
    backgroundColor:'#AE2327',
    borderRadius:10,
    marginTop:20,
    paddingBottom:100,
    
    
  },
  calender:{
    color:'white',
    fontSize:20,
    height:150,
    backgroundColor:'black',
  },
  textcalender:{
    color:'white',
    fontSize:15,
    marginTop:20,
    marginLeft:10,
   
  },
  statscard:{
    // backgroundColor:"green",
    width:"100%",
    height:150,
    padding:2.5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  childone:{
    width:"49%",
    height:'100%',
    backgroundColor:"white",
    borderRadius:10,
    justifyContent:'space-between',
  }, 
  childtwo:{
    width:"49%",
    height:'100%',
    backgroundColor:"white",
    borderRadius:10,
    justifyContent:'space-between',
  },
  childupper:{
    height:'30%',
    // backgroundColor:"yellow",
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  stylishcorner:{
    backgroundColor:"#FFC278",
    height:'100%',
    width:'20%',
    borderTopRightRadius:10,
    borderBottomLeftRadius:30,
    justifyContent:'center',
    alignItems:'center',
  },
  blacktext:{
    color:'black',
    fontWeight:'bold',
    fontSize:17,
    margin:8,
  },
  rowview:{
    flexDirection:'row'
  },
  clenderimg:{
   
    marginTop:20,
    marginLeft:20,
  },
  childbtm:{
    height:'65%',
  
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row',
  
  },
  subchild:{
    height:"100%",
    width:"50%",
    padding:5,
   
  },
  dropdown:
  {
    width:120,
    height:100,
    position: 'absolute',
    left: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    marginLeft: -90, // Adjust this value based on your design
    zIndex: 1,
   
  },
  latestnews:{
    height:450,
    backgroundColor:'white',
    width:'100%',
    margin:2.5,
    borderRadius:10,
  },
  childuppernew:{
    height:60,
    // backgroundColor:"yellow",
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  stylishcorner2:{
    backgroundColor:"#FFC278",
    height:'100%',
    width:'15%',
    borderTopRightRadius:10,
    borderBottomLeftRadius:30,
    justifyContent:'center',
    alignItems:'center',
  },
  childbtmnew:{
    height:'auto',
    // backgroundColor:"yellow",
    width:'100%',
   
    padding:4,
   
  },
  news:{
    margin:2,
    color:'black',
  },
  time:{
    marginTop:1,
    marginRight:10,
    color:'red',
    alignSelf:'flex-end'
  }
});
