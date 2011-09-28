BPM_PLUGIN.compileTransport = function(code, context, filename) {
  var ret = '', packageName = context.package.name, id;

  if (context.moduleId === 'main') {
    id = packageName;
  } else {
    id = [packageName, moduleId].join("/");
  }

  code = "function() { " + code + "}";
  ret += "minispade.register('"+id+"',"+code+");";
  return ret;
};
