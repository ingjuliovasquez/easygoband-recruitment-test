// TODO: Express
const express = require('express')
const app = express()
const port = 3000

// TODO: Express cors
const cors = require('cors')
app.use(cors())

// TODO: Axios config
var axios = require('axios')

// TODO: Database config
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sebs1992',
    database: 'proveedores'
})

connection.connect();

// TODO: Live reload
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
const res = require('express/lib/response')

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

app.use(connectLiveReload());

// TODO: Get API data
setInterval(function () {
    const headers = { Authorization: "Basic cJmAc71jah17sgqi1jqaksvaksda=" };

    axios.get("https://pnny0h3cuf.execute-api.eu-west-1.amazonaws.com/dev/providers/1", { headers })
        .then(data => {
            const values = data.data;

            values.forEach(value => {
                // * Validate if exist the session_name
                const getSessionName = `SELECT session_name FROM proveedores WHERE session_name = "${value['sessions'][0]['name']}";`;
                connection.query(getSessionName, (error, result) => {
                    if (error) throw error;

                    // * Create new record
                    if (!result.length) {
                        const fields = "(access_group_id, access_group_name, basic_product_id, event_id, modified, name, structure_decode, total_uses, session_name)";
                        const formatedValues = `("${value['access_group_id']}", "${value['access_group_name']}", "${value['basic_product_id']}", "${value['event_id']}", "${value['modified']}", "${value['name']}", "${value['structure_decode']}", "${value['total_uses']}", "${value['sessions'][0]['name']}")`;
                        const query = `INSERT IGNORE INTO proveedores ${fields} VALUES ${formatedValues};`;
    
                        connection.query(query, (error) => {
                            if (error) throw error;
                        })
                    }
                })
            });
        })
        .catch(err => console.log(err));
}, 2000);

// TODO: Get database providers
app.get('/get_providers/:word?', (req, res) => {
    let filter = req.params.word ? `WHERE name LIKE "%${req.params.word}%"` : '';
    const query = `SELECT DISTINCT name FROM proveedores ${filter};`;

    connection.query(query, (error, results) => {
        if (error) throw error;

        if (results.length) res.json(results);
        else res.send("Not results");
    })
});

app.listen(port, () => {
    console.log(`Connected ${port}`)
})
