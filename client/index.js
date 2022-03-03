import axios from "axios";
import { createReadStream, createWriteStream, fstat } from "fs";
import fs from "fs";
import path from "path";

(async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/images");
    console.log(data)
    // const dir = path.resolve(path.dirname(""));
    // fs.writeFileSync(dir, data, "base64");
  } catch (error) {
    console.log(error);
  }
})();
