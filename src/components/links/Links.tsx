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
				</a>
				<p className={styles.text}>Instagram</p>
			</div>
			<div className={styles.link}>
				<a>
					<FaTwitter/>
				</a>
				<p className={styles.text}>Twitter</p>
			</div>
		</div>
	)
}

export default Links