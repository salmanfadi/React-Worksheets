// words =["look", "kill","brush","look", "kill","brush"]
// res={};
// for(const word of words){
//     if(res[word]){
//         res[word] += 1;
//     }
//     else{
//         res[word] =1;
//     };
// };
// console.log(res);

// arr = [
//  {name:"A", dept:"IT"},
//  {name:"B", dept:"HR"},
//  {name:"C", dept:"IT"}
// ];
// res={};
// for(const item of arr){
//     if(res[item.dept]){
//         res[item.dept].push(item.name);
//     }
//     else{
//         res[item.dept] = [item.name];
//     }
// };
// const result = arr.reduce((acc,{name,dept})=>{
//     acc[dept] ??= [];
//     acc[dept].push(name);
//     return acc;
// },{});
// console.log(result);
// console.log(res);

// arr =[
//  {name:"A", salary:100},
//  {name:"B", salary:200},
//  {name:"C", salary:300}
// ]

// const result = arr.reduce((acc,{name,salary}) =>{
//     acc = acc + salary;
//     return acc;
// },0);
// console.log(result);

// obj = {
//  user:{
//    name:"Salman",
//    address:{
//       city:"Mumbai"
//    }
//  }
// }

// function flatten(obj,parentkey = "", result={}){
//     for(const key in obj){
//         const newkey = parentkey ? ` ${parentkey}.${key} ` : key;


//     if(typeof obj[key] === "object" && obj[key] !== null){
//         flatten(obj[key],newkey,result);
//     }
//     else{
//         result[newkey] = obj[key];
//     }
//     }
//     return result;

// };

// console.log(flatten(obj));

// obj = {
//  apple:3,
//  banana:2,
//  orange:1
// }


// const res = Object.entries(obj).map(([fruit,count])=>({
//     fruit,count
// }));
// console.log(res);

input = [
 ['1','0','0'],
 ['0','1','0'],
 ['1','0','1']
]

const col = input.length;
const row = input[0].length;

const directions=[
    [0,1],
    [1,0],
    [-1,0],
    [0,-1]
]
let res =0;
for(let i = 0;i<col;i++){
    for(let j = 0;j<row;j++){
        if(input[i][j] == '1'){
            gotIsland(input,i,j,row,col);
            res++;
        }
        else{
            continue;
        }
    }
}
function gotIsland(input,i,j,row,col){

    if(i <0 || j<0 || i >= col || j >=row || input[i][j] == '0'){
        return;
    }

    input[i][j] = '0';
    //for all directions wherever there is adjascent ones we need to mark them as 0 using this function as  recursive
    for(const [dr,dc] of directions){
        gotIsland(input,i +dc,j+ dr,row,col);
    }
}
console.log(res);
