//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "2349128213901";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BobElCaFFEZnBVU0lYckhwQWh3dHB3SG5ZZy9iVzA1VlAzckhtbHdIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWx1dkUxdC9mdlNQVzhsNGRZa0p1T0pYNVpGbHFjaHJGZms5ZmJWRmFpUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzS0V1dUVpOXdmeFBSQWhlRlNMQkwyb2hSRUw5WlA0eVBReWI1TVNxNkhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZR0Y0M0s2dFNSS1dYTU1XMnZhVEgwR0t6SzNOV1dwVlhMZWJQTlU5c0NRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCRkNTNVhWeWc3dG5HcEFLMzRDSThmUGJXV2dUR203bjAvWHBwbTE2bk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1GRm4rb3g1TUxleFlZNG9INkltMHRqQS9va1d6SE9QbVZyQ0p0UEVNUWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZsTHpQUytnZ05mdk82aTRCb1hrNndiZmxteWFBMHNwVGdqcGptZUUyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEpPNDlYVXcxUi9kRHIxeG5zdGNpcDFDT2pUaW9XYkVHYnNpT20rWW95az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHVEFUVVphYTluOG5vUVc3N0dsNUFUV1NRMXF4RW9LRmxvdVM3OGZRQ215YXgzZ1hjakVSL1FwU25FY1l6ZVdVancyajBCUDY4alJzV0ZDUXZKS2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6ImpZVDZWdmVvdnJSV3p2VWF2c28yTU9XbFVrTUpJVmhyNFdWaXpvbEw2T289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyODIxMzkwMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTdCQjYzNzQ3MTlCQTI0MEZENyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxMzQzNjU0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuUWpTSUxnZVNQZVhpa283Q3FMQlpnIiwicGhvbmVJZCI6ImYzOThjZTlhLTc3M2YtNDRmMi04ODM3LTU0NjE0NzJkOGM5YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyYi9ldHZXQUsySHpDV2REN1FTTXBIdk9FWlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSE9ZZnQzUHZWdWpTMkpCZEdHbmpWL2M3TGpNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBYQ0Y4NTc3IiwibWUiOnsiaWQiOiIyMzQ5MTI4MjEzOTAxOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUGlnIEJlbmlzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJK0c0NnNERUpicXlMa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpb1FTMjFMZWhGYk1SR1BOeklmRDM0VzRTbllRUTArL0M0OTlCR2Z0MVJ3PSIsImFjY291bnRTaWduYXR1cmUiOiJjckZsaTF6TjkyUjA3cmZDUFJidHhtZHF0MWFabDh5eGd2Y1J3dmlPK25OcktEZHRTbWtvVm41dG9wcjZyaWdzS0Jaa3VxbjN1M0swdlpxSHd2RUZBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoienJNVCtXNElyQzBMRnBHWXlwRkhWbXhVVFVLcHZNNGlKOUJSN3RJL2FmeDZkTDdvNGM2NG43L09jSzZXVG1penAwbUlDcXFVMmpLZ01ocGN3Rk1hZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTI4MjEzOTAxOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXFFRXR0UzNvUld6RVJqemN5SHc5K0Z1RXAyRUVOUHZ3dVBmUVJuN2RVYyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTM0MzY1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDOGMifQ==" // session id here
.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
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
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
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
