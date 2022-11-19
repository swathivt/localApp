const express = require("express");
const session = require("express-session");
const router = express.Router();
const signup = require("../models/user.js");
const UserRequest = require("../models/userRequest");

require("dotenv").config({ path: "./config.env" });
const axios = require("axios");
const passport = require("passport");
//const { session } = require("passport");

const apiKey = process.env.APIKEY;

checkAuthenticated = (req, res, next) => {
  // console.log("In checkAuthenticated* method USER - REQ: " + JSON.stringify(req.session.user));
  if (req.session.user) {
    console.log("InSIDE checkAuthenticated* method");

    return next();
  } else {
    res.redirect("http://localhost:3000/");
  }
};

router.get("/isAuth", async (req, res) => {
  if (req.user) {
    return res.json(req.user);
  } else {
    return res.status(401).json("unauthorize");
  }
});

router.get("/restaurants", async (req, res) => {
  console.log("#################req.session : ", req.session);
  console.log("Welcome...aaa: " + req.session.user);

  var restaurantData = await placesNearByClientLib();
  //console.log(restaurantData);
  res.json({ restaurants: restaurantData });
});

router.get(
  "/home",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000" }),
  function (req, res) {
    //Successful authentication, redirect secrets.
    res.redirect("http://localhost:3000");
  }
);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

// a variable to save a session
var userSession;

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login/failed" }),
  function (req, res) {
    // Successful authentication, redirect secrets.
    console.log("SUCCESS.....2" + JSON.stringify(req.user));
    req.session.user = req.user;
    console.log(
      "From User Session######### :" + JSON.stringify(req.session.user)
    );
    res.redirect("http://localhost:3000");
  }
);

// *****************************************user********************************************** //

router.get("/user", (req, res) => {
  console.log("Inside route /user :" + JSON.stringify(req.session));
  if (req.session.user) {
    console.log("Inside INSIDE route /user :");
    res.json(req.user);
  } else {
    console.log("************************* OOPS ************************");
  }
});

router.get("/logout", function (req, res) {
  req.session.destroy(function (err) {
    // cannot access session here
    console.log("Can't access session here...");
  });

  console.log("Logout....");
  res.redirect("http://localhost:3000/login");
});

router.post("/user", (req, res) => {
  console.log("Server - Signup Post method");
  const signedUpUser = new signup({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
    password: req.body.password,
  });

  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

async function placesNearByClientLib() {
  var restaurantData;

  var config = {
    method: "get",
    url:
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=" +
      apiKey,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      restaurantData = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return restaurantData;
}

module.exports = router;
