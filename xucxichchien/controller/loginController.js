const  express = require("express");
const  router = express.Router();
const fs = require("fs");

//-------------------------------------------
router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("./html/login.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/1nguoi" , (yeucau, trave) => {
    pageContent = "1 nguoi !!!";
    trave.send(pageContent);
});

router.get( "/2nguoi" , (yeucau, trave) => {
    pageContent = "2 nguoi !!!";
    trave.send(pageContent);
});

//-------------------------------------------
exports.LoginRouter = router;