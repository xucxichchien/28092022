const  express = require("express");
const  router = express.Router();
const fs = require("fs");

//-------------------------------------------
router.get( "/" , (yeucau, trave) => {
    dssanpham = [
        {TenSach: "Nguoi cung kho", MoTa: "Kho cung nguoi"},
        {TenSach: "Than so hoc", MoTa: "So hoc than"},
    ];
    trave.render("products", {CacSanPham: dssanpham});
});

router.get( "/giadung" , (yeucau, trave) => {
    pageContent = "Hang Gia Dung !!!";
    trave.send(pageContent);
});

router.get( "/maymac" , (yeucau, trave) => {
    pageContent = "Hang May Mac !!!";
    trave.send(pageContent);
});

//-------------------------------------------
exports.ProductRouter = router;