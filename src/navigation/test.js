// // const fetch = require('node-fetch');

// const username = 's.shvelidze@sangu.edu.ge';
// const password = 'shvelo15';

// const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');
// const headers = {
//   Authorization: `Basic ${base64Credentials}`,
//   'Content-Type': 'application/json',
// };

// const requestBody = {
//   email: 's.shvelidze@sangu.edu.ge',
//   password: 'shvelo15',
// };

// const makeRequest = async () => {
//   try {
//     const response = await fetch('https://ums.sangu.edu.ge/auth/login', {
//       method: 'POST',
//       headers: headers,
//       body: JSON.stringify(requestBody),
//     });

//     // Extract and store the cookie value from the response headers
//     const cookie = extractCookie(response.headers);

//     if (cookie) {
//       console.log('Cookie:', cookie);
//     }

//     const data = await response.json();
//     console.log('Response Data:', data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // Function to extract the cookie value from the response headers
// const extractCookie = (headers) => {
//   const cookies = headers.raw()['set-cookie'];
//   if (cookies && cookies.length > 0) {
//     const cookie = cookies[0];
//     const cookieValue = cookie.split(';')[0];
//     return cookieValue;
//   }
//   return null;
// };

// // Call the function to make the request
// makeRequest();
