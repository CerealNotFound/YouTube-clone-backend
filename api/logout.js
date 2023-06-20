import { supabase } from "../middleware/middleware.js";

export const logout = async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      res.status(200).send("Successfully logged out 👍");
      console.log("Successfully logged out 👍");
      return;
    }
    return res.status(500).send("failed to logout user", error);
  } catch (error) {
    console.log(error);
  }
};
