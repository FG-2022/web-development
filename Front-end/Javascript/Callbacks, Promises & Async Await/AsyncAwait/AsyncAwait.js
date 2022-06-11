

// Async await 

const fetchUsers = async(url)=>{
    let output ='';
    const res = await fetch(url);
    const data = await res.json();
    data.map((d,index)=>{
        output +=`<h1>${d.name}</h1>`;
    });
    output +=`<h1>${data.name}</h1>`;
    document.body.innerHTML=output;
    console.log(data);

}

fetchUsers("https://jsonplaceholder.typicode.com/users");



