/***
 * Function Constructor
 */

function person(name, phone, dob)
{
  this.name = name;
  this.phone = phone;

  this.ageCalculate = (dob) => {
    const diff = Date.now() - new Date(dob).getTime();
    const age = new Date(diff);
    return age.getUTCFullYear() - 1970;   // 1970 --- reference year
  }
  this.age = this.ageCalculate(dob);

}


/**
 * Class constructor
 */

class configuration {
  constructor(cpu, ram, memory)
  {
    this.cpu = cpu;
    this.ram = Number(ram);
    this.memory = memory;
  }

  getFullConfig() {
    return this.cpu + " " + this.ram + "gb" + " " + this.memory;
  }

  upgradeRam(size){
      this.ram = this.ram + size;
  }

}

const pc = new configuration("Intel core i3", "8", "1TB");
pc.upgradeRam(8);


const per1 = new person("emon", "01797734294", "1998-07-06");

console.log(per1, pc.getFullConfig());