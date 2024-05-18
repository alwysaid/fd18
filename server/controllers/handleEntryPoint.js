const fs = require("fs")
const datauser = require("../models/databse.json")

class EntryPointController {
    static cekExpress(req, res) {
        console.log("Terpanggil di controller");
        res.render (index)
    }

    static getDataUser(req, res) {
        const resultData = datauser

        let userDataManipulate = resultData.dataUser


    }
}

module.exports = EntryPointController