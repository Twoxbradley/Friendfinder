// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold an array of information on friends-data.
// ===============================================================================

var newFriend = require("../app/data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("../api/friendsList", function(req, res) {
    res.json(friendsList);
  });

  app.get("/api/githubRepo", function(req, res) {
    res.json(githubRepo);
  
  });
}

  // / API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  // app.post("/api/tables", function(req, res) {

  //   if (tableData.length < 5) {
  //     tableData.push(req.body);
  //     res.json(true);
  //   }
  //   else {
  //     waitListData.push(req.body);
  //     res.json(false);
  //   }
  
  // });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey ... this data is then sent to the server...
  // Then the server saves the data to the friendsList array)
  // ---------------------------------------------------------------------------

  // app.post("/api/survey", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

  //   if (tableData.length < 5) {
  //     tableData.push(req.body);
  //     res.json(true);
  //   }
  //   else {
  //     waitListData.push(req.body);
  //     res.json(false);
  //   }

  // }