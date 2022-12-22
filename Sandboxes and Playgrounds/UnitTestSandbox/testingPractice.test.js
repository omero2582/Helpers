import calculator, { analyzeArray, capitalize, ceasarCipher, reverseString } from './testingPractice';

describe('Capitalize 1st letter', () => {
  it('Happy path 1', () => {
    expect(capitalize('pizza')).toEqual('Pizza')
  });
  
  it('Happy path 2', () => {
    expect(capitalize('odin Project')).toEqual('Odin Project')
  });
})

describe('reverseString', () => {
  it('Happy path 1', () => {
    expect(reverseString('pizza')).toEqual('azzip')
  })

  it('works with Capitals', () => {
    expect(reverseString('sKyRIM')).toEqual('MIRyKs')
  })
})


describe('Calculator', () => {
  it('adds', () => {
    expect(calculator.add(2, 3)).toBeCloseTo(5)
  })
  
  it('adds floats', () => {
    expect(calculator.add(5.3, 2.4)).toBeCloseTo(7.7)
  })
  
  it('subtracts', () => {
    expect(calculator.subtract(2, 3)).toBeCloseTo(-1)
  })
  
  it('adds floats', () => {
    expect(calculator.subtract(5.3, 2.4)).toBeCloseTo(2.9)
  })
  
  it('multiply', () => {
    expect(calculator.multiply(2, 3)).toBeCloseTo(6)
  })
  
  it('multiply floats', () => {
    expect(calculator.multiply(5.3, 2.4)).toBeCloseTo(12.72)
  })
  
  it('divide', () => {
    expect(calculator.divide(2, 3)).toBeCloseTo(0.666)
  })
  
  it('divides floats', () => {
    expect(calculator.divide(5.3, 2.4)).toBeCloseTo(2.208)
  })
  
})


describe('Ceasar Cipher', () => {
  it('shifts 3', () => {
    expect(ceasarCipher('abc')).toEqual('def')
  });
  
  it('shifts every letters in alphabet by 3', () => {
    expect(ceasarCipher('abcdefghijklmnopqrstuvwxyz')).toEqual('defghijklmnopqrstuvwxyzabc')
  });
  
  it('keeps punctuation', () => {
    expect(ceasarCipher('a.b?c')).toEqual('d.e?f')
  });
  
  it('keeps same Case', () => {
    expect(ceasarCipher('AbCdeFGH')).toEqual('DeFghIJK')
  });
  
  it('can start with any non-alphabet character', () => {
    expect(ceasarCipher('?@$;abc')).toEqual('?@$;def')
  });
  
  it('can end with any non-alphabet character', () => {
    expect(ceasarCipher('abc?@$;')).toEqual('def?@$;')
  });
  
  it('can be mixed witha ny non-alphabet characters', () => {
    expect(ceasarCipher('ab?@c$;')).toEqual('de?@f$;')
  });
  
})

describe('analyze Array' , () => {
  it('Happy path 1', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    })
  })

  it('can work with zeros', () => {
    expect(analyzeArray([1,0,3,4,0,6])).toEqual({
      average: (1 + 0 + 3 + 4 + 0 + 6) / 6,
      min: 0,
      max: 6,
      length: 6
    })
  })
})