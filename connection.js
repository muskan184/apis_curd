const mongoose = require("mongoose");

async function connectionMOngo(url) {
  mongoose.connect(url);
}

module.exports = {
  connectionMOngo,
};
