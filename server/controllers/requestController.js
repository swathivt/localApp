const UserRequest = require("../models/userRequest.js");
const { check, validationResult } = require("express-validator");
const { json } = require("body-parser");

exports.getUserRequest = (req, res) => {
  const filter = { _id: req.params.id };
  UserRequest.find(filter)
    .then((request) => {
      res.json({ request: request });
    })
    .catch((err) => {
      console.log("Error getting user requests" + err);
    });
};

exports.getUserRequests = (req, res) => {
  const filter = { userName: "svanc2121@gmail.com" }; // TODO get userId from session
  UserRequest.find(filter)
    .then((allRequests) => {
      res.json({ requests: allRequests });
      console.log("requests...");
    })
    .catch((err) => {
      console.log("Error getting user requests" + err);
    });
};

/******************************************create request****************************/

exports.createRequest = (req, res) => {
  const errors = validationResult(req);
  console.log(
    "*&*&*&*&*&*&*&*&&*&*******:" + JSON.stringify(req.body.startDate)
  );

  console.log("****** INPUT ******************:" + JSON.stringify(req.body));
  if (errors.isEmpty()) {
    const usrRequestModel = new UserRequest(req.body);

    usrRequestModel
      .save()
      .then(() => {
        console.log("Saved...");
        res.send("Thank you for the request");
      })
      .catch((err) => {
        console.log(err);
        res.send("Sorry! Something went wrong.");
      });
  } else {
    console.log(JSON.stringify(errors));
    res.send("Sorry! Something went wrong with INPUT");
  }
};
/******************************************update request****************************/
exports.updateRequest = (req, res) => {
  UserRequest.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.json("Request updated");
    })
    .catch(function (err) {
      res.status(422).send("Request update failed");
    });
};
/******************************************delete request****************************/

exports.deleteRequest = (req, res) => {
  console.log("ID vlaue:" + req.params.id);
  UserRequest.findById(req.params.id, function (err, request) {
    if (!request) {
      res.status(404).send("Request not found");
    } else {
      UserRequest.findByIdAndRemove(req.params.id)
        .then(function () {
          res.status(200).send("Request deleted");
        })
        .catch(function (err) {
          res.status(200).send("Request delete failed.");
        });
    }
  });
  // console.log("In Deleted Request." + req.params.id);
  // const usrRequestModel = new UserRequest(req.body);

  // usrRequestModel.usrRequestModel
  //   .deleteOne({ title: "Ranjith test" })
  //   .then((data) => {
  //     console.log("Deleted successfully." + data);
  //     res.json(data);
  //   })
  //   .catch((e) => {
  //     res.json({ message: e });
  //   });
};
