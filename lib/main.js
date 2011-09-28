if (typeof document !== "undefined") {
  (function() {
    minispade = {
      modules: {},
      loaded: {},

      require: function(name) {
        var loaded = minispade.loaded[name];
        var mod = minispade.modules[name];

        if (!loaded) {
          if (mod) {
            loaded = mod();
            minispade.loaded[name] = loaded;
          } else {
            throw "The module '" + name + "' could not be found";
          }
        }

        return loaded;
      },

      register: function(name, callback) {
        minispade.modules[name] = callback;
      }
    };

    setTimeout(function() {
      var modules = minispade.modules;

      for (var name in modules) {
        if (modules.hasOwnProperty(name)) {
          minispade.require(name);
        }
      }
    });
  })();
}
