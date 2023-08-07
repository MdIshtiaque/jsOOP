class person {
  constructor(fname, email, dob, yearlyIncome) {
    this.fname = fname;
    this.email = email;
    this.dob = new Date(dob);
    this.yearlyIncome = yearlyIncome;
  }

  fullInformation = () => {
    return "Full name: " + this.fname + "\n"
         + "Email : "+ this.email + "\n"
         + "Date of Birth : "+ this.dob + "\n"
         + "Yearly Income : "+ this.yearlyIncome;
  }

  getAge = () => {
    const diff = Date.now() - this.dob.getTime();
    const age = new Date(diff).getUTCFullYear() - 1970;
    return "\n"+"Age : "+ age;
  }

  taxCalculate = () => {
    if(this.yearlyIncome > 2500000)
    {
      return "\n"+"Yearly Tax bill : "+ this.yearlyIncome * 0.25;
    }else if(this.yearlyIncome > 1000000 && this.yearlyIncome < 2500000)
    {
      return "\n"+"Yearly Tax bill : "+ this.yearlyIncome * 0.15;
    }else{
      return "\n"+"Yearly Tax bill : "+ this.yearlyIncome * 0.05;
    }
  }

}

const person1 = new person("John", "john@outlook.com", "1990-01-01", 2500000);

console.log(person1.fullInformation(), person1.getAge(), person1.taxCalculate());