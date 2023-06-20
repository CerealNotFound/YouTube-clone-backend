import { supabase } from "../middleware/middleware.js";

export const createUser = async (req, res) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: req.body.email,
      password: req.body.password,
      options: {
        data: {
          name: req.body.username,
          avatar: req.body.avatar,
        },
      },
    });

    if (error) {
      return res
        .status(500)
        .send("failed to create user, check entered details");
    }
    console.log("Successfully created user 😄");
    return res.status(200).send(data);
  } catch (error) {
    console.error("failed to call user creation");
  }
};
