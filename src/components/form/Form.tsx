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
	const [showError, setShowError] = useState("")
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
		}
		else if(isError){
			setShowError("both")
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
	
	const onSubmit = () => {
		if(state.fullName == ""){
			prop.notifyFunction("Please fill in your name", "warn")
			setShowError("fullName")
		}
		else if(state.email == ""){
			prop.notifyFunction("Please fill in your email", "warn")
			setShowError("email")
		}else if(!isEmail(state.email) &&  state.email){
			prop.notifyFunction("Please enter a valid email", "warn")
			setShowError("email")
		}else{
			mutation.mutate(state)
			setShowError("")
		}
	}

	
	return(
		<div className={styleArray.join(" ")} onFocus={() => setShowError("")}>
			<Input 
				type={1} 
				textChangeHandler={textChangeHandler} 
				error={showError == "fullName" || showError ==  "both" ? true : false}
			/>
			<Input 
				type={2} 
				textChangeHandler={textChangeHandler} 
				error={showError == "email" || showError ==  "both" ? true : false}
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