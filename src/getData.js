import { supabase } from "../middleware/middleware.js";

export const getData = async (req, res, table) => {
  const { data, error } = await supabase.from(table).select();
  if (error) {
    return res.status(404).send(`failed to fetch data from ${table}`);
  }
  return res.status(200).json(data);
  // send() for text/html
};
