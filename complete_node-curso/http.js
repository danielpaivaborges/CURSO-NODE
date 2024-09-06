"use strict";
const { get } = require("http");

get("http://www.google.com", (response) => {
  response.on("data", (chunk) => {
    console.log(chunk);
  });
  response.on("end", () => {
    console.log("no more data");
  });
});
