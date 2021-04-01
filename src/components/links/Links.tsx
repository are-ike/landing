import React from "react"
import * as styles from "./Links.module.css"
import {FaInstagram} from  "react-icons/fa"
import {FaTwitter} from  "react-icons/fa"


const Links: React.FC = () => {
	
	return (
		<div className={styles.container}>
			<div className={styles.link}>
				<a>
					<FaInstagram/>
					<p className={styles.text}>Instagram</p>
				</a>
			</div>
			<div className={styles.link}>
				<a href="https://twitter.com/connectTwinku" target="_blank" rel="noreferrer">
					<FaTwitter/>
					<p className={styles.text}>Twitter</p>
				</a>
			</div>
		</div>
	)
}

export default Links