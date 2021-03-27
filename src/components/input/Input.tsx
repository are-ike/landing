import React from "react"
import * as styles from "./Input.module.css"

type Props = {
	type:number
	textChangeHandler: (a:number, t:string) => void
}
const Input: React.FC<Props> = (prop) => {
	const { type, textChangeHandler } = prop
	let placeholder
	if(type == 1){
		placeholder = "Full Name"
	}
	if(type == 2){
		placeholder = "Email Address"
	}
	return <input 
		placeholder={placeholder} 
		className={styles.input}
		onChange={(e) => textChangeHandler(type, e.target.value)}
	/>
}

export default Input