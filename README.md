# localApp
<h1 align="center">
🌐 localApp (MERN Stack)
</h1>

<p align="center">
	MERN - <strong>M</strong>ongoDB, <strong>E</strong>xpressjs, <strong>R</strong>eact, <strong>N</strong>odejs
</p>
<p>The app lists local Restaurants &amp; their menu online if available, Hotels, and Attractions
based on user preferences from google business API. Users can post requests, and services
offered and create events for the community and meetups in the application.</p>
<p>
This application is built using MERN stack.
</p>

<h2> Client </h2>
  <p>Client application is a Reactjs frontend.</p>

  <h3>Dependent Modules:</h3>
		<ul>
			<li>axios(for making api calls)</li>
      <li>bootstrap(for User Interface)</li>
        <li>    react</li>
        <li>    react-dom</li>
        <li>    react-router-dom(To handle routing)</li>
        <li>    react-bootstrap(for User Interface)</li>
		</ul>
		
<h2> Server </h2>
		<p>Middleware developed using Express JS and Node JS.</p>
		<h3>Dependent Modules:</h3>
		<ul>
			<li>body-parser</li>
         <li>connect-mongo-db-session</li>
         <li>cookie-parser</li>
         <li>cors</li>
         <li>dotenv</li>
         <li>express</li>
         <li>express-session</li>
         <li>express-validator</li>
         <li>goole-maps-services-js</li>
         <li>graphsql</li>
         <li>mongodb</li>
         <li>mongoose</li>
         <li>mongoose-findorcreate</li>
         <li>nodemon</li>
         <li>passport</li>
         <li>passport-google-oauth2</li>
         <li>passport-local</li>
         <li>passport-local-mongoose</li>
	</ul>		
	<h2>Google OAuth API</h2>
	<p>Authentication with Google.</p>		
	<h2>Google Places API</h2>
	<p>Google Places API used to display the restaurants near by user.</p>
	<h2>How to start the application</h2>
	<p>To start the middleware go to Server folder and use the below command to bring the middleware up. The server is configured to listen at port 5000.</p>
	<ul><li>npm start</li></ul>
	<p>To start the frontend go to Client folder and use the below command to bring the frontend server up. The react frontend is configured to listen at port 3000.</p>
	<ul><li>npm start</li></ul>
	
		
