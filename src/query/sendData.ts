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
	fetch("http://twinkubackend-dev.eba-2agndbpk.ca-central-1.elasticbeanstalk.com/graphql",
		{
			method: "POST",
			headers: {
				"Accept-Encoding": "gzip, deflate, br",
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Connection": "keep-alive",
				"DNT": "1",
				"Origin": "http://twinkubackend-dev.eba-2agndbpk.ca-central-1.elasticbeanstalk.com"
			},
			body: JSON.stringify({query: mutation})
		}
	)
	console.log(response)
	
}
export const trial = async (data) => {
	const {fullName, email, type} = data
	const mutation = 
	{
		title: fullName,
		body: email
	}
	const response = await
	fetch("https://jsonplaceholder.typicode.com/posts",
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



// curl 'http://twinkubackend-dev.eba-2agndbpk.ca-central-1.elasticbeanstalk.com/graphql' 
// -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 
// 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 
// 'Origin: http://twinkubackend-dev.eba-2agndbpk.ca-central-1.elasticbeanstalk.com' --data-binary '{"query":"mutation{\n  addUserToWaitList(waitlist: {\n    fullName: \"Bimbo Ayetoro\"\n    email: \"binbo@yh.co\"\n  })\n  \n}\n"}' --compressed
