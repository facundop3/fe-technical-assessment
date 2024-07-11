import crypto from "crypto";

const userIdHash = () => {
  const apiKey = process.env.API_KEY; // your workspace token (keep safe!)
  const userId = process.env.USER_ID;

  // Convert your api key to a buffer
  const key = Buffer.from(apiKey, "utf-8");

  // Hash the message using HMAC-SHA256 and the key
  const hash = crypto.createHmac("sha256", key).update(userId).digest("hex");

  return hash;
};

console.log(userIdHash());
