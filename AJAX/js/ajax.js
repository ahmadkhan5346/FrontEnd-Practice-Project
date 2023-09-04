
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler)


function buttonClickHandler(){
    console.log('You have clicked the fetchBtn')
    // instantiate an xhr Object
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);  //https://jsonplaceholder.typicode.com/todos/1

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
    xhr.send();
    console.log("we are done")
}