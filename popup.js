userObject = {
  coder1: {
    name,
    driver: true, 
  },
  coder2: {
    name,
    driver: false;
  },
  intervalCount: 0,
  intervalLength: 25,

  setName(coder, name) {
    this[coder].name = name;
  },

  setRole(coder, role) {
    this[coder].driver = role === 'Driver' ? true : false;
  },

  setIntervalLength(num) {
    this.intervalLength = num;
  },

  intervalCompleter() {
    this.coder1.driver = !this.coder1.driver;
    this.coder2.driver = !this.coder2.driver;
    this.intervalCount++;
  }

handlers = {

}
