require("../models/database");
const Category = require("../models/Category");
/* GET /
 * HOMEPAGE
 */

exports.home = async (req, res) => {
  res.render("index");
};

async function insertDummyCategoryData() {
  try {
    await Category.insertMany();
  } catch (error) {
    console.log("error ", +error);
  }
}

insertDummyCategoryData();
