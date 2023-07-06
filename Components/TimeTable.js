import { ScrollView, StyleSheet, Text, Vibration, View,Image } from 'react-native'
import React from 'react'
import HorizontalCalendar from '../HorizontalCalendar';

const TimeTable = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  return (
    <View style={styles.container}>
    <View style={{height:235,width:'100%',backgroundColor:'white',paddingTop:'14%', borderBottomLeftRadius: 35,borderBottomRightRadius: 35,marginBottom:10,padding:20}}>
     <Text style={{fontSize:20,color:'#AE2327',fontWeight:600,marginVertical:10,}} >Timetable</Text>
    <View style={{height:70}}>
    <HorizontalCalendar
    selectedDate={selectedDate}
    setSelectedDate={setSelectedDate}
  />
    </View>
  <View style={{flexDirection:"row",borderTopColor:'#64748B80',borderTopWidth:1,paddingTop:13}}>
  <View style={{marginRight:10}}>
  <Image source={require('../assets/p1.png')} ></Image>
  </View>
  <View style={{marginRight:10}}>
  <Image source={require('../assets/p2.png')} ></Image></View>
  <View style={{marginRight:10}}>
  <Image source={require('../assets/p3.png')} ></Image></View>
  </View>
     </View>
     <ScrollView>
     <View style={{backgroundColor:'white',height:560,borderRadius:10,marginHorizontal:'5%',borderTopLeftRadius:10}}>
     <View style={{flexDirection:'row',borderWidth:1,borderColor:'#D3D5D8',borderTopLeftRadius:10  ,borderTopRightRadius:10}}>
     <View style={{height:60,width:'20%',backgroundColor:'#07354B',display:'flex',justifyContent:'center',alignItems:'center' ,borderTopLeftRadius:10}}>
     <Text style={{color:'white'}}>8:30</Text>
     <Text style={{color:'white'}}>9:00</Text>
     </View>
     <View  style={{display:'flex',justifyContent:'center',alignItems:'center' ,borderTopRightRadius:10}}>
     <View style={{flexDirection:"row" }}>
     <View style={{height:35,width:2,backgroundColor:'#07354B',marginHorizontal:10,marginRight:20}}></View>
    
     <View>
     <View style={{borderTopRightRadius:10}}>
     <Text style={{fontSize:18,color:'#AE2327',fontWeight:600}}>Geography</Text>
     </View>
     <View>
     <Text style={{fontSize:11,color:'#07354B',fontWeight:300}}>Chapter # 3 Europe</Text>
     </View>
     </View>
    
     </View>
     </View>
     </View>
     <View style={{flexDirection:'row',borderWidth:1,borderColor:'#D3D5D8'}}>
     <View style={{height:60,width:'20%',backgroundColor:'#07354B',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Text style={{color:'white'}}>8:30</Text>
     <Text style={{color:'white'}}>9:00</Text>
     </View>
     <View  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <View style={{flexDirection:"row"}}>
     <View style={{height:35,width:2,backgroundColor:'#07354B',marginHorizontal:10,marginRight:20}}></View>
   
     <View>
     <View>
     <Text style={{fontSize:18,color:'#AE2327',fontWeight:600}}>Geography</Text>
     </View>
     <View>
     <Text style={{fontSize:11,color:'#07354B',fontWeight:300}}>Chapter # 3 Europe</Text>
     </View>
     </View>
    
     </View>
     </View>
     </View>
     <View style={{flexDirection:'row',borderWidth:1,borderColor:'#D3D5D8'}}>
     <View style={{height:60,width:'20%',backgroundColor:'#07354B',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Text style={{color:'white'}}>8:30</Text>
     <Text style={{color:'white'}}>9:00</Text>
     </View>
     <View  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <View style={{flexDirection:"row"}}>
     <View style={{height:35,width:2,backgroundColor:'#07354B',marginHorizontal:10,marginRight:20}}></View>
   
     <View>
     <View>
     <Text style={{fontSize:18,color:'#AE2327',fontWeight:600}}>Geography</Text>
     </View>
     <View>
     <Text style={{fontSize:11,color:'#07354B',fontWeight:300}}>Chapter # 3 Europe</Text>
     </View>
     </View>
    
     </View>
     </View>
     </View>
     <View style={{flexDirection:'row',borderWidth:1,borderColor:'#D3D5D8'}}>
     <View style={{height:60,width:'20%',backgroundColor:'#07354B',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Text style={{color:'white'}}>8:30</Text>
     <Text style={{color:'white'}}>9:00</Text>
     </View>
     <View  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <View style={{flexDirection:"row"}}>
     <View style={{height:35,width:2,backgroundColor:'#07354B',marginHorizontal:10,marginRight:20}}></View>
   
     <View>
     <View>
     <Text style={{fontSize:18,color:'#AE2327',fontWeight:600}}>Geography</Text>
     </View>
     <View>
     <Text style={{fontSize:11,color:'#07354B',fontWeight:300}}>Chapter # 3 Europe</Text>
     </View>
     </View>
    
     </View>
     </View>
     </View>
     <View style={{flexDirection:'row',borderWidth:1,borderColor:'#D3D5D8'}}>
     <View style={{height:60,width:'20%',backgroundColor:'#07354B',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Text style={{color:'white'}}>8:30</Text>
     <Text style={{color:'white'}}>9:00</Text>
     </View>
     <View  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <View style={{flexDirection:"row"}}>
     <View style={{height:35,width:2,backgroundColor:'#07354B',marginHorizontal:10,marginRight:20}}></View>
   
     <View>
     <View>
     <Text style={{fontSize:18,color:'#AE2327',fontWeight:600}}>Geography</Text>
     </View>
     <View>
     <Text style={{fontSize:11,color:'#07354B',fontWeight:300}}>Chapter # 3 Europe</Text>
     </View>
     </View>
    
     </View>
     </View>
     </View>
     <View style={{flexDirection:'row',borderWidth:1,borderColor:'#D3D5D8'}}>
     <View style={{height:60,width:'20%',backgroundColor:'#07354B',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Text style={{color:'white'}}>8:30</Text>
     <Text style={{color:'white'}}>9:00</Text>
     </View>
     <View  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <View style={{flexDirection:"row"}}>
     <View style={{height:35,width:2,backgroundColor:'#07354B',marginHorizontal:10,marginRight:20}}></View>
   
     <View>
     <View>
     <Text style={{fontSize:18,color:'#AE2327',fontWeight:600}}>Geography</Text>
     </View>
     <View>
     <Text style={{fontSize:11,color:'#07354B',fontWeight:300}}>Chapter # 3 Europe</Text>
     </View>
     </View>
    
     </View>
     </View>
     </View>
     <View style={{flexDirection:'row',borderWidth:1,borderColor:'#D3D5D8'}}>
     <View style={{height:60,width:'20%',backgroundColor:'#07354B',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Text style={{color:'white'}}>8:30</Text>
     <Text style={{color:'white'}}>9:00</Text>
     </View>
     <View  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <View style={{flexDirection:"row"}}>
     <View style={{height:35,width:2,backgroundColor:'#07354B',marginHorizontal:10,marginRight:20}}></View>
   
     <View>
     <View>
     <Text style={{fontSize:18,color:'#AE2327',fontWeight:600}}>Geography</Text>
     </View>
     <View>
     <Text style={{fontSize:11,color:'#07354B',fontWeight:300}}>Chapter # 3 Europe</Text>
     </View>
     </View>
    
     </View>
     </View>
     </View>
     <View style={{flexDirection:'row',borderWidth:1,borderColor:'#D3D5D8'}}>
     <View style={{height:60,width:'20%',backgroundColor:'#07354B',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Text style={{color:'white'}}>8:30</Text>
     <Text style={{color:'white'}}>9:00</Text>
     </View>
     <View  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <View style={{flexDirection:"row"}}>
     <View style={{height:35,width:2,backgroundColor:'#07354B',marginHorizontal:10,marginRight:20}}></View>
   
     <View>
     <View>
     <Text style={{fontSize:18,color:'#AE2327',fontWeight:600}}>Geography</Text>
     </View>
     <View>
     <Text style={{fontSize:11,color:'#07354B',fontWeight:300}}>Chapter # 3 Europe</Text>
     </View>
     </View>
    
     </View>
     </View>
     </View>
     <View style={{flexDirection:'row',borderWidth:1,borderColor:'#D3D5D8',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
     <View style={{height:60,width:'20%',backgroundColor:'#07354B',display:'flex',justifyContent:'center',alignItems:'center',borderBottomLeftRadius:10}}>
     <Text style={{color:'white'}}>8:30</Text>
     <Text style={{color:'white'}}>9:00</Text>
     </View>
     <View  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <View style={{flexDirection:"row"}}>
     <View style={{height:35,width:2,backgroundColor:'#07354B',marginHorizontal:10,marginRight:20}}></View>
   
     <View>
     <View style={{borderBottomRightRadius:10}}>
     <Text style={{fontSize:18,color:'#AE2327',fontWeight:600}}>Geography</Text>
     </View>
     <View>
     <Text style={{fontSize:11,color:'#07354B',fontWeight:300}}>Chapter # 3 Europe</Text>
     </View>
     </View>
    
     </View>
     </View>
     </View>
     </View>
     </ScrollView>
     
    </View>
  )
}

export default TimeTable

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(174, 35, 39, 0.05)',
       
        height:'100%'
        
    },
  
})