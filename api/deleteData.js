import { supabase } from "../middleware/middleware.js";

export const deleteData = async (req, res, table) => {
  try {
    const { error } = await supabase.from(table).delete().eq("id", req.body.id);
    if (error) {
      return res.status(500).send(`deletion of item from ${table} failed`);
    }
    return res.status(200).send(`item deleted successfully from ${table} 👌`);
  } catch (err) {
    console.error(err);
    return res.status(500).send(`deletion of item from ${table} failed`);
  }
};
