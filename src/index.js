// require("dotenv").config();
const axios = require("axios");
const userService = async (url = "", payload = "", token = "") => {
  url = url || process.env.BASE_URL;
  try {
    await axios.get(url, payload);
    return { url, payload, token };
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = { userService };
