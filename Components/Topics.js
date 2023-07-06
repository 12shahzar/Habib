import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'

const Topics = () => {
  return (
   
    <View style={styles.container}> 
    <View style={styles.extra}></View>
    <ScrollView>
     <View style={{flexDirection:'row'}}>
        <View style={{height:25,backgroundColor:'#FBF4F4',width:'20%',borderColor:'#AE2327',borderWidth:1,display:'flex',justifyContent:'center',alignItems:'center',marginVertical:15,borderRadius:4,marginRight:10}}>
          <Text style={{color:'#AE2327'}}>Lessons</Text>
        </View>
        <View style={{height:25,backgroundColor:'#AE2327',width:'20%',display:'flex',justifyContent:'center',alignItems:'center',marginVertical:15,borderRadius:4}}>
        <Text style={{color:'#FBF4F4'}}>Topics</Text>
        </View>
        <View style={{flexDirection:'row',height:40,backgroundColor:'#FFFFFF',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:5,marginBottom:20,marginTop:5,marginLeft:'30%'}}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:15,fontWeight:400,color:'#AE2327',marginRight:10}} >Filters</Text>
        </View>
        
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',width:'15%'}}>
<Image source={require('../assets/filter.png')} ></Image>
</View>
        </View>
     </View>

<View style={{height:150,backgroundColor:'#FFF',width:'100%',borderRadius:9,padding:15,flexDirection:'row',marginBottom:'6%'}}>
<View style={{width:'70%'}}>
<Text style={{fontSize:16,color:'#07354B',fontWeight:500 ,marginBottom:10}}>English</Text>
    <Text style={{fontSize:15,color:'#AE2327',fontWeight:500 ,marginBottom:10}}>Topic # 1</Text>
<Text style={{fontSize:15,color:'#07354B',fontWeight:500 ,marginBottom:5}}>Wren & Martin</Text>
<View style={{flexDirection:'row',}}>
   
    <View style={{height:30,backgroundColor:'#AE2327CC',color:'#FBF4F4',borderRadius:4,padding:4,width:'36%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#FBF4F4'}}>8 Exercise</Text>
    </View>
</View>
</View>
<View style={{width:'70%'}}>
    <View style={{height:'25%',backgroundColor:'#07354B',color:'#FBF4F4',borderRadius:4,padding:4,width:'47%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
     <View style={{paddingRight:8}}>
     <Image source={require('../assets/done.png')} ></Image>
     </View>
     <View>
        <Text style={{color:'#FBF4F4'}}>Completed</Text>
        
     </View>
    </View>
    <Text style={{fontSize:10,color:'#07354B',marginTop:'27%'}}>Timeline</Text>
        <Text  style={{fontSize:10,color:'#AE2327'}}>Jan 14 - Feb 16</Text>
</View>
</View>
<View style={{height:150,backgroundColor:'#FFF',width:'100%',borderRadius:9,padding:15,flexDirection:'row',marginBottom:'6%'}}>
<View style={{width:'70%'}}>
<Text style={{fontSize:16,color:'#07354B',fontWeight:500 ,marginBottom:10}}>English</Text>
    <Text style={{fontSize:15,color:'#AE2327',fontWeight:500 ,marginBottom:10}}>Topic # 1</Text>
<Text style={{fontSize:15,color:'#07354B',fontWeight:500 ,marginBottom:5}}>Wren & Martin</Text>
<View style={{flexDirection:'row',}}>
    
    <View style={{height:30,backgroundColor:'#AE2327CC',color:'#FBF4F4',borderRadius:4,padding:4,width:'36%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#FBF4F4'}}>8 Exercise</Text>
    </View>
</View>
</View>
<View style={{width:'70%'}}>
    <View style={{height:'25%',backgroundColor:'#07354B',color:'#FBF4F4',borderRadius:4,padding:4,width:'47%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
     <View style={{paddingRight:8}}>
     <Image source={require('../assets/done.png')} ></Image>
     </View>
     <View>
        <Text style={{color:'#FBF4F4'}}>Completed</Text>
        
     </View>
    </View>
    <Text style={{fontSize:10,color:'#07354B',marginTop:'27%'}}>Timeline</Text>
        <Text  style={{fontSize:10,color:'#AE2327'}}>Jan 14 - Feb 16</Text>
</View>
</View>
<View style={{height:150,backgroundColor:'#FFF',width:'100%',borderRadius:9,padding:15,flexDirection:'row',marginBottom:'6%'}}>
<View style={{width:'70%'}}>
<Text style={{fontSize:16,color:'#07354B',fontWeight:500 ,marginBottom:10}}>English</Text>
    <Text style={{fontSize:15,color:'#AE2327',fontWeight:500 ,marginBottom:10}}>Topic # 1</Text>
<Text style={{fontSize:15,color:'#07354B',fontWeight:500 ,marginBottom:5}}>Wren & Martin</Text>
<View style={{flexDirection:'row',}}>
   
    <View style={{height:30,backgroundColor:'#AE2327CC',color:'#FBF4F4',borderRadius:4,padding:4,width:'36%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#FBF4F4'}}>8 Exercise</Text>
    </View>
</View>
</View>
<View style={{width:'70%'}}>
    <View style={{height:'25%',backgroundColor:'#07354B',color:'#FBF4F4',borderRadius:4,padding:4,width:'47%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
     <View style={{paddingRight:8}}>
     <Image source={require('../assets/done.png')} ></Image>
     </View>
     <View>
        <Text style={{color:'#FBF4F4'}}>Completed</Text>
        
     </View>
    </View>
    <Text style={{fontSize:10,color:'#07354B',marginTop:'27%'}}>Timeline</Text>
        <Text  style={{fontSize:10,color:'#AE2327'}}>Jan 14 - Feb 16</Text>
</View>
</View>
<View style={{height:150,backgroundColor:'#FFF',width:'100%',borderRadius:9,padding:15,flexDirection:'row',marginBottom:'6%'}}>
<View style={{width:'70%'}}>
<Text style={{fontSize:16,color:'#07354B',fontWeight:500 ,marginBottom:10}}>English</Text>
    <Text style={{fontSize:15,color:'#AE2327',fontWeight:500 ,marginBottom:10}}>Topic # 1</Text>
<Text style={{fontSize:15,color:'#07354B',fontWeight:500 ,marginBottom:5}}>Wren & Martin</Text>
<View style={{flexDirection:'row',}}>
    
    <View style={{height:30,backgroundColor:'#AE2327CC',color:'#FBF4F4',borderRadius:4,padding:4,width:'36%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#FBF4F4'}}>8 Exercise</Text>
    </View>
</View>
</View>
<View style={{width:'70%'}}>
    <View style={{height:'25%',backgroundColor:'#07354B',color:'#FBF4F4',borderRadius:4,padding:4,width:'47%',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
     <View style={{paddingRight:8}}>
     <Image source={require('../assets/done.png')} ></Image>
     </View>
     <View>
        <Text style={{color:'#FBF4F4'}}>Completed</Text>
        
     </View>
    </View>
    <Text style={{fontSize:10,color:'#07354B',marginTop:'27%'}}>Timeline</Text>
        <Text  style={{fontSize:10,color:'#AE2327'}}>Jan 14 - Feb 16</Text>
</View>
</View>

<View style={styles.extra}></View>
</ScrollView>
    </View>
  )
}

export default Topics

const styles = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        padding:'5%',
        height:'100%'
        
    },
  
    extra:{
        marginTop:50
    }
})