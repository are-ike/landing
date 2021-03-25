import React from "react"
import * as styles from "./Button.module.css"

const Button = ({ size, children}) => {
	const styleArray = [styles.btn]
	if(size == 2){
		styleArray.push(styles.size2)
	}
	return (
		<div className={styleArray.join(" ")}>
			{children}
		</div>
	)
}

export default Button