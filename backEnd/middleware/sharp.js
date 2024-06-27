const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const optimizeImage = async (req, res, next) => {
   if (!req.file) {
      return next();
   }

   const fileName = req.file.filename;
   const filePath = path.join(__dirname, "../images", fileName);
   const fileBuffer = await fs.promises.readFile(filePath);

   try {
      await sharp(fileBuffer)
         .resize(600)
         .webp({ quality: 40 })
         .toFile(filePath);
      /* req.file.filename = fileName; */
      next();
   } catch (error) {
      console.error("Error optimizing image:", error);
      next(error);
   }
};

module.exports = optimizeImage;
