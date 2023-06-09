import { supabase } from "../middleware/middleware.js";

const patchData = async (req, res, table) => {
  try {
    const { data, error } = await supabase
      .from(table)
      .update(req.body.data)
      .eq("id", req.body.id);

    if (!error) {
      res.status(204).send("record updated successfully🧋");
    } else {
      console.error(error);
      res.status(500).send(`record update failed ${table}!`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(`record update failed in ${table}!`);
  }
};

export { patchData };
