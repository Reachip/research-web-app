<script>
import ChartExample from '../ChartExample'

export default {
  methods: {
    modalChart () {
      this.$modal.open({
        parent: this,
        component: ChartExample,
        hasModalCard: false
      })
    }
  }
}

</script>

<template class="container">
  <section>
    <div class="hero hero-body columns">
      <div class="column">
        <figure class="image is-128x128 container">
          <img src="@/assets/logo.png" />
        </figure>
      </div>
      <div class="column has-text-centered">
        <a href="" class="button thickbox is-primary is-large">Voir la carte</a>
        <hr />
        <p>Version BETA</p>
        <hr />
        <h2 class="title is-2 toggleadd is-1 is-cursor-pointer is-size-1-touch">Une plateforme consultable et
          contribuable
          par tous autour des données du lac</h2>
      </div>
    </div>
    <figure class="image">
      <img src="@/assets/mael-balland.jpg" alt="Photo de Mael Balland">
      <br/>
    </figure>
    <div class="hero has-background-white-ter hero-body">
      <h2 class="title is-2">Pourquoi et comment ?</h2>
      <div class="columns is-centered">
        <div class="column">
          <h3 class="title is-3">L'éco-conception à travers le "robot de navigation Research"</h3>
          <hr />
          <h4 class="subtitle is-5">Le boitier de navigation Research a été conçu de façon à ce que qu'il est une
            surface la moins superflu que possible. Il limite donc son impact carbone et pas contrainte de simplicité,
            ce dernier a été conçu en plastique.</h4>
        </div>
        <div class="column">
          <h3 class="title is-3">l'IOT et ses données récoltés aux service de tous</h3>
          <hr />
          <h4 class="subtitle is-5">La donnée depuis l'avénement du numérique est partout. C'est ceux pourquoi à travers
            Research, nous souhaitons offrir l'accés aux données liées à l'eau de manière simple et accessible.</h4>
        </div>
      </div>
      <br />
    </div>
    <div class="hero hero-body has-text-centered">
      <div class="columns">
        <div class="column">
          <h1 class="title is-2">Vous pouvez consulter les données</h1>
          <p>Parce que Research est une initiative gratuite et à la destination de tous, Que vous soyez pêcheur,
            baigneur, chercheur ou simple curieux, l'analyse des données du lac Léman vous sera utile et doit donc vous être
            simple et accessible. La solution pensée est de vous proposer une carte interactive est colorée en fonction du
            niveau de pollution de l'eau ainsi qu'une vue plus axée statistique grâce à un tableau des données.</p>
          <br/>
          <button class="button is-primary is-medium" @click="modalChart">
            Voir un exemple de graphique
          </button>
        </div>
        <div class="column">
          <h1 class="title is-2">Mais aussi diriger le robot de navigation</h1>
        </div>
      </div>
      <hr />
      <h1 class="title is-2">Sinon, vous travaillez plûtot dans le secteur de l'informatique ?</h1>
      <p>Research ne se limite pas son site web afin de consulter les donnÉes. Parfois il est nécessaire de récupérer
        des données brute de façon optimisé et simple. A l'issu de cette demande, l'équipe du projet propose une
        API à usage public afin de aquérir et traiter l'information à l'aide d'une seul requête HTTP.</p>
      <br/>
    </div>
    <div class="hero hero-body has-background-white-ter is-centered">
      <h3 class="title is-2">Le développement durable est au centre des idéaux du projet</h3>
      <hr />
      <h5 class="subtitle is-3">L'economie</h5>
      <p class="has-text-weight-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet,
        dui
        ut blandit gravida, urna purus pulvinar tellus, vitae molestie ligula lectus id dolor. Quisque id bibendum ex,
        ac scelerisque felis. Donec interdum, odio et malesuada varius, arcu augue</p>
      <br />

      <h5 class="subtitle is-3">L'aspect social</h5>
      <p class="has-text-weight-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet,
        dui
        ut blandit gravida, urna purus pulvinar tellus, vitae molestie ligula lectus id dolor. Quisque id bibendum ex,
        ac
        scelerisque felis. Donec interdum, odio et malesuada varius, arcu augue</p>
      <br />
      <h5 class="subtitle is-3">L'environnement au coeur de la démarche</h5>
      <p class="has-text-weight-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet,
        dui
        ut blandit gravida, urna purus pulvinar tellus, vitae molestie ligula lectus id dolor. Quisque id bibendum ex,
        ac
        scelerisque felis. Donec interdum, odio et malesuada varius, arcu augue</p>
    </div>
  </section>
</template>
