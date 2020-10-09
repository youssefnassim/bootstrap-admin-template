/*
 * Author: Youssef Nassim
 * Date: 21 Sep 2020
 *
 **/
import Sidebar from './sidebar'
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js'

import 'bootstrap'
// eslint-disable-next-line no-unused-vars
const sidebar = new Sidebar()

// Scroll event to update header style
window.addEventListener('scroll', function () {
  return this.scrollY > 10 ?
    document.querySelector('.main header').classList.add('fixed') :
    document.querySelector('.main header').classList.remove('fixed')
})

// chart
// const ctx = document.getElementById('s').getContext('2d')

// const testChart = new Chart(ctx, {
//   type: 'line',
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           // eslint-disable-next-line object-shorthand
//           callback: function (value) {
//             return '$' + value + 'k'
//           }
//         }
//       }]
//     }
//   },
//   data: {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [{
//       label: 'Earned',
//       data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
//     }]
//   }
// })
