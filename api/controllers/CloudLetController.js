/**
 * CloudLetController
 *
 * @description :: Server-side logic for managing Cloudlets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Promise=require("bluebird");

module.exports = {

  /**
   * `CloudLetController.registerCloud()`
   * @param :: uri: string
   * @param :: name: string
   *
   */
  registerCloud: function (req, res) {
    if(req.query.name && req.query.uri) {
      Cloud.findOrCreate({name: req.query.name},{name:req.query.name}).then(function(cloud) {
      });
      return res.json({
        status: "Sucessful"
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
   * `CloudLetController.unregisterCloud()`
   */
  unregisterCloud: function (req, res) {
    return res.json({
      todo: 'unregisterCloud() is not implemented yet!'
    });
  },


  /**
   * `CloudLetController.registerCloudlet()`
   */
  registerCloudlet: function (req, res) {
    if(req.query.name && req.query.uri) {
      Cloud.findOrCreate({name: req.query.name},{name:req.query.name}).then(function(cloud) {
      });
      return res.json({
        status: "Sucessful"
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
   * `CloudLetController.unregisterCloudet()`
   */
  unregisterCloudet: function (req, res) {
    return res.json({
      todo: 'unregisterCloudet() is not implemented yet!'
    });
  }
};

