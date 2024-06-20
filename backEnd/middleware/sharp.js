const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const optimizeImage = async (req, res) => {
   const fileName = req.file.filename;
   const filePath = path.join(__dirname, "../images", fileName);
   const fileBuffer = await fs.promises.readFile(filePath);

   await sharp(fileBuffer).resize(600).webp({ quality: 40 }).toFile(filePath);
};

module.exports = optimizeImage;
