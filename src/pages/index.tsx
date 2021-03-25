import React from "react"
import * as styles from "./mainstyle.module.css"
import Text from "../components/text/Text"
import Form from "../components/form/Form"
import logo from "../assets/Twinku.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.nav} >
        <img src={logo} className={styles.img}/>
      </div>
      <div className={styles.top}>
        <div className={styles.left}>
          <Text type="header">Connect.</Text>
          <Text type="text" width={1}>
          Twinku allows you to
          connect and view your
          financial assets at a glance
          </Text>
        </div>
        <div className={styles.right}>
          <Text type="header">Pass On.</Text>
          <Text type="text" width={2}>
          When life happens, we assist
          by contacting and passing
          information about your connected
          assets to your loved ones
          </Text>
        </div>
      </div> 
      <div className={styles.formDiv}>
          <Form formType={1}/>
          <div className={styles.info}>
            <Text type="header">Join the Waiting List</Text>
            <Text type="text" width={1}>
              Be among the first to know
              when we launch
            </Text>
          </div>
      </div>
      <div className={styles.formDiv2}>
        <Text type="header">For Investors</Text>
        <Text width={3} type="text">
        We would be glad to welcome your investments in building Twinku. 
        Fill in your details to get started and we’ll get in touch.
        </Text>
        <div>
          <Form formType={2}/>
        </div>
      </div>
      <div className={styles.footer} >
        &copy; 2020 All Rights Reserved
      </div>

    </div>
  ) 
}

