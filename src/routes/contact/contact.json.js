export const post = async (request) => {
	const name = request.body.get('name');
	const email = request.body.get('email');
	const content = encodeURI(request.body.get('content')).replace(/%20/g, '+');

	const googleFormID = '1FAIpQLSeV5HbmyAk6GdwbKygcVNRyuXkgy-nPnwuMp5ZMA4eeFMDhEA';
	const googleFormBaseUrl = `https://docs.google.com/forms/d/e/${googleFormID}/formResponse?usp=pp_url`;
	const googleFormEntries = `entry.549113336=${name}&entry.1125849242=${email}&entry.24734334=${content}&submit=Submit`;

	const res = await fetch(`${googleFormBaseUrl}&${googleFormEntries}`);

	if (!res.ok) {
		return {
			status: 404,
			body: {
				message: 'An error occurred. Please try again later.'
			}
		};
	}

	return {
		status: 200,
		body: {
			message: 'Your message has been sent. Thank you!'
		}
	};
};
