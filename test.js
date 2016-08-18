var request = require('superagent')
require('dotenv').config()

console.log(process.env.BNET_API_KEY)

// db.connect({
//   apiKey: process.env.BNET_API_KEY,
//   secretApiKey: process.env.SECRET_BNET_API_KEY
// })

var api = "https://us.api.battle.net/wow/auction/data/Dath'Remar?locale=en_US&apikey="
request.get(api, function(err, res) {
  console.log("this is the res", res.body)
} )
