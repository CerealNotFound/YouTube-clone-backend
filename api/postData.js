import { supabase } from "../middleware/middleware.js";

export const postVideos = async (req, res) => {
  try {
    const { error } = await supabase.from("videos").insert({
      id: req.body.id,
      title: req.body.title,
      thumbnail: req.body.thumbnail,
      duration: req.body.duration,
      creator: req.body.creator,
      avatar: req.body.avatar,
      views: req.body.views,
      uploaded_on: req.body.uploaded_on,
      verified: req.body.verified,
    });
    if (error) {
      return res.status(500).send(`posting of video failed`);
    }
    return res.status(200).send("added videos!!☕");
  } catch (err) {
    console.error(err);
    return res.status(500).send(`posting of video failed`);
  }
};

export const postFilters = async (req, res) => {
  try {
    const { error } = await supabase.from("filters").insert({
      id: req.body.id,
      filter: req.body.filter,
    });
    if (error) {
      return res.status(500).send("posting of filters failed");
    }
    return res.status(200).send("added filters!!🙌");
  } catch (err) {
    console.error(err);
    return res.status(500).send("posting of filters failed");
  }
};

export const postUsers = async (req, res) => {
  try {
    const { error } = await supabase.from("users").insert({
      userid: req.body.userid,
      username: req.body.username,
      password: req.body.password,
      avatar: req.body.avatar,
      is_verified: req.body.is_verified,
    });
    if (error) {
      return res.status(500).send("posting of users failed");
    }
    return res.status(200).send("added users!!😎");
  } catch (err) {
    console.error(err);
    return res.status(500).send("posting of users failed");
  }
};
