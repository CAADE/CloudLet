/**
 * Federation.js
 *
 * @description :: Federation has the DataCoordinator, FederatedOrchestratedCloud, IdentityManager, and Trust-Manager management. It represents the Federation of Clouds and Cloudlets
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name : { type: 'string' },
    cloudlets: {collection: 'Cloudlet'},
    clouds: {collection: 'Cloud'},
  }
};

