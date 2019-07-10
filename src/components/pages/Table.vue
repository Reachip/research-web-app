<script>
import Error from '@/components/Error'

export default {
  props: ['id'],
  components: {Error},
  data () {
    return {
      error: false,
      reports: [],
      columns: [
        {
          field: 'ph',
          label: 'PH'
        },

        {
          field: 'temperature',
          label: 'Temperature'
        },

        {
          field: 'longitude',
          label: 'Longitude'
        },

        {
          field: 'latitude',
          label: 'Latitude'
        }
      ],

      total: 700
    }
  },

  created () {
    if (this.id == null) { this.id = 0 }
    this.getReports()
  },

  methods: {
    async getReports () {
      const rawReportsLocation = 'http://localhost:5000/api/navigation/reports?limit=5&start=' + this.id
      try {
        const response = await fetch(rawReportsLocation, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })

        const reports = await response.json()

        for (let i = 0; i < reports.length; i++) {
          this.reports.push([reports[i]])
        }
      } catch (e) {
        this.error = true
      }
    }
  }
}

</script>
<template>
  <section>
    <div class="container">
        <div v-for="report in reports" class="columns" :key="report">
            <div class="column">
                <h2 class="title"></h2>
                <b-collapse class="card">
                    <div slot="trigger" class="card-header">
                        <h3 class="card-header-title">
                        Relevé du {{report[0].timestamp}}
                        </h3>
                    </div>
                    <div class="card-content">
                        <div class="content">
                        <b-table :data="report" :columns="columns"></b-table>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a class="card-footer-item">Voir le graphique de la semaine</a>
                        <a class="card-footer-item">Exporter au format CSV</a>
                    </footer>
                </b-collapse>
                <br>
            </div>
        </div>
        <b-pagination
              :total=total
              :current.sync="id"
              :simple="false"
              :rounded="false"
              :per-page="10"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page">
        </b-pagination>
    </div>
    <br/>
  </section>
</template>
