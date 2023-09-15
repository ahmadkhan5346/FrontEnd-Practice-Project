
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler)


function buttonClickHandler(){
    console.log('You have clicked the fetchBtn')
    // instantiate an xhr Object
    const xhr = new XMLHttpRequest();

    // open the object
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);  //https://jsonplaceholder.typicode.com/todos/1

    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');
    //xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded');

    // what to do on progress(optonal)
    xhr.onprogress = function(){
        console.log('on progress')
    }

    // xhr.onreadystatechange = function(){
    //     console.log('ready state is', xhr.readyState);
    // }

    // what to do when response is ready
    xhr.onload = function(){
    if (this.status === 200){
        console.log(this.responseText)
    }
    else{
        console.error("some error occured")
    }
        
    }

    // send the request

    params = `{"name":"Juned","salary":"50000","age":"32"}`;
    xhr.send(params);
    console.log("we are done")
}

let popBtn = document.getElementById("popHandler");
popBtn.addEventListener('click', popHandler);


function popHandler(){
    console.log('You have clicked the popHandler')
    // instantiate an xhr Object
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);  //https://jsonplaceholder.typicode.com/todos/1


    // what to do when response is ready
    xhr.onload = function(){
    if (this.status === 200){
        let obj = JSON.parse(this.responseText);
        console.log('obj',obj)
        let list = document.getElementById('list');
        str = "";
        for (key in obj)
        {
            console.log('hy', key)
            str += `<li>${obj[key].employee_name} </li>`;
        }
        list.innerHTML = str;
    }
    else{
        console.log("some error occured")
    }
        
    }

    // send the request

    xhr.send();
    console.log("we are done fetching employee")
}