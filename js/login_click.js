function login(){
    axios.post('user/login',{
        userName:$("#login-user-name").value,
        userPassword:$("#login-password").value
    },{
        baseURL: apiUrl,
        timeout: 5000,
        headers: {'X-Custom-Header': 'foobar'}
    }).then(function(response){
        console.log(response);
    })
}
