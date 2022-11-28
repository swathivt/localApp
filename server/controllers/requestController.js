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
  console.log("ID value:" + req.params.id);
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
};

/******************************************publish request****************************/

exports.publishRequest = (req, res) => {
  console.log("ID value: " + req.params.id);

  UserRequest.findById(req.params.id)
    .then(function (usrReq) {
      console.log("returned from DB: " + usrReq);
      if (usrReq._id != null) {
        // user request found

        if (usrReq.status == "Draft") {
          console.log("Request is DRAFT.");
          //res.status(200).send("User Request found");
          const now = new Date();
          UserRequest.updateOne(
            { _id: usrReq._id },
            { $set: { status: "Published", updated: now } }
          )
            .then(function (count) {
              console.log(
                "Updated status pusblished for rows:" + JSON.stringify(count)
              );
              res.status(200).send({
                statusMsg: "Request has been published successfully.",
                statusCode: "0",
              });
            })
            .catch(function (err) {
              console.log("Failed to update to Publish from Draft.");
              res.status(200).send({
                statusMsg:
                  "We are unable to publish request. Please try again or contact administrator.",
                statusCode: "-1",
              });
            });
        } else {
          console.log(
            "We can't publish this request as it is not in Draft status."
          );
          res.status(200).send({
            statusMsg: "Only draft requests can be published.",
            statusCode: "-1",
          });
        }
      } else {
        console.log("not found ID");
        res.status(200).send({
          statusMsg: "Request not found.",
          statusCode: "-1",
        });
      }

      // res.status(200).send("User Request found.");
    })
    .catch(function (err) {
      res.status(200).send({
        statusMsg: "Request not found.",
        statusCode: "-1",
      });
    });
};
