import { StyleSheet, Text, View , Image, Button, TextInput, Touchable, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'

const ManageAssignment2= () => {
    const [text, onChangeText] = React.useState('Say about assignment');

  return (
    
        
        
             <View style={styles.container}>
             
             <ScrollView>
    <View style={styles.extra}></View>
    <Text style={{color:'#07354B',marginBottom:20, fontSize:13}}>Due: 10 Jun</Text>
      <Text style={{color:'#AE2327', fontSize:20,fontWeight:500,marginBottom:15,}}>Political Science</Text>
      <Text style={{color:'#07354B',marginBottom:20, fontSize:13}}>12 Points</Text>
      <Text style={{color:'#07354B',marginBottom:20, fontSize:13}}>Political Behavior: Investigates individual and collective political actions, including voting behavior, political participation, social movements, public opinion, and political communication.</Text>
       <Text style={{color:'#AE2327',marginBottom:20, fontSize:15}}>Attachments</Text>
       <Image source={require('../assets/new.png')} ></Image>
       <Text style={{color:'#07354B',fontSize:13, fontWeight:400, marginVertical:20}}>Revision Work Sheet </Text>
       <View style={{width:200,fontSize:11,marginBottom:20,}}>
               <Button title='Download All Attechments'  color={'#AE2327'}/>

       </View>
       <Text style={{color:'#AE2327',marginBottom:20, fontSize:15}}>Comment</Text>
       <TouchableOpacity>
        <View style={{flexDirection:'row'}}>
          <View style={{borderColor:'#AE2327', backgroundColor:'white', width:'95%',height:40, display:'flex' ,justifyContent:'center',alignItems:'center'}}>
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
</View> 

        </View>

         
      
       </TouchableOpacity>
       <View  style={{marginVertical:20 ,flexDirection:'row',}}>
         <View style={{marginHorizontal:5}}>
 <Image source={require('../assets/Avatar1.png')} style={{height:20,width:30 }}></Image>
 </View>
 <View style={{marginHorizontal:5 ,padding:5,borderColor:'#07354B' , width:280 ,borderRadius:15,borderWidth:1,padding:10}}>
    <Text style={{marginBottom:10 ,color:'#64748B',fontSize:14}}>
    2 mins
    </Text>
    <Text style={{color:'#191D23',fontSize:16}}>
    Lorem ipsum dolor sit amet, coetur adipiscing elit ut aliquam, purus sit amet  
    </Text>
    <View style={{flexDirection:'row',marginTop:20}}>
    <View>
        <Text style={{color:'#64748B',fontSize:14}}>
        15 Like
        </Text>
    </View>
    <View style={{marginLeft:'20%'}}>
    <Text style={{color:'#64748B',fontSize:14}} >
    6 Replies
    </Text>
    </View>
    </View>
 </View>
       </View>
      <View style={{paddingHorizontal:'7%',marginVertical:'5%'}}>
         <Button title='Submit Assignment' color={'#AE2327'}/>

      </View>
      </ScrollView>
      </View>
    
     
  
   
  )
}

export default ManageAssignment2

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(174, 35, 39, 0.05)',
        paddingLeft:'5%'
        
    },
  
    extra:{
        marginTop:50
    }
})