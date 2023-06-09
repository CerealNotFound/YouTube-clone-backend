import { supabase } from "../middleware/middleware.js";

export const getData = async (req, res, table) => {
  try {
    const { data, error } = await supabase.from(table).select();
    if (error) {
      return res
        .status(404)
        .send(`failed to fetch data from ${table}, error: ${error}`);
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res
      .status(404)
      .send(`failed to fetch data from ${table}, error: ${err}`);
  }
  // send() for text/html
};
