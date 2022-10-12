const router = require("express").Router();
const passport = require("passport");
const pool = require("../config/db");

const CLIENT_URL = "http://localhost:3000/logged";

router.get("/login/success", (req, res) => {
  let user = 'aj';
  if (user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get('/dbcheck', async(req, res)=>{
  let rslt = await pool.query('select * from tbllogin');
  res.send({data : rslt});
})


router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/instagram", passport.authenticate("instagram", { scope: ["profile"] }));

router.get(
  "/instagram/callback",
  passport.authenticate("instagram", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/linkedin", passport.authenticate("linkedin", { state: ["test"] }));

router.get(
  "/linkedin/callback", passport.authenticate("linkedin", {
  successRedirect: CLIENT_URL,
  failureRedirect: "/login/failed"
  })
);

// router.get("/twitter", passport.authenticate("twitter", { state: ["test"] }));

// router.get(
//   "/twitter/callback", passport.authenticate("twitter", {
//   successRedirect: CLIENT_URL,
//   failureRedirect: "/login/failed"
//   })
// );

module.exports = router