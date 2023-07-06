import { StyleSheet, Text, View,Image, ScrollView, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const English = () => {
  return (
   <View>
   <View style={styles.container}> 
  
    <View style={styles.extra}></View>
    <ScrollView>
     <Text style={{fontSize:20,fontWeight:600,color:'#AE2327',marginVertical:20}}>Online Exam System (Zoom App)</Text>


<View style={{height:640,backgroundColor:'#FFF',width:'100%',borderRadius:9,padding:0,marginBottom:'6%'}}>
<View style={{height:75}}>
    <Image source={require('../assets/Frame.png')} ></Image>

</View>
<View style={{flexDirection:'row',marginTop:'20%',padding:13}}>
    <View style={{}}>
        <Text style={{fontSize:16,fontWeight:600,color:'#AE2327'}}>English Grammar</Text>
        <Text style={{fontSize:13,fontWeight:400,color:'#07354B'}}>Wren & Martin</Text>
      
       
    </View>
    <View>
    <View style={{marginLeft:70}}>
    <View style={{flexDirection:'row',marginTop:'4%'}}>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
            <Image source={require('../assets/calendar.png')} ></Image>
            </View>
            <View>
            <Text style={{fontSize:13,fontWeight:400,color:'#07354B'}}>13-Jan-2k23</Text>
            </View>
        </View>
        <View  style={{flexDirection:'row'}}>
              <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:10}}>
            <Image source={require('../assets/chart.png')} ></Image>
            </View>
            <View>
            <Text style={{fontSize:13,fontWeight:400,color:'#07354B'}}>3 Hours</Text>
            </View>
        </View>
          
        </View>
    </View>
    
</View>
<View style={{padding:13}}>
        <Text style={{fontSize:14,color:'#07354B'}}>English grammar refers to the set of rules and principles that govern the structure and usage of the English language. It covers various aspects, including sentence structure, parts of speech, verb tenses, punctuation, and more</Text>
    </View>
    <View style={{padding:13}}>
        <Text style={{fontSize:14,color:'#07354B'}}>1.Parts of Speech</Text>
        <Text style={{fontSize:14,color:'#07354B'}}>2.Sentence Structure</Text>
        <Text style={{fontSize:14,color:'#07354B'}}>3.Verb Tenses</Text>
        <Text style={{fontSize:14,color:'#07354B'}}>4.Subject-Verb Agreement</Text>
        <Text style={{fontSize:14,color:'#07354B'}}>5.Pronouns</Text>
        <Text style={{fontSize:14,color:'#07354B'}}>6.Adjectives and Adverbs</Text>
        <Text style={{fontSize:14,color:'#07354B'}}>7.Punctuation</Text>
        <Text style={{fontSize:14,color:'#07354B'}}>8.Sentence Agreement</Text>
        <Text style={{fontSize:14,color:'#07354B'}}>9.Word Order</Text>
        <Text style={{fontSize:14,color:'#07354B'}}>10.Conjunctions and Prepositions</Text>
    </View>
    <TouchableOpacity>
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10%'}}>
    <View style={{flexDirection:'row',backgroundColor:'#AE2327',display:'flex',justifyContent:'center',alignItems:'center',height:40,width:'75%',borderRadius:3}}>
            <View>
            <Image source={require('../assets/Video.png')} ></Image>
            </View>
            <View>
                <Text style={{fontSize:15,color:'#FFFFFF',marginLeft:10}}>Start Exam</Text>
            </View>
        </View>
    </View>
     </TouchableOpacity>
</View>


<View style={styles.extra}></View>
</ScrollView>
    </View>
   </View>
    
  )
}

export default English

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