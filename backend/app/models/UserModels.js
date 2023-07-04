module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    first_name: String,
    last_name: String,
    gender: String,
    age: Number,
    phone: String,
    address: {
      street_name: String,
      province: String,
      regency: String,
      district: String,
    },
    time : { 
      type : Date, 
      default: Date.now
    }
  });

  schema.method("toJSON", function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;

    return object;
  });


  return mongoose.model("User", schema); // returns a model object which can be used to
};
