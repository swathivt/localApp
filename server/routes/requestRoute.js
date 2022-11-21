const express = require("express");
const reqRouter = express.Router();
const { check, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const UserRequest = require("../models/userRequest.js");
require("dotenv").config({ path: "./config.env" });
const axios = require("axios");
const requestController = require("../controllers/requestController.js");

reqRouter.get("/requests", requestController.getUserRequests) ;

reqRouter.patch("/updateRequest/:id",requestController.updateRequest)

reqRouter.get("/getUserRequest/:id",requestController.getUserRequest)

reqRouter.delete("/deleteUserRequest/:id",requestController.deleteRequest);

reqRouter.post(
  "/createRequest",
  [
    check("title").isLength({ min: 1 }).withMessage("Please  enter title "),

    check("description")
      .isLength({ min: 1 })
      .withMessage("Please enter description"),

    check("category")
      .isLength({ min: 1 })
      .withMessage("Please select category"),

    check("cost").isLength({ min: 1 }).withMessage("please select cost"),
    //check("cost").equals('')
   // check("amount").isLength({ min: 1 }).withMessage("Please select amount"),

    // check("startDate")
    //   .isLength({ min: 1 })
    //   .withMessage("Please select start date"),

    // check("endDate").isLength({ min: 1 }).withMessage("Please select end date"),

    // check("location")
    //   .isLength({ min: 1 })
    //   .withMessage("Please enter your address"),

    // check("userName")
    //   .isLength({ min: 1 })
    //   .withMessage("Please enter your email id "),
  ],
  requestController.createRequest
);

// Delete request
reqRouter.delete("/request", (req, res) => {
  console.log("In Deleted Request." + req.params.id);
  const usrRequestModel = new UserRequest(req.body);
  
    usrRequestModel.deleteOne({title: 'Ranjith test'})
    .then(data => {
        console.log("Deleted successfully." + data);
        res.json(data)
    }).catch(e => {
        res.json({message: e})
    })
})




module.exports = reqRouter;
