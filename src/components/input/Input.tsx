import React from "react"
import * as styles from "./Input.module.css"

type Props = {
	type:number
	textChangeHandler: (a:number, t:string) => void
	error:string
	value:string
	removeErrorHandler: (type:number) => void
}

const Input: React.FC<Props> = (prop) => {
	const { type, textChangeHandler, error, value, removeErrorHandler } = prop
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
		if(error !== "Submission failed"){
			return (
				<div className={styles.errorDiv}>
					<input 
						placeholder={placeholder} 
						className={styleArray.join(" ")}
						onChange={(e) => textChangeHandler(type, e.target.value)}
						value={value}
						onFocus={() => {
							if(error){
								removeErrorHandler(type)
							}
						}}
						
					/>
					<p>{error}</p>
				</div>
			)
		}
	}

	return <input 
		placeholder={placeholder} 
		className={styleArray.join(" ")}
		onChange={(e) => textChangeHandler(type, e.target.value)}
		value={value}
		onFocus={() => {
			if(error){
				removeErrorHandler(type)
			}
		}}
	/>
}

export default Input