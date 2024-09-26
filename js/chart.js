'use strict';

let canvasElem = document.getElementById('chart')
let state = new AppState();
state.loadItems();
/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

function renderChart() {
    let state = new AppState();
    state.loadItems();

    let productNames = [];
    let productClicks = [];
    let productViews = [];

    // Poblar los arrays con los datos
    for (let i = 0; i < state.allProducts.length; i++) {
        productNames.push(state.allProducts[i].name);
        productClicks.push(state.allProducts[i].timesClicked);
        productViews.push(state.allProducts[i].timesShown);
    }

    // Configuración del gráfico
    let chartObj = {
        type: 'bar',
        data: {
            labels: productNames,
            datasets: [
                {
                    label: '# of votes',
                    data: productClicks,
                    borderWidth: 1,
                    backgroundColor: 'rgba(102, 187, 106, 0.7)', // Verde suave
                    borderColor: 'rgba(76, 175, 80, 1)' // Verde oscuro
                },
                {
                    label: '# of views',
                    data: productViews,
                    borderWidth: 1,
                    backgroundColor: 'rgba(129, 212, 250, 0.7)', // Azul claro
                    borderColor: 'rgba(41, 182, 246, 1)' // Azul oscuro
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'black'
                    }
                },
                x: {
                    ticks: {
                        color: 'black'
                    }
                }
            }
        }
    };

    // Renderizar el gráfico
    new Chart(document.getElementById('chart'), chartObj);
}

renderChart();