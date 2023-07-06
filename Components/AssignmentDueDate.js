import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Demo1 from './Drop.js'
import Demo2 from './Drop1.js'
import Drop3 from './Drop2.js'
import Drop4 from './Drop3.js'
import Drop5 from './Drop4.js'
const AssignmentDueDate = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
        <View style={styles.extra}></View>
        <Demo1/>
        <View style={{flexDirection:'row'}}>
<View>
        <Text style={{color:'#07354B',fontSize:16, fontWeight:400}}>No Due Date</Text>
      </View>
<View style={{marginLeft:'15%'}}>
        <Demo2/>
      </View>
      </View>
      <View style={{flexDirection:'row',marginVertical:'10%'}}>
        <View>
          <Text style={{color:'#AE2327',fontSize:15, fontWeight:500, marginBottom:'6%'}}> Political Science</Text>
          <Text style={{color:'#07354B',fontSize:13, fontWeight:400}}>Due Date: Jan 1, 1970</Text>
        </View>
        <View style={{marginLeft:'20%'}}>
          <Text  style={{color:'#07354B',fontSize:13, fontWeight:400}}>Posted: Jan 1, 1970</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',marginBottom:'10%'}}>
        <View>
          <Text style={{color:'#AE2327',fontSize:15, fontWeight:500, marginBottom:'6%'}}> General Science</Text>
          <Text style={{color:'#07354B',fontSize:13, fontWeight:400}}>Due Date: Jan 1, 1970</Text>
        </View>
        <View style={{marginLeft:'20%'}}>
          <Text  style={{color:'#07354B',fontSize:13, fontWeight:400}}>Posted: Jan 1, 1970</Text>
        </View>
      </View>
      <View>
        <Drop3/>
      </View>
      <View>
        <Drop4/>
      </View>
      <View>
        <Drop5/>
      </View>
    </View>
    </ScrollView>
    
  )
}

export default AssignmentDueDate

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(174, 35, 39, 0.05)',
    paddingLeft:'5%',
    height:800
    
},
  
extra:{
    marginTop:50
}
})