var Http = function(options){
  var baseUrl = options.baseUrl;

  function ajax(url, data){
    options.url = baseUrl + url;
    options.data = data;
    return {
      then: function(success){
        options.success = success;
        return {
          catch: function(error){
            options.error = error;
            $.ajax(options);
          }
        }
      }
    }
  }
  
  return {
    get:function(url, data, async){
      options.async = (async === undefined) ? false : async;
      options.method = 'GET';
      return ajax(url, data);
    },
    post:function(url, data, async){
      options.async = (async === undefined) ? false : async;
      options.method = 'POST';
      return ajax(url, data);
    },
    put:function(url, data, async){
      options.async = (async === undefined) ? false : async;
      options.method = 'PUT';
      return ajax(url, data);
    },
    delete:function(url, data, async){
      options.async = (async === undefined) ? false : async;
      options.method = 'DELETE';
      return ajax(url, data);
    }
  }
}