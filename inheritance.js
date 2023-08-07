class mobile {
  constructor(brand) {
    this.brand = brand;
  }

  getInfo = () => {
     return "This Mobile brand is " + this.brand;
  }
}

class mobileModel extends mobile {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  getModel = () => {
    console.log(this.getInfo()+ " and the model is - "+ this.model);
  }

  static getMessage = () => {
    return " This is a static method, and you cant access me with the class object, use the class to call me."
  }
}


let info = new mobileModel("samsung", "Galaxy ultra s22");
info.getModel();

console.log(mobileModel.getMessage());