//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "26776660902";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Nnc2FiMHozYlc4TjgzU2xxeE1zNEJSanZBOFJlMzlzcXFXWW1GakMzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2k4ODFMblRxWXVMOXRianZCNXRPVFcxZnk4NTZucjJvTDZUclZQSHhBST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Rmx5MkQ3UHpDM3JoaHVIbCtXNnBkUTNmYmNRQyt0TmZHZE9McWJ5R2xFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLZ0V3cmFrR0JHajgyTTYxOTZzUjNXVDYzNGxWK3hxVkVpbmJzazgwUWc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVBU3lnUEVPZHVHdUYraVgza1gyK1dQWWhrRTRFa0VXQWpOa3RDY0JZSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9zSWliYkJ4QlRCS2x0bDU5K2I0L2NNQ1JXOGowRlN0K2tDR0pqSUo2aDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hsZTZGTUVEUmJpdk5kT0lMeFlmbEUvZjZNeG9HbGNOMnFvaFoyZTVubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2RCM2ZydUpuUHV0OWJKallCUzBRMXJlcWRwdm94V3dvcTVwUGFjUWd4bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYay95NVZhVnBBTmQrZEVXM0NSdmJlWDZsZU5BbUl6dWVmMWV5ekY5WEtNZmt6MkdobUl4RlJwZG80bktSaThqM2ZyTUF0cFk1MDlPTEhURkdNckNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiIzSXBqZ1gzSitYb2hiODlHYUh4SG5aZFNUOUVLUnlYSVhOclB0bCt3V2RFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTWFp1bnVlMlJQYTlabGg4cGZaaVFnIiwicGhvbmVJZCI6ImY1MWRiYTI1LWU5NTItNDBmMy05ZDIwLWQ1MWRlNWRjNGM0ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSlZSNmFWM1pCZ3lSd3FTQnZYT0ZFZnRSZVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkpHcmUrR1VCSEprL2YwTTlXeVlEbXI2Ry9zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkU4Qk05UURYIiwibWUiOnsiaWQiOiIyNjc3NjY2MDkwMjoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZG58J2RtvCdkbTwnZGs8J2RtiDwnZGp8J2RviDwnZGw8J2RsPCdkbBb8J2RufCdkatdIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJS1hqaGtRdDdqV3R3WVlGeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZUUsvUGRWbXBDTzR1b3lUS1ZRVFp6aDVoUjU4aTJCZDRkeVJXbzFyOUNVPSIsImFjY291bnRTaWduYXR1cmUiOiI4NVFKb0p1NmMzV2xhbjRhcDZ6UFdIdVdVNVJva3VjM2tXeTc0c0ZrYWpybGErU0JCYWR5NkJaamNNLzhiV3dNUWl5Z1U1Zk9nSXA0RzVYUk45M0dEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieVU1WWVXK0p5TW9Bb3U2TlNUdWdSVlB1aUdWazlBZWI0YUYzTlEyTmwxSzUwdGN2ZEMyNWZMVlQ5WGZqc0ZXS0xrU3M0Z2d0djFqeUJpVGFWd2h2QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjc3NjY2MDkwMjoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXRUN2ejNWWnFRanVMcU1reWxVRTJjNGVZVWVmSXRnWGVIY2tWcU5hL1FsIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MzcyMzU2fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
