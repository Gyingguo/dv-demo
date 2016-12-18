var common = {};

common.deepCopyObj = function (srcObj) {
  var targetObj = {};

  if (typeof srcObj != 'object') {
    return srcObj;
  }

  for (var attr in srcObj) {
    targetObj[attr] = common.deepCopyObj(srcObj[attr]);
  }

  return targetObj;
};

module.exports = common;
