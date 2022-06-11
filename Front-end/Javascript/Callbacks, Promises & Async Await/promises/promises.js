const posts =[
    {title:"post1" ,content:"content of post1"},
    {title:"post2" ,content:"content of post2"},
];

const getPosts =() =>{
    setTimeout(()=>{
        let output ='';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
};


const createPosts =(post) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
        posts.push(post);
        const done = true;
        // const done = false;
        if(done){
            resolve();
        }else{
            reject("error.......")
        }
    },2000);
    });

};

createPosts({title:"post3" ,content:"content of post3"}).then(getPosts).catch((err)=>{console.log(err)});



// كل البرومسوز

// All promises

const p1 =new Promise((resolve,reject) =>{
    setTimeout(resolve,2000,"hello");
});

const p2 =Promise.resolve("Hi");
const p3 =fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

Promise.all([p1,p2,p3]).then((vals)=> console.log(vals));