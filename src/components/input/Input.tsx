import React from "react"
import * as styles from "./Input.module.css"

type Props = {
	type:number
	textChangeHandler: (a:number, t:string) => void
	error:boolean
}

const Input: React.FC<Props> = (prop) => {
	const { type, textChangeHandler, error } = prop
	const styleArray = [styles.input]
	let placeholder
	if(type == 1){
		placeholder = "Full Name"
	}
	if(type == 2){
		placeholder = "Email Address"
	}
	if(error){
		styleArray.push(styles.error)
	}
	return <input 
		placeholder={placeholder} 
		className={styleArray.join(" ")}
		onChange={(e) => textChangeHandler(type, e.target.value)}
	/>
}

export default Input