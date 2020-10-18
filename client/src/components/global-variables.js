let DATABASE_URL = "http://localhost:5000";
if (process.env.NODE_ENV === 'production') {
	DATABASE_URL = "";
}

const globalV = {
	DATABASE_URL

};

export default globalV