import React from "react"
import * as styles from "./Input.module.css"

type Props = {
	type:number
	formType:number
	error:string | undefined
	value:string
	name:string
	onChange: (e: React.ChangeEvent) => void
	onBlur: (e: React.ChangeEvent) => void
	touched:boolean | undefined
}

const Input: React.FC<Props> = (prop) => {
	const { type, error, value, formType, name, onBlur, onChange, touched } = prop
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
				<div className={formType == 1 ? styles.errorDiv: styles.errorDiv2}>
					<input 
						placeholder={placeholder} 
						className={styleArray.join(" ")}
						onChange={onChange}
						value={value}
						onBlur={onBlur}
						name={name}					
					/>
					{error && touched && error &&
					<p>{error}</p>
					}
				</div>
			)
		}
	}
	
	return <input 
		placeholder={placeholder} 
		className={styleArray.join(" ")}
		onChange={onChange}
		value={value}
		onBlur={onBlur}
		name={name}	
	/>
}

export default Input