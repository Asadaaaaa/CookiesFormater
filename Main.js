const FS = require("fs")

let data = {
    "www.instagram.com": {
      "/": {}
    },
    "instagram.com": {
      "/": {
        "csrftoken": {
          "key": "csrftoken",
          "value": "qL2MaY5T2NPUfahaW3qu2BbZEZJazdh1",
          "expires": "2023-02-15T06:07:31.000Z",
          "maxAge": 31449600,
          "domain": "instagram.com",
          "path": "/",
          "secure": true,
          "hostOnly": false,
          "creation": "2022-02-16T06:07:28.602Z",
          "lastAccessed": "2022-02-16T06:07:31.846Z"
        },
        "mid": {
          "key": "mid",
          "value": "YgyUoAAEAAEwgUsAjCBj0W4zpIcI",
          "expires": "2024-02-16T06:07:28.000Z",
          "maxAge": 63072000,
          "domain": "instagram.com",
          "path": "/",
          "secure": true,
          "hostOnly": false,
          "creation": "2022-02-16T06:07:28.604Z",
          "lastAccessed": "2022-02-16T06:07:31.634Z"
        },
        "ig_did": {
          "key": "ig_did",
          "value": "E54502A0-FCF8-42E0-9B9B-329371FE3433",
          "expires": "2024-02-16T06:07:28.000Z",
          "maxAge": 63072000,
          "domain": "instagram.com",
          "path": "/",
          "secure": true,
          "httpOnly": true,
          "hostOnly": false,
          "creation": "2022-02-16T06:07:28.606Z",
          "lastAccessed": "2022-02-16T06:07:31.634Z"
        },
        "ig_nrcb": {
          "key": "ig_nrcb",
          "value": "1",
          "expires": "2023-02-16T06:07:28.000Z",
          "maxAge": 31536000,
          "domain": "instagram.com",
          "path": "/",
          "secure": true,
          "hostOnly": false,
          "creation": "2022-02-16T06:07:28.608Z",
          "lastAccessed": "2022-02-16T06:07:31.634Z"
        },
        "rur": {
          "key": "rur",
          "value": "\"NAO\\05451944033098\\0541676527651:01f7588b465287ed5f04d731836f24ce13f9c50b4339c61efe00e11351ba4a97a1578607\"",
          "domain": "instagram.com",
          "path": "/",
          "secure": true,
          "httpOnly": true,
          "hostOnly": false,
          "creation": "2022-02-16T06:07:30.651Z",
          "lastAccessed": "2022-02-16T06:07:31.848Z"
        },
        "ds_user_id": {
          "key": "ds_user_id",
          "value": "51944033098",
          "expires": "2022-05-17T06:07:31.000Z",
          "maxAge": 7776000,
          "domain": "instagram.com",
          "path": "/",
          "secure": true,
          "hostOnly": false,
          "creation": "2022-02-16T06:07:30.655Z",
          "lastAccessed": "2022-02-16T06:07:31.849Z"
        },
        "sessionid": {
          "key": "sessionid",
          "value": "51944033098%3AeyB6ICEIROrNii%3A20",
          "expires": "2023-02-16T06:07:30.000Z",
          "maxAge": 31536000,
          "domain": "instagram.com",
          "path": "/",
          "secure": true,
          "httpOnly": true,
          "hostOnly": false,
          "creation": "2022-02-16T06:07:30.659Z",
          "lastAccessed": "2022-02-16T06:07:31.634Z"
        }
      }
    }
  }

let beforeFile = FS.readFileSync("./before.json", err => {
    if (err) throw err;
});

let beforeData = JSON.parse(beforeFile);

for(let i in beforeData) {
    if(beforeData[i].Name === "csrftoken") {
        data["instagram.com"]["/"].csrftoken.value = beforeData[i].Value;

    } else if(beforeData[i].Name === "mid") {
        data["instagram.com"]["/"].mid.value = beforeData[i].Value;
    } else if(beforeData[i].Name === "ig_did") {
        data["instagram.com"]["/"].ig_did.value = beforeData[i].Value;
    } else if(beforeData[i].Name === "ig_nrcb") {
        data["instagram.com"]["/"].ig_nrcb.value = beforeData[i].Value;
    } else if(beforeData[i].Name === "rur") {
        data["instagram.com"]["/"].rur.value = beforeData[i].Value;
    } else if(beforeData[i].Name === "ds_user_id") {
        data["instagram.com"]["/"].ds_user_id.value = beforeData[i].Value;
    } else if(beforeData[i].Name === "sessionid") {
        data["instagram.com"]["/"].sessionid.value = beforeData[i].Value;
    }
}
let result = JSON.stringify(data, null, 2)
console.log(result);
FS.writeFileSync("./ResultCookies.json", result, err => {
    if (err) return console.log("Error writing file:", err);
});
console.log("File Saved")