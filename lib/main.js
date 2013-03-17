/*jshint evil:true*/

if (typeof document !== "undefined") {
  (function() {
    minispade = {
      root: null,
      modules: {},
      loaded: {},
      moduleName: undefined,
      moduleNames: [],
      
      // TODO Input parameters not supported, for modules loaded as a string
      globalEval: function(data) {
        if ( data ) {
          // We use execScript on Internet Explorer
          // We use an anonymous function so that context is window
          // rather than jQuery in Firefox
          ( window.execScript || function( data ) {
            window[ "eval" ].call( window, data );
          } )( data );
        }
      },

      requireModule: function(name) {
        var loaded = minispade.loaded[name];
        var mod = minispade.modules[name];

        if (!loaded) {
          if (mod) {
            minispade.loaded[name] = true;
            
            if (typeof mod === "string") {
              this.globalEval(mod);
            } else {
                minispade.moduleNames.push(name);
                minispade.moduleName = name;
                mod.apply(window, [].slice.call(arguments, 1));
                minispade.moduleNames.pop();   
                minispade.moduleName = minispade.moduleNames[minispade.moduleNames.length - 1]
            }
          } else {
            if (minispade.root && name.substr(0,minispade.root.length) !== minispade.root) {
              return minispade.requireModule(minispade.root+name);
            } else {
              throw "The module '" + name + "' could not be found";
            }
          }
        }

        return loaded;
      },

      requireAll: function(regex) {
        for (var module in this.modules) {
          if (!this.modules.hasOwnProperty(module)) { continue; }
          if (regex && !regex.test(module)) { continue; }
          var params = [].slice.call(arguments, 1);
          params.unshift(module);
          minispade.requireModule.apply(window, params);
        }
      },

      require: function(path) {
        if (typeof path === 'string') {
          minispade.requireModule.apply(window, [].slice.call(arguments, 0));
        } else {
          minispade.requireAll.apply(window, [].slice.call(arguments, 0));
        }
      },

      register: function(name, callback) {
        minispade.modules[name] = callback;
      }
    };
  })();
}

