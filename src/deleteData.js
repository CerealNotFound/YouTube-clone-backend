import { supabase } from "../middleware/middleware.js";

export const deleteData = async (req, res, table) => {
  const { error } = await supabase.from(table).delete().eq("id", req.body.id);
  if (error) {
    return res.status(400).send(`deletion of item from ${table} failed`);
  }
  return res.status(200).send(`item deleted successfully from ${table} 👌`);
};
