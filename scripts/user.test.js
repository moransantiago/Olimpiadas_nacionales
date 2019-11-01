const UserService = require('../services/user');

(async () => {
  const result = await UserService.getUserByEmail({ email: 'matiasperezpc@hotmail.com'});
  console.log("asldfkj");
  console.log(result);
})()