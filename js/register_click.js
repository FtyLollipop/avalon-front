function register(){
    axios.post('user/register',{
        userName:$("#register-user-name").value,
        userPassword:$("#register-password").value
    },{
        baseURL: apiUrl,
        timeout: 5000,
        headers: {'X-Custom-Header': 'foobar'}
    }).then(function(response){
        console.log(response);
    })
}
