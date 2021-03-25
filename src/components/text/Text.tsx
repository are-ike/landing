import React from "react"
import * as styles from "./Text.module.css"

type Props = {
	type:string
	children:string
	width?:number
}

const Text: React.FC<Props> = ({type, children, width}) => {
	const styleArray = []
	if(type == "header"){
		styleArray.push(styles.header)
	}else {
		styleArray.push(styles.text)
	}

	if(width == 1){
		styleArray.push(styles.w1)
	}
	if(width == 2){
		styleArray.push(styles.w2)
	}
	if(width == 3){
		styleArray.push(styles.w3)
	}
	return (
		<p className={styleArray.join(" ")}>{children}</p>
	)
}

export default Text