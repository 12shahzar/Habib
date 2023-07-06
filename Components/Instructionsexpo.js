import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const InstructionsExpo = () => {
  return (
    <View style={{marginTop:30,padding:15}}>
       <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontSize:20,color:"#AE2327",fontWeight:600,marginVertical:20}}>Instruction To Exam</Text>
       </View>
       <View>
       <Text style={{color:'#07354B',fontSize:13,marginBottom:10}}>The rules of online exams can vary depending on the institution or platform used. However, here are some common rules and guidelines that are often applicable to online exams:</Text>
       </View>
       <View>
       <Text style={{color:'#07354B',fontSize:13,marginBottom:10}}>1.Ensure that your computer or device meets the technical requirements specified for the online exam. This may include having a stable internet connection, a compatible web browser, and any necessary software or plugins </Text>
      <Text style={{color:'#07354B',fontSize:13,marginBottom:10}}>2.Find a quiet and well-lit location for your exam where you won't be disturbed. Make sure your surroundings are free from any unauthorized materials, such as textbooks, notes, or electronic devices, unless explicitly allowed by the exam instructions.</Text>
       <Text style={{color:'#07354B',fontSize:13,marginBottom:10}}>3.Be aware of the time limits for the exam and manage your time accordingly. Start the exam with enough time to complete it comfortably within the given duration. Keep an eye on the time remaining to ensure you can answer all the questions.</Text>
      <Text style={{color:'#07354B',fontSize:13,marginBottom:10}}>4.Read the exam instructions carefully before starting. Pay attention to any specific guidelines regarding question format, response length, file uploads, or any additional materials provided. Understand how the exam will be graded or marked.</Text>
      </View>
       <TouchableOpacity>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
       <View style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'#AE2327',width:'70%',borderRadius:20,height:36,marginTop:'10%'}}>
        <Text style={{color:'white',fontSize:16,fontWeight:600}}>Agree</Text>
        </View>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default InstructionsExpo

const styles = StyleSheet.create({})