<template>
  <section>
    <form @submit="loginHandler">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Se connecter</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Nom d'utilisateur">
            <b-input v-model="username" placeholder="Votre pseudonyme" required>
            </b-input>
          </b-field>

          <b-field label="Mot de passe">
            <b-input type="password" v-model="password" password-reveal placeholder="Votre mot de passe" required>
            </b-input>
          </b-field>

          <b-checkbox>Se souvenir de moi</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">Fermer</button>
          <button class="button is-primary">Se connecter</button>
        </footer>
      </div>
    </form>
  </section>
</template>

<script>
import Error from './Error'
export default {
  components: {Error},
  data () {
    return {
      error: false,
      response: null,
      password: null,
      username: null
    }
  },

  methods: {
    loginHandler () {
      this.$http.post('http://localhost:5000/api/auth',
        {body: {username: this.username, password: this.password}, headers: {}}
      ).then((response) => { this.response = response }, (response) => { this.response = response })

      switch (this.response.status) {
        case 200:
          this.$toast.open({
            duration: 2000,
            message: `Bienvenue`,
            type: 'is-primary'
          })
          break

        case 500:
          this.$toast.open({
            duration: 2000,
            message: `Une erreur interne s'est produite`,
            type: 'is-primary'
          })
          break

        case 401:
          this.$toast.open({
            duration: 2000,
            message: `Nom d'utilisateur ou mot de passe inconnue`,
            type: 'is-primary'
          })
          break

        default:
          this.$toast.open({
            duration: 2000,
            message: `Une erreur inconnue s'est produite`,
            type: 'is-primary'
          })
      }
    }
  }
}
</script>
