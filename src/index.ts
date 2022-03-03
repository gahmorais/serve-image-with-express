import express from "express";
import fs, { createReadStream, read } from "fs";
import stream from "stream";
import path from "path";
const dir = path.resolve(path.dirname(""), path.join("public"));

const app = express();
app.use(express.json());

app.get("/images", (req, res) => {
  const images = fs.readdirSync(dir);
  for (let i = 0; i < images.length; i++) {
    const imageName = images[i];
    const image = path.join(dir, imageName);
    const readStream = createReadStream(image, "base64");
    res.set("Content-disposition", imageName);
    res.set("Content-Type", "image/png");
    readStream.pipe(res);
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen("3000", () => {
  console.log("API Online");
});
