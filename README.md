A simple URL shortener built with Node.js, Express, MongoDB, and EJS.  
Users can register, log in, shorten long URLs, and track analytics (clicks, visit history).
## Features
- User authentication with JWT (login/register)
- Shorten long URLs
- Redirect to original URL
- Track visit history and analytics
- Role-based access control
## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- EJS (templating engine)
## Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/keshav2003-inf/Short_url_node_app.git
   cd Short_url_node_app
2. npm install
Create a .env file and add:

3. MONGO_URI=mongodb://127.0.0.1:27017/shortURL_app
JWT_SECRET=your_secret_key
PORT=8001

4. npm start
5. ### Usage
```markdown
## Usage
- Go to `http://localhost:8001`
- Register or log in
- Enter a long URL to generate a short link
- Access analytics at `/analytics/:shortId`
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.
## License
This project is licensed under the MIT License.
