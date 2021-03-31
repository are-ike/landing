import React from "react"
import Text from "../components/text/Text"
import * as styles from "./mainstyle.module.css"
import {FaFrown} from "react-icons/fa"
import logo from "../assets/Twinku.svg"

const NotFound = () => {

	return (
		<div className={styles.notFoundContainer}>
			<div className={styles.nav} >
				<img src={logo} className={styles.img}/>
			</div>
			<div className={styles.notFound}>
				<FaFrown className={styles.icon}/>
				<Text type="lg-header">Sorry.</Text>
				<Text type="lg-header">{"What you're looking for couldn't be found"}</Text>
			</div>
		</div>
	)
}

export default NotFound