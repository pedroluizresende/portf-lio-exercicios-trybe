const myRemove = require("./myRemove.js")

  describe('function myRemove', () => {
    it ('Verifica que retorna elemento esperado', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
    })
    it('Verifica se não retorna array esperado', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })
    it('Verifica se retorna [ 1, 2, 3, 4 ]', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ]);
    })
  })