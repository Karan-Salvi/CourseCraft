const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
dotenv.config({});

cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
});

const uploadMedia = async (file) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    console.log("File uploaded to Cloudinary:");
    fs.unlinkSync(file, () => {
      console.log("file Removed from server");
    });

    return uploadResponse;
  } catch (error) {
    fs.unlinkSync(file, () => {
      console.log("file Removed from server");
    });
    console.log(error);
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
