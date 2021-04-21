import React, { useEffect, useState} from "react"
import Input from "../input/Input"
import Button from "../button/Button"
import * as styles from "./Form.module.css"
import Loader from "../../assets/loader.gif"
import { addToWaitlist, trial} from "../../query/sendData"
import { useMutation } from "react-query"
import isEmail from "validator/lib/isEmail"
import { Formik } from "formik"

type Props = {
	formType:number
	notifyFunction: (msg:string, s:string) => void
}
const Form: React.FC<Props> = (prop) => {
	const mutation = useMutation((data) => addToWaitlist(data))
	const { isLoading, isError, isSuccess } = mutation

	const styleArray = []
	if(prop.formType == 1){
		styleArray.push(styles.form1)
	}else{
		styleArray.push(styles.form2)
	}
	
	useEffect(() => {
		if(isSuccess){
			prop.notifyFunction("Sucessfully Submitted. Thank You!", "success")
	
		}
		else if(isError){	
			prop.notifyFunction("Submission Failed. Please try again", "error")
		}
					
	}, [isLoading])
	
	return(
		<Formik
			initialValues={{
				fullName: "",
				email: ""
			}}
			validate={values => {
				const errors: {
					fullName?:string
					email?:string
				} = {}
				if(!values.fullName) {
					errors.fullName = "Please fill in your full name"
				} 
				if (!values.email) {
					errors.email = "Please fill in your email"
				} else if (
					!isEmail(values.email)
				) {
					errors.email = "Invalid email address"
				}
				return errors
			}}
			onSubmit={(values, {resetForm}) => {
				const data = {
					fullName: values.fullName,
					email: values.email,
					type: prop.formType
				}
			
				mutation.mutate(data, {
					onSuccess: resetForm
				})
				
				
				
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
			}) => (
				<form onSubmit={handleSubmit} className={styleArray.join(" ")}>
					<Input 
						type={1}
						name="fullName"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.fullName}
						formType={prop.formType}
						error={errors.fullName}
						touched={touched.fullName}
					/>
					<Input 
						type={2}
						name="email"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
						formType={prop.formType}
						error={errors.email}
						touched={touched.email}
					/>
					{isLoading ? 
						<Button size={prop.formType} disable={true}>
							<img src={Loader} className={styles.loader}/>	
						</Button> 
						: 
						<Button size={prop.formType}>
							{prop.formType == 1 ? "Join List" : "Submit"}
						</Button>
					}
				</form>
			)}
		</Formik>
	)
}

export default Form

