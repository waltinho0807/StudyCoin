const baseUrl = process.env.NODE_ENV === "production" 
? process.env.NODE_ENV
: 'http://localhost:5000';

export default baseUrl;