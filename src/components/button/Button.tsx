import React from "react"
import * as styles from "./Button.module.css"

type Props = {
	size:number
	disable?:boolean
}

const Button: React.FC<Props> = (prop) => {
	const styleArray = [styles.btn]
	
	if(prop.size == 2){
		styleArray.push(styles.size2)
	}
	if(prop.disable){
		styleArray.push(styles.disable)
	}
	return (
		<button className={styleArray.join(" ")} type={prop.disable ? "button" : "submit"}>
			{prop.children}
		</button>
	)
}

export default Button