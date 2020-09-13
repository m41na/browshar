const express = require("express");
const fs = require("fs");

const router = express.Router();

const metaFile = "public/metadata.json";
const dataFile = (folder, index) => `public/${folder}/chunk-${index}.json`;

/**
 * metaFile contains:
 * fileName - equivaleent to folder
 * entries - number of chunked pieces from initial upload
 * current - equivalent to index
 * splitSize - number of entries in log to move i one file
 */
router.get("/read/{current}/{direction}", function (req, res) {
  if (!fs.existsSync(metaFile)) {
    res.json(
      JSON.stringify({ data: null, errors: ["no metadata file ia available"] })
    );
    res.end();
  } else {
    let rawdata = fs.readFileSync(metaFile);
    let metadata = JSON.parse(rawdata);
    const current = req.params("current");
    const direction = req.params("direction");
    if (direction === "next") {
      if (current + 1 >= metadata.entries) {
        res.json(JSON.stringify({ data: null, errors: ["no next data"] }));
      } else {
        const updatedMeta = { ...metadata, current: current + 1 };
        fs.writeFileSync(metaFile, JSON.stringfy(updatedMeta));
        let nextContent = fs.readFileSync(
          dataFile(updatedMeta.fileName, updatedMeta.current)
        );
        res.json(JSON.stringify({ data: nextContent, errors: [] }));
      }
    } else {
      //'prev' is the only other option
      if (current - 1 <= 0) {
        res.json(JSON.stringify({ data: null, errors: ["no prev data"] }));
      } else {
        const updatedMeta = { ...metadata, current: current - 1 };
        fs.writeFileSync(metaFile, JSON.stringfy(updatedMeta));
        let prevContent = fs.readFileSync(
          dataFile(updatedMeta.fileName, updatedMeta.current)
        );
        res.json(JSON.stringify({ data: prevContent, errors: [] }));
      }
    }
    res.end();
  }
});

router.post("/save/{fileName}", function (req, res) {
   const fileName = req.params('fileName');
   const jsonData = req.body
   const entriesCount = Object.keys(jsonData.entries).length;
   let count = 0;
   while(count < entriesCount){
     
   }
});

//export this router to use in our index.js
module.exports = router;
