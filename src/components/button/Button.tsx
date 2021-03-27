import React from "react"
import * as styles from "./Button.module.css"

type Props = {
	size:number
	submitFunction?:() => void
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
		<div className={styleArray.join(" ")} onClick={prop.submitFunction}>
			{prop.children}
		</div>
	)
}

export default Button