import React from "react";
import { TextInput, TouchableOpacity, StyleSheet,View, Text } from "react-native";
import { Colors } from '../Theme';
import Layout from '../Layout'
import useWallet, {getError} from '../../useWallet';

 const Reset_digit = ({navigation}:any) => {
// 	const { call, update, loading} = useWallet(); 
// 	const [status, setStatus] = React.useState({
// 		number1 : '', 
// 		number2 : '', 
// 		number3 : '', 
// 		number4 : '', 
// 		number5 : '', 
// 		number6 : '', 
// 		errmsg : '', 
// 		success :''
// 	}); 
// 	const refNumber1 = React.useRef<TextInput>(null);
// 	const refNumber2 = React.useRef<TextInput>(null);
// 	const refNumber3 = React.useRef<TextInput>(null);
// 	const refNumber4 = React.useRef<TextInput>(null);
// 	const refNumber5 = React.useRef<TextInput>(null);
// 	const refNumber6 = React.useRef<TextInput>(null);
// 	const updateStatus = (params:{[key:string]:string|number|boolean}) => setStatus({...status, ...params});
 
// 	const goLogin = () => {
// 		navigation.navigate('AuthLogin', { name: 'AuthLogin' })
// 	}

// 	const submit = async () => {
// 		if(isNaN(parseInt(status.number1))){ updateStatus({errmsg : 'invalid number 1'}); refNumber1.current.focus(); return; }
// 		if(isNaN(parseInt(status.number2))){ updateStatus({errmsg : 'invalid number 2'}); refNumber2.current.focus(); return; }
// 		if(isNaN(parseInt(status.number3))){ updateStatus({errmsg : 'invalid number 3'}); refNumber3.current.focus(); return; }
// 		if(isNaN(parseInt(status.number4))){ updateStatus({errmsg : 'invalid number 4'}); refNumber4.current.focus(); return; }
// 		if(isNaN(parseInt(status.number5))){ updateStatus({errmsg : 'invalid number 5'}); refNumber5.current.focus(); return; }
// 		if(isNaN(parseInt(status.number6))){ updateStatus({errmsg : 'invalid number 6'}); refNumber6.current.focus(); return; }
// 		const number=status.number1+status.number2+status.number3+status.number4+status.number5+status.number6;
// 		update({loading : true});
// 	 	const result = await call("/set-pincode", {number})
// 		setTimeout(() => {
// 			update({loading : false});
// 			if (result !== null) {
// 				if(result.error !== undefined){
// 					updateStatus({errmsg : getError(result.error)})
// 				} else {  
// 					updateStatus({success : 'Your pincode is changed.'})
// 				}
// 			} else {
// 				updateStatus({errmsg : getError(0)})
// 				refNumber1.current.focus(); 
// 			} 
// 		}, 500);
// 	}
// 	const onChangeText = (text : string, key : number) => { 
// 		let newText = '';
// 		let numbers = '0123456789.'; 
// 		for (var i=0; i < text.length; i++) {
// 			if(numbers.indexOf(text[i]) > -1 ) {
// 		 		newText = newText + text[i];
// 			} 
// 		} 
// 		if(text === "")newText=""; 
// 		switch(key){
// 			case 1 : updateStatus({number1 : newText}); if(newText !== "") refNumber2.current.focus(); break;
// 			case 2 : updateStatus({number2 : newText}); if(newText !== "") refNumber3.current.focus(); break;
// 			case 3 : updateStatus({number3 : newText}); if(newText !== "") refNumber4.current.focus(); break;
// 			case 4 : updateStatus({number4 : newText}); if(newText !== "") refNumber5.current.focus(); break;
// 			case 5 : updateStatus({number5 : newText}); if(newText !== "") refNumber6.current.focus(); break;
// 			case 6 : updateStatus({number6 : newText}); break;
// 			default : break;
// 		}
		
// 	}; 
// 	return (
// 		<Layout>
// 			<View style = {styles.middle}> 
// 				<View style = {styles.backpanel}> 
// 					<Text style = {styles.text}>Enter a 6 digit code</Text>
// 					<View style = {styles.row}> 
// 						<TextInput
// 							ref = {refNumber1}
// 							style = {styles.input}
// 							onChangeText = {(val)=>onChangeText(val, 1)}
// 							value = {status.number1}
// 							placeholder="-" 
// 							keyboardType="numeric"
// 							placeholderTextColor = {Colors.DarkPrimary} 
// 							maxLength = {1}
// 						/>  
// 						<TextInput
// 							ref = {refNumber2}
// 							style = {styles.input}
// 							onChangeText = {(val)=>onChangeText(val, 2)}
// 							value = {status.number2}
// 							placeholder="-" 
// 							keyboardType="numeric"
// 							placeholderTextColor = {Colors.DarkPrimary} 
// 							maxLength = {1}
// 						/>  
// 						<TextInput
// 							ref = {refNumber3}
// 							style = {styles.input}
// 							onChangeText = {(val)=>onChangeText(val, 3)}
// 							value = {status.number3}
// 							placeholder="-" 
// 							keyboardType="numeric"
// 							placeholderTextColor = {Colors.DarkPrimary} 
// 							maxLength = {1}
// 						/>  
// 						<TextInput
// 							ref = {refNumber4}
// 							style = {styles.input}
// 							onChangeText = {(val)=>onChangeText(val, 4)}
// 							value = {status.number4}
// 							placeholder="-" 
// 							keyboardType="numeric"
// 							placeholderTextColor = {Colors.DarkPrimary} 
// 							maxLength = {1}
// 						/>  
// 						<TextInput
// 							ref = {refNumber5}
// 							style = {styles.input}
// 							onChangeText = {(val)=>onChangeText(val, 5)}
// 							value = {status.number5}
// 							placeholder="-" 
// 							keyboardType="numeric"
// 							placeholderTextColor = {Colors.DarkPrimary} 
// 							maxLength = {1}
// 						/>  
// 						<TextInput
// 							ref = {refNumber6}
// 							style = {styles.input}
// 							onChangeText = {(val)=>onChangeText(val, 6)}
// 							value = {status.number6}
// 							placeholder="-" 
// 							keyboardType="numeric"
// 							placeholderTextColor = {Colors.DarkPrimary} 
// 							maxLength = {1}
// 						/>  
// 					</View>
// 					<View>
// 						<Text style = {styles.error}>{status.errmsg}</Text>
// 					</View>
// 					<View>
// 						<Text style = {styles.success}>{status.success}</Text>
// 					</View>
// 					<TouchableOpacity style = {styles.submit1} onPress = {submit}>
// 						<Text style = {{color:'white'}}>RECEND</Text>
// 					</TouchableOpacity> 
// 					<TouchableOpacity style = {styles.submit} onPress = {goLogin}>
// 						<Text style = {{color:'white'}}>OK</Text>
// 					</TouchableOpacity>  
// 				</View> 
// 			</View> 
// 		</Layout>
// 	)
};

// const styles = StyleSheet.create({
// 	row : {
// 		display : 'flex',
// 		justifyContent : 'space-between',
// 		flexWrap : 'wrap',
// 		flexDirection : "row", 
// 		margin : '5%',
// 		marginBottom : 0
// 	},
// 	input : {
// 		height : 38, 
// 		width : 38,
// 		borderWidth : 0.2, 
// 		borderRadius : 2,
// 		textAlign : 'center',
// 		borderColor : "#e6e1a5",
// 		color : "#e6e1a5", 
// 	}, 
// 	link : {
// 		color : Colors.DarkPrimary, 
// 		textAlign : "center", 
// 		fontSize : 12, 
// 		textDecorationLine : "underline", 
// 		margin : 10
// 	},
// 	submit : {
// 		alignItems : "center",
// 		borderColor : '#a48957',
// 		borderWidth : 1,
// 		backgroundColor : "#010101",
// 		padding : 9,
// 		borderRadius : 5, 
// 		color : 'white', 
// 		width : '90%',
// 		marginLeft : 'auto',
// 		marginRight : 'auto',
// 		marginBottom : 10
// 	},
// 	submit1 : {
// 		alignItems : "center",
// 		borderColor : 'white',
// 		borderWidth : 1,
// 		backgroundColor : "#010101",
// 		padding : 9,
// 		borderRadius : 5, 
// 		color : 'white', 
// 		width : '90%',
// 		marginLeft : 'auto',
// 		marginRight : 'auto',
// 		marginBottom : 10
// 	},
// 	middle : {
// 		flex : 1,
// 		flexDirection : "column",
// 		justifyContent : "center",
// 		transform : [{ translateY : -50 }],
// 	},
// 	backpanel : {
// 		borderRadius : 8,
// 		margin : 20, 
// 		padding : 12,
// 		backgroundColor : 'rgba(0,0,0,0.5)'
// 	},
// 	text : {
// 		color : "white",
// 		fontSize : 18,
// 		lineHeight : 40,
// 		textAlign : "center"
// 	},
// 	error : {
// 		color : 'red',
// 		padding : 7, 
// 		borderRadius : 5, 
// 		textAlign : "center",
// 	},
// 	success : {
// 		color : 'yellow',
// 		padding : 7, 
// 		borderRadius : 5, 
// 		textAlign : "center",
// 	}
// });

export default Reset_digit;