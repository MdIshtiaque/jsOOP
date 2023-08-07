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
}


let info = new mobileModel("samsung", "Galaxy ultra s22");
info.getModel();