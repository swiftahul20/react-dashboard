module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    first_name: {
      type: String,
      required: [true, 'Enter a first name.']
    },
    last_name: {
      type: String,
      required: [true, 'Enter a last name']
    },
    gender: {String},
    phone: {
      type: String,
      required: [true, 'Enter a phone number']
    },
    email: {  
      type: String,
      required: [true, 'Enter a email']
    },
    address: {
      street_name: {  
        type: String,
        required: [true, 'Enter a street name']
      },
      province: {  
        type: String,
        required: [true, 'Enter a province']
      },
      regency: {  
        type: String,
        required: [true, 'Enter a regency']
      },
      district: {  
        type: String,
        required: [true, 'Enter a email']
      },
    },
    dob: {  
      type: String,
      required: [true, 'Enter a dob']
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
