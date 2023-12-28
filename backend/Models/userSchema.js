const mongoose = require("mongoose");

const coursSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    }},
    {
      timestamps: true,
    }
);





const Cours = mongoose.model("Cours", coursSchema);

module.exports = Cours;
