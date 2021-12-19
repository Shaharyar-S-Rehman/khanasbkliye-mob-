import React, { useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
export default function Dashboard({ navigation }) {
  const [name, setName] = useState(null)
  const [fatherName, setfatherName] = useState(null)
  const [cnic, setcnic] = useState(null)
  const [dob, setdob] = useState(null)
  const [fmember, setfmember] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  const formSubmit = async () => {
    if (!name ||
      !fatherName ||
      !cnic ||
      !dob ||
      !fmember) {
      setShowAlert(true)
      return
    }

    const dbRef = collection(db, "requestForm")
    await addDoc(dbRef, {
      name,
      fatherName,
      cnic,
      dob,
      fmember,
      status : "pending"
    })
      .then(res => {
        console.log("your data is saved ", res);
      })
      .catch(err => console.log(err))




  }

  return (
    <Background>
      <Logo />
      <View style={{
        width: "100%",
        // backgroundColor: "orange"
      }}>
        <TextInput style={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          width: "100%",
          padding: 8,
          borderRadius: 8,
          marginVertical: 10

        }}
          placeholder="Enter Name"
          onChangeText={(e) => setName(e)}
        />

        <TextInput style={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          width: "100%",
          padding: 8,
          borderRadius: 8,
          marginVertical: 10

        }}
          placeholder="Enter Father Name"
          onChangeText={(e) => setfatherName(e)}

        />

        <TextInput style={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          width: "100%",
          padding: 8,
          borderRadius: 8,
          marginVertical: 10

        }}
          placeholder="Enter Cnic"
          onChangeText={(e) => setcnic(e)}

        />

        <TextInput style={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          width: "100%",
          padding: 8,
          borderRadius: 8,
          marginVertical: 10

        }}
          placeholder="Enter DoB"
          onChangeText={(e) => setdob(e)}

        />

        <TextInput style={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          width: "100%",
          padding: 8,
          borderRadius: 8,
          marginVertical: 10

        }}
          placeholder="Enter Number Of family Number"
          onChangeText={(e) => setfmember(e)}

        />


        <TouchableOpacity onPress={() => {
          formSubmit()
        }}>
          <Text style={{
            backgroundColor: "#89C343",
            borderRadius: 8,
            justifyContent: "center",
            textAlign: "center",
            padding: 8
          }}>FORM SUBMIT</Text>
        </TouchableOpacity>
      </View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Invalid Data"
        message="Enter Correct Data!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        // showCancelButton={true}
        showConfirmButton={true}
        // cancelText="No, cancel"
        confirmText="close"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          setShowAlert(false)

        }}
      />
    </Background>
  )
}
