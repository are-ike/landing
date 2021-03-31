import React from "react"
import * as styles from "./mainstyle.module.css"
import Text from "../components/text/Text"
import Form from "../components/form/Form"
import Links from "../components/links/Links"
import logo from "../assets/Twinku.svg"
import { QueryClientProvider, QueryClient} from "react-query"
import { configure, notify} from "../components/notification/Toast"
import Seo from "../seo/Seo"
import landingImage from "../assets/landing.jpg"

const Home: React.FC = () => {

	const client = new QueryClient()
	configure()
	return (
		<QueryClientProvider client={client}>
			<Seo/>
			<div className={styles.container}>
				<div className={styles.nav} >
					<img src={logo} className={styles.img}/>
					<div className={styles.links}>
						<Links/>
					</div>
				</div>
				<div className={styles.top}>
					<div className={styles.left}>
						<div className={styles.left1}>
							<Text type="header">Connect.</Text>
							<Text type="text">
								Twinku allows you to
								connect and view your
								financial assets at a glance
							</Text>
						</div>
						<div className={styles.left2}>
							<Text type="header">Pass On.</Text>
							<Text type="text">
								When life happens, we assist
								by contacting and passing
								information about your connected
								assets to your loved ones
							</Text>
						</div>
					</div>
					<div className={styles.landingImage}>
						<img src={landingImage}/>
					</div>
				</div> 
				<div className={styles.formDiv}>
					<Form formType={1} notifyFunction={notify}/>
					<div className={styles.info}>
						<div>
							<Text type="header">Join the Waiting List</Text>
							<Text type="text">
                Be among the first to know
                when we launch
							</Text>
						</div>
						<Links/>
					</div>
				</div>
				<div className={styles.formDiv2}>
					<Text type="header">For Investors</Text>
					<Text style="center" type="text">
        We would be glad to welcome your investments in building Twinku. 
        Fill in your details to get started and we’ll get in touch.
					</Text>
					<div className={styles.bluebg}>
						<Form formType={2} notifyFunction={notify}/>
					</div>
				</div>
				<div className={styles.footer} >
        &copy; 2021 All Rights Reserved
				</div>

			</div>
		</QueryClientProvider>
	) 
}

export default Home