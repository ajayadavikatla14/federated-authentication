const pool = require("../config/db");
const fn = [];

fn.ManageProfies = async (req) => {
    return new Promise(async (resolve) => {
        let profile = req || [];
        // console.log('profile---', profile);
        let rslt = await pool.query("select * from tblauth");
        let FindUser = rslt.rows.find(user => user.userid == profile.id);

        if(FindUser){
            return resolve({
                status: 200,
                data: FindUser,
                statusText : 'user found..!',
            });
        };

        let username = (profile.name && profile.name.familyName) + ' ' + 
                       (profile.name && profile.name.givenName);

        let NewUser = await pool.query("insert into tblauth(displayname,username,userid,provider) values($1,$2,$3,$4)",[profile.displayName,username,profile.id,profile.provider]);

        return resolve({
            status: 200,    
            data: NewUser,
            statusText : 'new user is created',
        });
    });
};

module.exports = fn;