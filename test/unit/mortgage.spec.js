const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
  let mortgage = null;
  
  beforeEach(() => {
    mortgage = new Mortgage();
  });

  it('should have function monthlyPayment0 ', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('should have function monthlyPayment1 ', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('should have function monthlyPayment2 ', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('should have function monthlyPayment3 ', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });
  
  // it('1000 principle should calculate correctly', () => {
  //   expect(mortgage.monthlyPayment(1000, .1, 3, 12)).to.equal("27.82");
  // });

  // it('2000 principle should calculate correctly', () => {
  //   expect(mortgage.monthlyPayment(2000, .1, 3, 12)).to.equal("55.64");
  // });
  
  // it('3000 principle should calculate correctly', () => {
  //   expect(mortgage.monthlyPayment(3000, .1, 3, 12)).to.equal("83.46");
  // });

});