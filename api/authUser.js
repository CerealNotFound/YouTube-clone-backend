import { supabase } from "../middleware/middleware.js";

export const authUser = async (req, res) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: req.body.userEmail,
      password: req.body.userPassword,
    });
    if (error) {
      return res
        .status(401)
        .send("invalid credentials, authentication failed!", error);
    }
    console.log("Authentication successful, welcome back 😊");
    res.status(200).send(data);
  } catch (error) {
    console.error("failed to make authentication request", error);
  }
};
