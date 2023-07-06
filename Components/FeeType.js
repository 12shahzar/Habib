import { StyleSheet, Text, View,Image, ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'

const FeeType = () => {
  return (
   
    <View style={styles.container}> 
    <View style={styles.extra}></View>
    <ScrollView>
    <Text style={{fontSize:32,fontWeight:600,color:'#AE2327'}}>Fee</Text>
     <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{width:70}}>
     <View style={{height:25,backgroundColor:'#AE2327',width:60,display:'flex',justifyContent:'center',alignItems:'center',marginVertical:15,borderRadius:4,marginRight:10}}>
          <Text style={{color:'#FBF4F4'}}>All</Text>
        </View>
      </TouchableOpacity>
       <TouchableOpacity  style={{width:70}}>
      <View style={{height:25,backgroundColor:'#FBF4F4',borderColor:'#AE2327',borderWidth:1,width:60,display:'flex',justifyContent:'center',alignItems:'center',marginVertical:15,borderRadius:4,marginRight:10}}>
        <Text style={{color:'#AE2327'}}>Paid</Text>
        </View>
        </TouchableOpacity>
      <TouchableOpacity style={{width:70}}>
        <View style={{height:25,backgroundColor:'#FBF4F4',borderColor:'#AE2327',borderWidth:1,width:60,display:'flex',justifyContent:'center',alignItems:'center',marginVertical:15,borderRadius:4,marginRight:10}}>
        <Text style={{color:'#AE2327'}}>Unpaid</Text>
       </View>
     </TouchableOpacity>
       </View>


<View style={{height:100,backgroundColor:'#FFF',width:'100%',borderRadius:9,flexDirection:'row',marginBottom:'6%'}}>
<View style={{flexDirection:'row'}}>
<View style={{backgroundColor:"#AE2327",width:50,borderBottomRightRadius:50,height:45,borderTopLeftRadius:9}}>

</View>
<View style={{flexDirection:"column",paddingTop:18,paddingLeft:12,width:'50%'}}>
<Text style={{fontSize:20,fontWeight:600,color:'#AE2327'}}>Transport Fee</Text>

<View style={{flexDirection:'row',marginTop:8}}>
<View  style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
<Image source={require('../assets/checkcalendar.png')}></Image>

</View>
<View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:13,fontWeight:400,color:'#000000'}}>Dec 10, 2022</Text>
</View>
</View>
</View>
<View style={{width:'35%',display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
<Text style={{fontSize:15,fontWeight:500,color:'#07354B'}}>Rs 8,000</Text>
<TouchableOpacity>
<View style={{width:80,height:30,backgroundColor:'#AE2327',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:6,marginTop:10}}>
<Text style={{fontSize:12,fontWeight:500,color:'#FFFFFF'}}>Pay Now</Text>
</View>
</TouchableOpacity>
</View>
<View>
</View>
</View>
</View>
<View style={{height:100,backgroundColor:'#FFF',width:'100%',borderRadius:9,flexDirection:'row',marginBottom:'6%'}}>
<View style={{flexDirection:'row'}}>
<View style={{backgroundColor:"#AE2327",width:50,borderBottomRightRadius:50,height:45,borderTopLeftRadius:9}}>

</View>
<View style={{flexDirection:"column",paddingTop:18,paddingLeft:12,width:'50%'}}>
<Text style={{fontSize:20,fontWeight:600,color:'#AE2327'}}>Hostel Fee</Text>

<View style={{flexDirection:'row',marginTop:8}}>
<View  style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
<Image source={require('../assets/checkcalendar.png')}></Image>

</View>
<View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:13,fontWeight:400,color:'#000000'}}>Dec 10, 2022</Text>
</View>
</View>
</View>
<View style={{width:'35%',display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
<Text style={{fontSize:15,fontWeight:500,color:'#07354B'}}>Rs 8,000</Text>
<TouchableOpacity>
<View style={{width:80,height:30,backgroundColor:'#07354B',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:6,marginTop:10}}>
<Text style={{fontSize:12,fontWeight:500,color:'#FFFFFF'}}>Pay Now</Text>
</View>
</TouchableOpacity>
</View>
<View>
</View>
</View>
</View>
<View style={{height:100,backgroundColor:'#FFF',width:'100%',borderRadius:9,flexDirection:'row',marginBottom:'6%'}}>
<View style={{flexDirection:'row'}}>
<View style={{backgroundColor:"#AE2327",width:50,borderBottomRightRadius:50,height:45,borderTopLeftRadius:9}}>

</View>
<View style={{flexDirection:"column",paddingTop:18,paddingLeft:12,width:'50%'}}>
<Text style={{fontSize:20,fontWeight:600,color:'#AE2327'}}>Transport Fee</Text>

<View style={{flexDirection:'row',marginTop:8}}>
<View  style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
<Image source={require('../assets/checkcalendar.png')}></Image>

</View>
<View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:13,fontWeight:400,color:'#000000'}}>Dec 10, 2022</Text>
</View>
</View>
</View>
<View style={{width:'35%',display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
<Text style={{fontSize:15,fontWeight:500,color:'#07354B'}}>Rs 8,000</Text>
<TouchableOpacity>
<View style={{width:80,height:30,backgroundColor:'#AE2327',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:6,marginTop:10}}>
<Text style={{fontSize:12,fontWeight:500,color:'#FFFFFF'}}>Pay Now</Text>
</View>
</TouchableOpacity>
</View>
<View>
</View>
</View>
</View>
<View style={{height:100,backgroundColor:'#FFF',width:'100%',borderRadius:9,flexDirection:'row',marginBottom:'6%'}}>
<View style={{flexDirection:'row'}}>
<View style={{backgroundColor:"#AE2327",width:50,borderBottomRightRadius:50,height:45,borderTopLeftRadius:9}}>

</View>
<View style={{flexDirection:"column",paddingTop:18,paddingLeft:12,width:'50%'}}>
<Text style={{fontSize:20,fontWeight:600,color:'#AE2327'}}>Transport Fee</Text>

<View style={{flexDirection:'row',marginTop:8}}>
<View  style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
<Image source={require('../assets/checkcalendar.png')}></Image>

</View>
<View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:13,fontWeight:400,color:'#000000'}}>Dec 10, 2022</Text>
</View>
</View>
</View>
<View style={{width:'35%',display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
<Text style={{fontSize:15,fontWeight:500,color:'#07354B'}}>Rs 8,000</Text>
<TouchableOpacity>
<View style={{width:80,height:30,backgroundColor:'#AE2327',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:6,marginTop:10}}>
<Text style={{fontSize:12,fontWeight:500,color:'#FFFFFF'}}>Pay Now</Text>
</View>
</TouchableOpacity>
</View>
<View>
</View>
</View>
</View>
<View style={{height:100,backgroundColor:'#FFF',width:'100%',borderRadius:9,flexDirection:'row',marginBottom:'6%'}}>
<View style={{flexDirection:'row'}}>
<View style={{backgroundColor:"#AE2327",width:50,borderBottomRightRadius:50,height:45,borderTopLeftRadius:9}}>

</View>
<View style={{flexDirection:"column",paddingTop:18,paddingLeft:12,width:'50%'}}>
<Text style={{fontSize:20,fontWeight:600,color:'#AE2327'}}>Transport Fee</Text>

<View style={{flexDirection:'row',marginTop:8}}>
<View  style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
<Image source={require('../assets/checkcalendar.png')}></Image>

</View>
<View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:13,fontWeight:400,color:'#000000'}}>Dec 10, 2022</Text>
</View>
</View>
</View>
<View style={{width:'35%',display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
<Text style={{fontSize:15,fontWeight:500,color:'#07354B'}}>Rs 8,000</Text>
<TouchableOpacity>
<View style={{width:80,height:30,backgroundColor:'#AE2327',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:6,marginTop:10}}>
<Text style={{fontSize:12,fontWeight:500,color:'#FFFFFF'}}>Pay Now</Text>
</View>
</TouchableOpacity>
</View>
<View>
</View>
</View>
</View>
<View style={styles.extra}></View>
</ScrollView>
    </View>
  )
}

export default FeeType

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