export const addToWaitlist = async (data) => {
	const {fullName, email, type} = data
	let userType
	if(type == 1){
		userType = "User"
	}else{
		userType = "Investor"
	}
	const mutation = 
	`mutation{
		addToWaitList(waitlist: {
		  fullName: "${fullName}"
		  type: "${userType}"
		  email: "${email}"
		})
		
	  }`
	const response = await
	fetch("https://api.twinku.co/graphql",
		{
			method: "POST",
			headers: {
				"Accept-Encoding": "gzip, deflate, br",
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Connection": "keep-alive",
				"DNT": "1",
				"Origin": "https://api.twinku.co"
			},
			body: JSON.stringify({query: mutation})
		}
	)
	return response
}
export const trial = async (data) => {
	const {fullName, email, type} = data
	const mutation = 
	{
		title: fullName,
		body: email
	}
	const response = await
	fetch("https://jsonplaceholder.typicode.co",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				
			},
			body: JSON.stringify({query: mutation})
		}
	)
	return response.json()
	
}

