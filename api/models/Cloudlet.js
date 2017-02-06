/**
 * Cloudlet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name : { type: 'string' },
    uri: {type: 'string '} // Don't like this we should be using a publish and subscribe to handle this.
  }
};

