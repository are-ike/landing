import React from "react"
import * as styles from "./Text.module.css"

type Props = {
	type:string
	children:string
	style?:string
}

const Text: React.FC<Props> = (prop) => {
	const {type, children, style} = prop
	const styleArray = []
	if(type == "header"){
		styleArray.push(styles.header)
	}else {
		styleArray.push(styles.text)
	}

	if(style == "center"){
		styleArray.push(styles.center)
	}
	return (
		<p className={styleArray.join(" ")}>{children}</p>
	)
}

export default Text