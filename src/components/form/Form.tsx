import React, { useState } from "react"
import Input from "../input/Input"
import Button from "../button/Button"
import * as styles from "./Form.module.css"

type Props = {
	formType:number
}
const Form: React.FC<Props> = ({formType}) => {
	const [state, setState] = useState({
		fullName: "",
		email: ""
	})

	const textChangeHandler = (type, text) => {
		const newState = {...state}
		if(type == 1){
			newState.fullName = text
		}
		if(type == 2){
			newState.email = text
		}
		setState(newState)
	}
	
	return(
		<div className={formType == 1 ? styles.form1: styles.form2 }>
			<Input type={1} textChangeHandler={textChangeHandler}/>
			<Input type={2} textChangeHandler={textChangeHandler}/>
			<Button size={formType}>Join</Button>
		</div>
	)
}

export default Form