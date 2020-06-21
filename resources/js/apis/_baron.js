var Baron = new Http({
  baseUrl:'http://localhost:8080/baron',
  method:'',
  async:false,
  contentType: "application/json",
  dataType: 'json',
  data: {},
  beforeSend: function(req) {
    // req.setRequestHeader('Authorization', 'Bearer ' + WEATHER_CSRF_TOKEN);
  },
  success: function(e){},
  error: function(e){}
});

function signUp(){
  Baron.post('/user', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function login(){
  Baron.post('/login', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function logout(){
  Baron.get('/logout', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function unsubscribe(){
  Baron.delete('/user', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function modifyAccount(){
  Baron.put('/user', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function loadVmList(){
  Baron.get('/vm/list', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function addVm(){
  Baron.post('/vm', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function removeVm(){
  Baron.delete('/vm', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function backup(){
  Baron.post('/backup', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function loadNoticeList(){
  Baron.get('/notice', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function loadQnAList(){
  Baron.get('/qna', {}, false)
  .then(function(value){})
  .catch(function(error){});
}

function download(){
  Baron.get('/download', {}, false)
  .then(function(value){})
  .catch(function(error){});
}