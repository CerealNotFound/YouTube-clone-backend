import express from "express";
import { generateUploadURL } from "./api/uploadHandler.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import { getData } from "./api/getData.js";
import { postVideos, postFilters, postUsers } from "./api/postData.js";
import { deleteData } from "./api/deleteData.js";
import { patchData } from "./api/patchData.js";

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

//videos
app
  .route("/api/videos")
  .get((req, res) => {
    getData(req, res, "videos");
  })
  .post((req, res) => {
    postVideos(req, res, "videos");
  })
  .delete((req, res) => {
    deleteData(req, res, "videos");
  })
  .patch((req, res) => {
    patchData(req, res, "videos");
  });

//filters
app
  .route("/api/filters")
  .get((req, res) => {
    getData(req, res, "filters");
  })

  .post((req, res) => {
    postFilters(req, res, "filters");
  })

  .delete((req, res) => {
    deleteData(req, res, "filters");
  })

  .patch((req, res) => {
    patchData(req, res, "filters");
  });

//users
app
  .route("/api/users")
  .get((req, res) => {
    getData(req, res, "users");
  })

  .post((req, res) => {
    postUsers(req, res, "users");
  })

  .delete((req, res) => {
    deleteData(req, res, "users");
  })

  .patch((req, res) => {
    patchData(req, res, "users");
  });

app.use("/s3/upload", async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
});

app.all("*", (req, res) => {
  res.status(418).send("418: I'm a teapot 🫖");
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`> Ready on http://PORT:${PORT}`);
});

export { app };
