/**
 * FederationController
 *
 * @description :: Server-side logic for managing Federations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Promise = require('bluebird');

module.exports = {


  /**
   * `FederationController.registerCloud()`
   * @param :: uri: string
   * @param :: name: string
   *
   */
  registerCloud: function (req, res) {
    if (req.query.name && req.query.uri) {
      return Cloud.findOrCreate({name: req.query.name}, {name: req.query.name}).then(function (cloud) {
        cloud.uri = req.query.uri;
        return cloud.save().then(function () {
          return save;
        })
      }).then(function (cloud) {
        return res.json({
          status: "Sucessful"
        });
      });
    }
    else {
      return res.json({
        status: "Failed",
        message: "name & uri are missing"
      })
    }
  },

  /**
   * `FederationController.unregisterCloud()`
   */
  unregisterCloud: function (req, res) {
    return res.json({
      todo: 'unregisterCloud() is not implemented yet!'
    });
  },


  /**
   * `FederationController.registerCloudlet()`
   */
  registerCloudlet: function (req, res) {
    return res.json({
      todo: 'registerCloudlet() is not implemented yet!'
    });
  },


  /**
   * `FederationController.unreegisterCloudlet()`
   */
  unreegisterCloudlet: function (req, res) {
    return res.json({
      todo: 'unreegisterCloudlet() is not implemented yet!'
    });
  }
};

