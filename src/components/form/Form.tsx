import React, { useEffect, useState } from "react"
import Input from "../input/Input"
import Button from "../button/Button"
import * as styles from "./Form.module.css"
import Loader from "../../assets/loader.gif"
import { FaCheck } from "react-icons/fa"

type Props = {
	formType:number
}
const Form: React.FC<Props> = (prop) => {
	const [state, setState] = useState({
		fullName: "",
		email: ""
	})
	const [submit, setSubmit] = useState(false)
	const [showSuccess, setShowSuccess] = useState(false)

	useEffect(() => {
		if(submit == true){
			//json
			//.then
			//set submit false
			//if success
			//settimeout showsuccess
			//showsuccess false
			//if fail
			setTimeout(() => {
				setSubmit(false)
				setShowSuccess(true)
			},2000)
		}
		if(showSuccess){
			setTimeout(() => {
				setShowSuccess(false)
			},2000)	
		}
			
		

	}, [submit, showSuccess])

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
		setSubmit(true)
	}
	return(
		<div className={prop.formType == 1 ? styles.form1: styles.form2 }>
			{}
			<Input type={1} textChangeHandler={textChangeHandler}/>
			<Input type={2} textChangeHandler={textChangeHandler}/>
			{submit ? 
				<Button size={prop.formType} disable={true}>
					<img src={Loader} className={styles.loader}/>	
				</Button> 
				: showSuccess ?
					<Button size={prop.formType} success={true}>
						<FaCheck className={styles.icon}/>
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