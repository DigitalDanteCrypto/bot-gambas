import  teamLinks  from "../TeamLinks";
const PORT = 5000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


const app = express();

const URL = "https://www.hltv.org/team/6667/faze";

axios(URL)
.then(response => {
    const html = response.data
    const $ = cheerio.load(html);

   

const getTeamInfo = () => {
    const players = [];
    const TeamURL = [];

       $('.col-custom', html).each(function() {
            const PlayerName = $(this).find("span").text()
            const PlayerImage = $(this).find('img').attr('src');

            players.push({
                "TeamName": "Spirit",
                PlayerName,
                PlayerImage,
            })

        })
 

       /* $('.more', html).each(function() {
            const TeamLink = $(this).find('a').attr('href');

            TeamURL.push({
                "TeamURL" : TeamLink
                
            })

        })*/




console.log(players)
}

    getTeamInfo()

    
}).catch(err => console.log(err))



app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))