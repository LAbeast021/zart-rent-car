import tokenService from'./tokenService';
const BASE_URL = '/api/users/';

export default {
  signup,
  getUser,
  logout,
  login
};

function login(creds) {
  console.log(`hit the userservice login with = ${creds}`)
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  }).then(res => {
    if (res.ok) {
      let respond = res.json();
      console.log(`userservive => login --- ${respond}`)
      return respond}
    // throw new Error('Bad Credentials!');
    alert('after respond in user service')
  }).then(({token}) => tokenService.setToken(token))
}

function logout() {
  tokenService.removeToken();
}

function getUser() {
  return tokenService.getUserFromToken();
}

function signup(user) {
  console.log( `this is user pass to sign up = ${user}`)
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    console.log(`this is res in signup = ${res}`)
    if (res.ok) {
      console.log()
      return res.json();}
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({token}) => tokenService.setToken(token));
}

