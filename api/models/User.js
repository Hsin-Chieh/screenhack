/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

// Parrot.js
// The set of parrots registered in our app.
module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    email:{
      type:'string'+'@'+'string'    
      },
    password:{
        type:'string'
  }
}
}