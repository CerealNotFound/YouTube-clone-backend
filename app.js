import express from "express";
// import { createClient } from "@supabase/supabase-js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
// import serverless from "serverless-http";
// import { app, supabase } from "./src/middleware/middleware";
import { getData } from "./api/getData.js";
import { postVideos, postFilters, postUsers } from "./api/postData.js";
import { deleteData } from "./api/deleteData.js";

const app = express();

// using morgan for logs
app.use(morgan("combined"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const supabase = createClient(
//   "https://lnykemhxwaujgjwamird.supabase.co",
//   process.env.SUPABASE_KEY
// );

app.use("/api/videos", (req, res) => {
  switch (req.method) {
    case "GET":
      getData(req, res, "videos");
      break;
    case "POST":
      postVideos(req, res, "videos");
      break;
    case "DELETE":
      deleteData(req, res, "videos");
      break;
    default:
      return res.status(418).send("I'm a teapot 🫖");
  }
});

app.use("/api/filters", (req, res) => {
  switch (req.method) {
    case "GET":
      getData(req, res, "filters");
      break;
    case "POST":
      postFilters(req, res, "filters");
      break;
    case "DELETE":
      deleteData(req, res, "filters");
      break;
    default:
      return res.status(418).send("I'm a teapot 🫖");
  }
});

app.use("/api/users", (req, res) => {
  switch (req.method) {
    case "GET":
      getData(req, res, "users");
      break;
    case "POST":
      postUsers(req, res, "users");
      break;
    case "DELETE":
      deleteData(req, res, "users");
      break;
    default:
      return res.status(418).send("I'm a teapot 🫖");
  }
});
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`> Ready on http://PORT:${PORT}`);
});

export { app };
// module.exports.handler = serverless(app);
