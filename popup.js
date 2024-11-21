/* runs in the extension's popup window. it operates independently
   of any specific webpage, so it can't interact directly with
   content in webpage. might use popup.js to allow users to adjust 
   settings for the password checker, like toggling certain security 
   checks on or off. Then, it could send these preferences to 
   content.js. */
console.log("This is a popup!")