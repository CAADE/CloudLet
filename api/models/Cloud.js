/**
 * Cloud.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name : { type: 'string' },
    endpoint: { type: 'string'} // I don't like this we should use more of a publish and subscribe to decrease coupling.
  }
};

