import dotenv from "dotenv";
import aws from "aws-sdk";
import crypto from "crypto";
import { promisify } from "util";

const randomBytes = promisify(crypto.randomBytes);

dotenv.config();

const region = "ap-south-1";
const bucketName = "youtube-clone-hostedcontent";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

export const generateUploadURL = async () => {
  const rawBytes = await randomBytes(16);
  const videoName = rawBytes.toString("hex");

  const params = {
    Bucket: bucketName,
    Key: `${videoName}.mp4`,
    Expires: 60,
  };

  let uploadURL;

  try {
    uploadURL = await s3.getSignedUrlPromise("putObject", params);
  } catch (error) {
    console.error(
      "An unknown error occured, failed to generate upload URL",
      error
    );
    return;
  }

  return uploadURL;
};
