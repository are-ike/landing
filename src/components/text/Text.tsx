import React from "react"
import * as styles from "./Text.module.css"

const Text = ({ direction, children}) => {
	const styleArray = [styles.text]

	if( direction == "right"){
		styleArray.push(styles.right)
	}

	return (
		<p className={styleArray.join(" ")}>{children}</p>
	)
}

export default Text