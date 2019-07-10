<template>
  <div class="container">
      <canvas id="chart">
        Désolé, votre navigateur ne prend pas en charge &lt;canvas&gt;.
      </canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  mounted () {
    const canvas = document.getElementById('chart')
    const canvasCtx = canvas.getContext('2d')

    let PH = [10.0, 2.0, 8.0, 0.0, 3.0, 7.0, 1.1, 14.0, 3.0, 2.0, 10.0]
    let temperature = [2.0, 2.3, 3.0, 5.0, 7.0, 8.0, 10.0, 11.0, 11.0, 10.0, 9.0, 2.1]

    const chart = new Chart(canvasCtx, {
      type: 'line',
      responsive: true,
      maintainAspectRatio: false,
      data: {
        labels: ['Janvier', 'Février', 'Mars',
          'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Novembre', 'Décembre'
        ],

        datasets: [{
          label: "Exemple de taux de PH dans l'eau en fonction des mois",
          backgroundColor: 'rgba(11, 82, 105, 1)',
          borderColor: 'rgba(11, 82, 105, 1)',
          data: PH
        },

        {
          label: "Exemple de la température dans l'eau en fonction des mois",
          backgroundColor: 'rgba(217, 176, 140, 1)',
          borderColor: 'rgba(217, 176, 140, 1)',
          data: temperature
        }
        ]
      }
    })

    setTimeout(() => {

    }, 4000)
  }
}

</script>
