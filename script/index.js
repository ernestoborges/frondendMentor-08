// async function fetchChartData(){
//   const chartFetch = await fetch("./data.json");
//   const data = await chartFetch.json();
// }

// fetchChartData();
// console.log(chartData);
async function foo() {
  let obj;
  const res = await fetch('./data.json')
  obj = await res.json();
  console.log(obj);
  return obj;
}
const data = foo();
console.log(data);
console.log(data.promise);
console.log(data[0]);
console.log(data[1]);
console.log(data[0].day);
console.log(data[0].amount);
console.log(data.promise[0]);
console.log(data.promise[0].day);


// const data = [
//     {
//       "day": "mon",
//       "amount": 17.45
//     },
//     {
//       "day": "tue",
//       "amount": 34.91
//     },
//     {
//       "day": "wed",
//       "amount": 52.36
//     },
//     {
//       "day": "thu",
//       "amount": 31.07
//     },
//     {
//       "day": "fri",
//       "amount": 23.39
//     },
//     {
//       "day": "sat",
//       "amount": 43.28
//     },
//     {
//       "day": "sun",
//       "amount": 25.48
//     }
// ]

const chartItem = document.querySelectorAll(".chart-item");
for(let i=0; i<chartItem.length; i++){

  chartItem[i].getElementsByClassName("item-bar")[0].style.height = (data[i].amount) * 2 +"px";
  chartItem[i].getElementsByTagName("p")[0].innerHTML = data[i].day;

  chartItem[i].addEventListener("mouseover", function(){
    this.getElementsByClassName("item-bar")[0].style.opacity = "0.7";
    this.getElementsByClassName("item-value")[0].style.visibility = "visible"; 
    this.style.cursor = "pointer";    
  });
  chartItem[i].addEventListener("mouseout", function(){
    this.getElementsByClassName("item-bar")[0].style.opacity = "1";
    this.getElementsByClassName("item-value")[0].style.visibility = "hidden"; 
  });
  chartItem[i].addEventListener("click", function(){
    for(let j = 0; j < chartItem.length; j++){
      chartItem[j].getElementsByClassName("item-bar")[0].style.background = "var(--soft-red)"
    };
    this.getElementsByClassName("item-bar")[0].style.background = "var(--cyan)";
  });
}
