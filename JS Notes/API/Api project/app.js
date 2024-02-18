let btn=document.querySelector('#cat');
let btn1=document.querySelector('#joke')
let btn3=document.querySelector("#dog");
let p=document.querySelector("#cat-text");
let p2=document.querySelector("#joke-text");
let img=document.querySelector("#img");
btn.addEventListener("click",async()=>{
           let fact=await getfacts();
           console.log(fact);
});
async function getfacts(){
    try{
        //using axios...........................
        let url="https://catfact.ninja/fact";
        let res=await axios.get(url);
        console.log(res.data.fact)
        p.innerHTML=res.data.fact;
        p.style.color=randColor();
       // let data=await res.json
    }
    catch(e){
        console.log(e);  
    }
};
// joke api function.................................
btn1.addEventListener("click",async()=>{
       let joky=await getjokes();
       console.log(joky);
})
async function getjokes(){
    try{
        const jokes="https://icanhazdadjoke.com/";
        const config={headers:{Accept:"application/json"}};
        let re=await axios.get(jokes,config);
        console.log(re.data);
        p2.innerHTML=re.data.joke;
        p2.style.color=randColor();
    }
    catch(e){
        console.log(e);
    }
};
//dog api function......................................
btn3.addEventListener("click",async()=>{
    let fact1= await getdog();
    img.setAttribute("src",fact1);
    console.log(fact1);
})
async function getdog(){
    try{
        let url1="https://dog.ceo/api/breeds/image/random";
        let dogi=await axios.get(url1);
        return dogi.data.message;
        // img.innerHTML=dogi.data3.fact;
    }
    catch(e){
        console.log(e);
        return "No image found"
    }
}
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}


//     let res="https://catfact.ninja/fact";
//     fetch(res).then((res)=>{
//        console.log(res);
//        res.json().then((data)=>{
//         console.log(data);
//         p.innerHTML=data.fact;
//        });
//     })
//     .catch((err)=>{
//         console.log("error",err);
//     })


// btn3.addEventListener("click",()=>{
//     let rem="yrl";
//     fetch(rem).then((rem)=>{
//        console.log(rem);
//        rem.json().then((data)=>{
//         console.log(data);
//         img.style.backgroundImage = "url('data.fact')"; 
//        });
//     })
//     .catch((err)=>{
//         console.log("error",err);
//     })
// })
