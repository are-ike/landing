import React, { useEffect, useState } from "react"
import Input from "../input/Input"
import Button from "../button/Button"
import * as styles from "./Form.module.css"
import Loader from "../../assets/loader.gif"
import { addToWaitlist, trial} from "../../query/sendData"
import { useMutation } from "react-query"
import isEmail from "validator/lib/isEmail"

type Props = {
	formType:number
	notifyFunction: (msg:string, s:string) => void
}
const Form: React.FC<Props> = (prop) => {
	const [state, setState] = useState({
		fullName: "",
		email: ""
	})
	const data = {
		...state,
		type: prop.formType
	}
	const [showError, setShowError] = useState({
		fullName: "",
		email: ""
	})
	const mutation = useMutation((data) => addToWaitlist(data))
	const { isLoading, isError, isSuccess } = mutation

	const styleArray = []
	if(prop.formType == 1){
		styleArray.push(styles.form1)
	}else{
		styleArray.push(styles.form2)
	}

	useEffect(() => {
		if(isSuccess){
			prop.notifyFunction("Sucessfully Submitted. Thank You!", "success")
			setState({
				fullName: "",
				email: ""
			})
		}
		else if(isError){
			setShowError({
				fullName: "Submission failed",
				email: "Submission failed"
			})
			prop.notifyFunction("Submission Failed. Please try again", "error")
		}
					
	}, [isLoading])

	const textChangeHandler = (type:number, text:string) => {
		const newState = {...state}
		if(type == 1){
			newState.fullName = text
		}
		if(type == 2){
			newState.email = text
		}
		setState(newState)
	}
	
	const removeError = (type:number) => {
		const newError = {...showError}
		if(type == 1){
			newError.fullName = ""
		}
		if(type == 2){
			newError.email = ""
		}
		setShowError(newError)
	}

	const onSubmit = () => {
		const newError = {...showError}
		if(state.fullName == ""){
			newError.fullName = "Please fill in your full name"
		}
		else if(state.email == ""){
			newError.email = "Please fill in your email"
		}else if(!isEmail(state.email) &&  state.email){
			newError.email= "Please enter a valid email"
		}else{
			mutation.mutate(data)
		}
		setShowError(newError)
	}

	
	return(
		<div className={styleArray.join(" ")}>
			<Input 
				type={1}
				value={state.fullName} 
				textChangeHandler={textChangeHandler} 
				error={showError.fullName.length ? showError.fullName : ""}
				removeErrorHandler={removeError}
			/>
			<Input 
				type={2}
				value={state.email} 
				textChangeHandler={textChangeHandler} 
				error={showError.email.length ? showError.email : ""}
				removeErrorHandler={removeError}
			/>
			{isLoading ? 
				<Button size={prop.formType} disable={true}>
					<img src={Loader} className={styles.loader}/>	
				</Button> 
				: 
				<Button size={prop.formType} submitFunction={onSubmit}>
					{prop.formType == 1 ? "Join List" : "Submit"}
				</Button>
			}
		</div>
	)
}

export default Form