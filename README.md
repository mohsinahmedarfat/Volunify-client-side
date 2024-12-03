# [VOLUNIFY](https://volunify-2c546.web.app)

Voluntify is a platform that connects volunteers with organizations or individuals in need of volunteer assistance. It facilitates both volunteering opportunities and volunteer recruitment.

### Features and Characteristics

- **Responsive Design**: The website is built to be fully responsive, ensuring a seamless experience across devices of all sizes.
- **Interactive User Interface**: Engage with our interactive user interface that enhances user experience and makes navigation intuitive.
- This is our [Home](https://volunify-2c546.web.app).
- If you're logged in, you can [add a volunteer post](https://volunify-2c546.web.app/add-volunteer) or more.
- If you're logged in, you can manage [your posts](https://volunify-2c546.web.app/my-posts).
- You can update or delete your volunteer post(s).
- If you're logged in, you can see the volunteer post's full details.

### Technologies used :
- react
- react router dom
- tailwind css
- firebase
- node.js
- express.js
- mongoDB

### npm packages used :
- [react-hot-toast](https://react-hot-toast.com/) used for toast.
- [sweetalert2](https://sweetalert2.github.io/) used for popup alert.
- [react-awesome-reveal](https://www.npmjs.com/package/react-awesome-reveal) used for animation.
- [react-datepicker](https://reactdatepicker.com/) used for datepicker.
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) used for dynamic title.
- [react-hook-form](https://react-hook-form.com/) used for form.
- [react-tooltip](https://react-tooltip.com/docs/getting-started) used for tooltip.
- [swiper](https://swiperjs.com/get-started) used for slider/carousel.
- so on

### Server side repo code is [here](https://github.com/mohsinahmedarfat/Volunify-server-side).
---

### If you clone this project you've to do some steps:
- Copy the repository URL
- Open a terminal window
- Navigate to your desired location
- Clone the repository: git clone <URL>
- Install the npm packages: npm install
#
### 1. Prerequisites
Ensure the following are installed:
- Node.js (LTS version recommended)
- MongoDB (Installed locally or use a cloud service like MongoDB Atlas)
- Git (To clone the repository)
#
### 2. Clone the Repository
Run the following command in a terminal:
```bash
git clone https://github.com/mohsinahmedarfat/Volunify-client-side.git
```
Navigate to the project directory:
```bash
cd <project-folder-name>
```
#
### 3. Install Dependencies
As the project has separate `client` and `server` folders:
Navigate to the client folder:
```bash
cd client
npm install
```
Navigate to the server folder:
```bash
cd ../server
npm install
```
#
### 4. Set Up Environment Variables
Add necessary environment variables for Firebase, MongoDB, and other configurations:
1. Create a `.env` file in the frontend folder.
2. Add variables such as:
```env
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
FIREBASE_PROJECT_ID=your-firebase-project-id
```
#
### 5. Start the Database
If using a local MongoDB server:
1. Open MongoDB Compass or run `mongod` in a terminal.
2. Ensure MongoDB is running.

If using MongoDB Atlas:
- Make sure the MONGO_URI in the `.env` file is set correctly with valid credentials.
#
### 6. Run the Project
As the project has separate folders:

Start the frontend:
```bash
cd client
npm start
```
Start the backend:
```bash
cd ../server
npm run dev
```
#
### 7. Access the Application
- Open a browser and navigate to `http://localhost:3000` for the frontend.
- And for the backend run on `http://localhost:5000`.
#
### Common Issues
- Missing `.env` Variables: Make sure users configure all required environment variables.
- Dependency Errors: Use `npm install` to ensure all packages are installed correctly.
- Database Connection: Ensure MongoDB is running or the cloud credentials are correct.
- Version Conflicts: Use the same Node.js version as specified in your project (if any).
