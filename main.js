// const barColors = ['rgba(12, 36, 97, 0.5)', 'rgba(229, 80, 57, 0.5)', 'rgba(74, 105, 189, 0.5)', 'rgba(96, 163, 188, 0.5)', 'rgba(120, 224, 143, 0.5)', 'rgba(0, 0, 0, 0.5)']
// const borderColors = ['rgba(12, 36, 97, 1)', 'rgba(229, 80, 57, 1)', 'rgba(74, 105, 189, 1)', 'rgba(96, 163, 188, 1)', 'rgba(120, 224, 143, 1)', 'rgba(0, 0, 0, 1)']

// let ctx = document.getElementById('myChart')

// const copperArr = [5850, 5122, 5825]
// const alumArr = [6850, 5922, 6825]
// const brassArr = [3420, 2880, 3150]
// const monthsArr = ['January', 'February', 'March']

// let arraySize = 5

//     let copper = copperArr.slice(0, arraySize)
//     let alum = alumArr.slice(0, arraySize)
//     let brass = brassArr.slice(0, arraySize)
//     let months = monthsArr.slice(0, arraySize)
    
//     let myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: months,    
//             datasets: [{
//                 label:'Copper Units',
//                 data: copper,
//                 backgroundColor: '#e67f22',
//                 borderColor: '#d25400',
//                 borderWidth: 0.5,
//             },{
//                 label:'Aluminum Units',
//                 data: alum,
//                 backgroundColor: '#95a5a5',
//                 borderColor: '#7e8c8d',
//                 borderWidth: 0.5,
//             },{
//                 label:'Brass Units',
//                 data: brass,
//                 backgroundColor: '#ffcd02',
//                 borderColor: '#ffa800',
//                 borderWidth: 0.5,
//             }]
//         },
//         options: {
//             responsive: true
//           },
//      }
//     )

 

// console.log(myChart.data.labels)
// console.log(myChart.data.datasets[0].data)
// console.log(myChart.data.datasets[1].data)
// console.log(myChart.data.datasets[2].data)

// document.getElementById('minus-one').addEventListener('click', ()=>{
//   myChart.data.labels.pop()
//   myChart.data.datasets[1].data.pop()
//   myChart.data.datasets[0].data.pop()
//   myChart.data.datasets[2].data.pop()
//   myChart.update();

//   console.log(myChart.data.labels)
//   console.log(myChart.data.datasets[0].data)
//   console.log(myChart.data.datasets[1].data)
//   console.log(myChart.data.datasets[2].data)
// })
// document.getElementById('plus-one').addEventListener('click', ()=>{
//   let random_number1 = Math.floor(Math.random() * 7000) 
//   let random_number2 = Math.floor(Math.random() * 7000) 
//   let random_number3 = Math.floor(Math.random() * 7000)

//   myChart.data.labels.push("month")
//   myChart.data.datasets[1].data.push(random_number1)
//   myChart.data.datasets[0].data.push(random_number2)
//   myChart.data.datasets[2].data.push(random_number3)
//   myChart.update();

//   console.log(myChart.data.labels)
//   console.log(myChart.data.datasets[0].data)
//   console.log(myChart.data.datasets[1].data)
//   console.log(myChart.data.datasets[2].data)
// })










let ctx = document.getElementById('myChart')

const stars = [17, 9, 1]
const frameworks = ['Image Missing', 'Bad Etch', 'Dimples']
const countries = ['USA', 'Canada', 'UK', 'China', 'Japan']
const barColors = ['rgba(12, 36, 97, 0.5)', 'rgba(229, 80, 57, 0.5)', 'rgba(74, 105, 189, 0.5)', 'rgba(96, 163, 188, 0.5)', 'rgba(120, 224, 143, 0.5)', 'rgba(0, 0, 0, 0.5)']
const borderColors = ['rgba(12, 36, 97, 1)', 'rgba(229, 80, 57, 1)', 'rgba(74, 105, 189, 1)', 'rgba(96, 163, 188, 1)', 'rgba(120, 224, 143, 1)', 'rgba(0, 0, 0, 1)']


let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: frameworks,         
        datasets: [{
            label:'Non-Conformance by Frequency',
            data: stars,
            backgroundColor: barColors,
            borderColor: borderColors,
            borderWidth: 0.5,
        }]
    },
    options: {
        responsive: true,
               
    }
 }
)






























//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------


// arraySize = 4
// console.log(arraySize)

// let monthVals = document.querySelectorAll('.month-val').forEach(item => {
//   item.addEventListener('click', e => {

//     // console.log(e.target.value)
//     arraySize = e.target.value

//     let copper = copperArr.slice(0, arraySize)
//     let alum = alumArr.slice(0, arraySize)
//     let brass = brassArr.slice(0, arraySize)
//     let months = monthsArr.slice(0, arraySize)
    
//     let myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: months,    
//             datasets: [{
//                 label:'Copper Units',
//                 data: copper,
//                 backgroundColor: '#e67f22',
//                 borderColor: '#d25400',
//                 borderWidth: 0.5,
//             },{
//                 label:'Aluminum Units',
//                 data: alum,
//                 backgroundColor: '#95a5a5',
//                 borderColor: '#7e8c8d',
//                 borderWidth: 0.5,
//             },{
//                 label:'Brass Units',
//                 data: brass,
//                 backgroundColor: '#ffcd02',
//                 borderColor: '#ffa800',
//                 borderWidth: 0.5,
//             }]
//         },
//         options: {
//             responsive: true
//           },
//      }
//     )
   
//   })
// })








