import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'

const LessonDetail = () => {
  return (
   
    <View style={styles.container}> 
    <View style={styles.extra}></View>
    <ScrollView>
     
      <Text style={{fontSize:20,color:'#AE2327',fontWeight:500,marginBottom:10}}>Lesson # 1</Text>
      <Text style={{fontSize:25,color:'#07354B',fontWeight:500,marginBottom:4}}>Wren & Martin</Text>
      <Text style={{fontSize:15,color:'#07354B',marginTop:'4%'}}>Timeline</Text>
        <Text  style={{fontSize:15,color:'#AE2327'}}>Jan 14 - Feb 16</Text>
        <Text style={{fontSize:20,color:'#AE2327',fontWeight:600,marginVertical:10}}>5 Topics</Text>
<View style={{height:120,backgroundColor:'#FFF',width:'100%',borderRadius:9,padding:15,flexDirection:'row',marginBottom:'6%'}}>
<View style={{width:'70%'}}>
    <Text style={{fontSize:15,color:'#AE2327',fontWeight:500 ,marginBottom:10}}>Topic # 1</Text>
<Text style={{fontSize:15,color:'#07354B',fontWeight:500 ,marginBottom:13}}>Wren & Martin</Text>
<View style={{flexDirection:'row',}}>
    <View style={{height:30,backgroundColor:'#AE2327CC',borderRadius:4,padding:4,width:'35%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',marginRight:5}}>
        <Text style={{color:'#FBF4F4'}}>5 Topics</Text>
    </View>
    <View style={{height:30,backgroundColor:'#AE2327CC',color:'#FBF4F4',borderRadius:4,padding:4,width:'36%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#FBF4F4'}}>8 Exercise</Text>
    </View>
</View>
</View>
<View style={{width:'70%'}}>
    <View style={{height:'30%',backgroundColor:'#07354B',color:'#FBF4F4',borderRadius:4,padding:4,width:'47%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
     <View style={{paddingRight:8}}>
     <Image source={require('../assets/done.png')} ></Image>
     </View>
     <View>
        <Text style={{color:'#FBF4F4'}}>Completed</Text>
        
     </View>
    </View>
    <Text style={{fontSize:10,color:'#07354B',marginTop:'20%'}}>Timeline</Text>
        <Text  style={{fontSize:10,color:'#AE2327'}}>Jan 14 - Feb 16</Text>
</View>
</View>
<View style={{height:120,backgroundColor:'#FFF',width:'100%',borderRadius:9,padding:15,flexDirection:'row',marginBottom:'6%'}}>
<View style={{width:'70%'}}>
    <Text style={{fontSize:15,color:'#AE2327',fontWeight:500 ,marginBottom:10}}>Topic # 2</Text>
<Text style={{fontSize:15,color:'#07354B',fontWeight:500 ,marginBottom:13}}>To Kill a Mockingbird</Text>
<View style={{flexDirection:'row',}}>
    <View style={{height:30,backgroundColor:'#AE2327CC',borderRadius:4,padding:4,width:'35%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',marginRight:5}}>
        <Text style={{color:'#FBF4F4'}}>5 Topics</Text>
    </View>
    <View style={{height:30,backgroundColor:'#AE2327CC',color:'#FBF4F4',borderRadius:4,padding:4,width:'36%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#FBF4F4'}}>8 Exercise</Text>
    </View>
</View>
</View>
<View style={{width:'70%'}}>
    <View style={{height:'30%',backgroundColor:'#07354B',color:'#FBF4F4',borderRadius:4,padding:4,width:'47%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
     <View style={{paddingRight:8}}>
     <Image source={require('../assets/going.png')} ></Image>
     </View>
     <View>
        <Text style={{color:'#FBF4F4'}}>On Going</Text>
        
     </View>
    </View>
    <Text style={{fontSize:10,color:'#07354B',marginTop:'20%'}}>Timeline</Text>
        <Text  style={{fontSize:10,color:'#AE2327'}}>Jan 14 - Feb 16</Text>
</View>
</View>
<View style={{height:120,backgroundColor:'#FFF',width:'100%',borderRadius:9,padding:15,flexDirection:'row',marginBottom:'6%'}}>
<View style={{width:'70%'}}>
    <Text style={{fontSize:15,color:'#AE2327',fontWeight:500 ,marginBottom:10}}>Topic # 3</Text>
<Text style={{fontSize:15,color:'#07354B',fontWeight:500 ,marginBottom:13}}>To Kill a Mockingbird</Text>
<View style={{flexDirection:'row',}}>
    <View style={{height:30,backgroundColor:'#AE2327CC',borderRadius:4,padding:4,width:'35%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',marginRight:5}}>
        <Text style={{color:'#FBF4F4'}}>5 Topics</Text>
    </View>
    <View style={{height:30,backgroundColor:'#AE2327CC',color:'#FBF4F4',borderRadius:4,padding:4,width:'36%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#FBF4F4'}}>8 Exercise</Text>
    </View>
</View>
</View>
<View style={{width:'70%'}}>
    <View style={{height:'30%',backgroundColor:'#07354B',color:'#FBF4F4',borderRadius:4,padding:4,width:'47%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
     <View style={{paddingRight:5}}>
     <Image source={require('../assets/going.png')} ></Image>
     </View>
     <View>
        <Text style={{color:'#FBF4F4'}}>Not Started</Text>
        
     </View>
    </View>
    <Text style={{fontSize:10,color:'#07354B',marginTop:'20%'}}>Timeline</Text>
        <Text  style={{fontSize:10,color:'#AE2327'}}>Jan 14 - Feb 16</Text>
</View>
</View>
<View style={{height:120,backgroundColor:'#FFF',width:'100%',borderRadius:9,padding:15,flexDirection:'row',marginBottom:'6%'}}>
<View style={{width:'70%'}}>
    <Text style={{fontSize:15,color:'#AE2327',fontWeight:500 ,marginBottom:10}}>Topic # 4</Text>
<Text style={{fontSize:15,color:'#07354B',fontWeight:500 ,marginBottom:13}}>Pride and Prejudice</Text>
<View style={{flexDirection:'row',}}>
    <View style={{height:30,backgroundColor:'#AE2327CC',borderRadius:4,padding:4,width:'35%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',marginRight:5}}>
        <Text style={{color:'#FBF4F4'}}>5 Topics</Text>
    </View>
    <View style={{height:30,backgroundColor:'#AE2327CC',color:'#FBF4F4',borderRadius:4,padding:4,width:'36%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#FBF4F4'}}>8 Exercise</Text>
    </View>
</View>
</View>
<View style={{width:'70%'}}>
    <View style={{height:'30%',backgroundColor:'#07354B',color:'#FBF4F4',borderRadius:4,padding:4,width:'47%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
     <View style={{paddingRight:8}}>
     <Image source={require('../assets/done.png')} ></Image>
     </View>
     <View>
        <Text style={{color:'#FBF4F4'}}>Completed</Text>
        
     </View>
    </View>
    <Text style={{fontSize:10,color:'#07354B',marginTop:'20%'}}>Timeline</Text>
        <Text  style={{fontSize:10,color:'#AE2327'}}>Jan 14 - Feb 16</Text>
</View>
</View>
<View style={{height:120,backgroundColor:'#FFF',width:'100%',borderRadius:9,padding:15,flexDirection:'row',marginBottom:'6%'}}>
<View style={{width:'70%'}}>
    <Text style={{fontSize:15,color:'#AE2327',fontWeight:500 ,marginBottom:10}}>Topic # 5</Text>
<Text style={{fontSize:15,color:'#07354B',fontWeight:500 ,marginBottom:13}}>Pride and Prejudice</Text>
<View style={{flexDirection:'row',}}>
    <View style={{height:30,backgroundColor:'#AE2327CC',borderRadius:4,padding:4,width:'35%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',marginRight:5}}>
        <Text style={{color:'#FBF4F4'}}>5 Topics</Text>
    </View>
    <View style={{height:30,backgroundColor:'#AE2327CC',color:'#FBF4F4',borderRadius:4,padding:4,width:'36%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#FBF4F4'}}>8 Exercise</Text>
    </View>
</View>
</View>
<View style={{width:'70%'}}>
    <View style={{height:'30%',backgroundColor:'#07354B',color:'#FBF4F4',borderRadius:4,padding:4,width:'47%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
     <View style={{paddingRight:8}}>
     <Image source={require('../assets/done.png')} ></Image>
     </View>
     <View>
        <Text style={{color:'#FBF4F4'}}>Completed</Text>
        
     </View>
    </View>
    <Text style={{fontSize:10,color:'#07354B',marginTop:'20%'}}>Timeline</Text>
        <Text  style={{fontSize:10,color:'#AE2327'}}>Jan 14 - Feb 16</Text>
</View>
</View>
<View style={styles.extra}></View>
</ScrollView>
    </View>
  )
}

export default LessonDetail

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(174, 35, 39, 0.05)',
        padding:'5%',
        height:'100%'
        
    },
  
    extra:{
        marginTop:50
    }
})