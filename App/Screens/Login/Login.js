import React, {useState, useN} from 'react'
import {StyleSheet, View, Text, Dimensions, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native'
import {images} from 'Components/ImageComponent'
const {width, height} = Dimensions.get('window')



const Login = () =>{
    return(
        <View style={styles.container}>
            {/* <StatusBar translucent={false} backgroundColor='transparent' barStyle="light-content"/> */}
            <ImageBackground source={images.background_image} style={styles.background}>
                <View style={styles.card_view}>
                    <Image source={images.logo} style={styles.logo}/>
                    <TextInput
                        style={styles.input_text}
                        onChangeText={(text)=>console.log('kkk', text)}
                        placeholder={'Mobile number'}
                        keyboardType='numeric'
                        returnKeyType='next'
                        maxLength={10}
                        onSubmitEditing={() => this.passwordRef.focus()}
                    />
                    <TextInput
                        style={styles.input_text}
                        ref={passwordRef => this.passwordRef = passwordRef}
                        onChangeText={(text)=>console.log('kkk', text)}
                        placeholder={'Password'}
                        returnKeyType='done'
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width,
        height,
        flex: 1,
    },
    background:{
        alignItems: 'center',
        justifyContent: 'center',
        width, 
        height, 
        resizeMode: 'cover'
    },
    logo:{
        width: 110,
        height: 110
    },
    card_view:{
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 400,
        width: width-40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.12,
        shadowRadius: 2,
        borderRadius: 10,
        alignSelf: 'center',
        elevation: 5,
        padding: 20
    },
    input_text:{
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        height: 45,
        marginTop: 20,
        textAlign: 'center'
    }
})

export default Login