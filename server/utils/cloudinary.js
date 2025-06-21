const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

dotenv.config();

cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
});

const uploadMedia = async (fileBuffer, originalname) => {
  try {
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: "uploads", // optional: customize your folder
          use_filename: true,
          unique_filename: false,
          public_id: originalname ? originalname.split(".")[0] : undefined,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      streamifier.createReadStream(fileBuffer).pipe(stream);
    });

    console.log("File uploaded to Cloudinary:", result.secure_url);
    return result;
  } catch (error) {
    console.error("Upload error:", error);
    return null;
  }
};

const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
  }
};

const deleteVideoFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: "video" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  uploadMedia,
  deleteMediaFromCloudinary,
  deleteVideoFromCloudinary,
};
