const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
// const TwitterStrategy = require('passport-twitter').Strategy;
const pool = require("../config/db");
const controller = require("../modals/profiles");
require('dotenv').config();
const passport = require("passport");

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
  async function (accessToken, refreshToken, profile, cb) {
    const result = await controller.ManageProfies(profile);
    console.log(result);
    cb(null, profile);
  }
));

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, cb) {
      const result = await controller.ManageProfies(profile);
      console.log(result);
      cb(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      callbackURL: "/auth/facebook/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const result = await controller.ManageProfies(profile);
      console.log(result);
      console.log(profile);
      done(null, profile);
    })
);

passport.use(
  new InstagramStrategy({
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    callbackURL: process.env.INSTAGRAM_CALLBACK_URL
  },
    async function (accessToken, refreshToken, profile, cb) {
      const result = await controller.ManageProfies(profile);
      console.log(result);
      cb(null, profile);
    }
  ));

passport.use(
  new LinkedInStrategy({
    clientID: process.env.LINKEDIN_KEY,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: process.env.LINKEDIN_CALLBACK_URL,
    scope: ['r_emailaddress', 'r_liteprofile'],
  },
    async function (accessToken, refreshToken, profile, cb) {
      const result = await controller.ManageProfies(profile);
      console.log(result);
      cb(null, profile);
    }
  ));

// passport.use(
//   new TwitterStrategy(
//     {
//       clientID: 'process.env.TWITTER_CLIENT_ID',
//       clientSecret: 'process.env.TWITTER_CLIENT_SECRET',
//       callbackURL: process.env.TWITTER_CALLBACK_URL,
//     },
//      async function(accessToken, refreshToken, profile, cb) {
//   const result = await controller.ManageProfies(profile);
//   console.log(result);
//   cb(null, profile);
// }
//   )
// );


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});