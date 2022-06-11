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


const createPosts =(post,callBack) =>{
    setTimeout(()=>{
        posts.push(post);
        callBack();
    },2000);
};
// getPosts();
createPosts({title:"post3" ,content:"content of post3"},getPosts);