const fns = require('./Utils/App.functions');

describe('checking for all users endpoint', () => {
  test('getting an array of user', () => {
    expect.assertions(1)
    return fns.getUsers('http://localhost:3005/api/getAllUsers').then(resp=>{

      expect(resp.length).toBeGreaterThan(0)
    })
  })

  test('make sure it is an array', () => {
    expect.assertions(1)
    return fns.getUsers('http://localhost:3005/api/getAllUsers').then(resp=>{

      expect(Array.isArray(resp)).toBe(true)
    })
  })

  // test('what if wrong url', ()=>{
  //   expect.assertions(1)
  //   return fns.getUsers().then(resp=>{
  //     expect(url).toBe();
  //   })
  // })
})