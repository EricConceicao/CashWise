import jwt from 'jsonwebtoken';

export async function createToken(data) {
	return jwt.sign({id: data}, process.env.SECRET_KEY, { expiresIn: "1h" });
}

export async function authenticate(req, res, next) {
	try {
		const token = req.headers['authorization'].split(' ')[1];
		
		const data = jwt.verify(token, process.env.SECRET_KEY);

		req.accessToken = data;

		next();
	} catch (err) {
		res.status(401).json({
			success: false,
			error: `Token inválido ${err}`
		})
	}
	
}
