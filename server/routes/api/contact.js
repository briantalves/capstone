const express = require("express");
const contactFile = __dirname + "/../../models/contactinfo.json";
const contact = require(contactFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.post("/createnew", (req, res) => {
  const newContact = {
    id: req.body.id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    profession: req.body.profession,
    linkedin: req.body.linkedin,
    github: req.body.github
  };

  contact.push(newContact);
  helper.writeJSONFile(contactFile, contact);
  res.json(newContact);
});
//i thinks this is what's wrong
// router.get("/:id", (req, res) => {
//   return res.json(contact[contact.length - 1]);
// });
module.exports = router;
