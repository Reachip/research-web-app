<template>
  <div class="modal-card" style="width: auto">
    <form @submit.prevent="registerHandler">
      <header class="modal-card-head">
        <p class="modal-card-title">Devenir membre du projet Research</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Adresse mail">
          <b-input type="email" v-model="mail" :value="mail" placeholder="Votre adresse mail" required>
          </b-input>
        </b-field>

        <b-field label="Mot de passe">
          <b-input type="password" v-model="password" :value="password" password-reveal placeholder="Votre nouveau mot de passe" required>
          </b-input>
        </b-field>

        <b-field label="Pseudonyme">
          <b-input placeholder="Votre nouveau pseudo" v-model="username" required></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Fermer</button>
        <button class="button is-primary">S'inscrire</button>
      </footer>
    </form>
    <Error v-if="error" :image="false"></Error>
  </div>
</template>

<script>
import Error from './Error'
export default {
  components: {Error},
  data () {
    return {
      error: false,
      mail: null,
      password: null,
      username: null
    }
  },

  methods: {
    async registerHandler () {
      try {
        const rawResponse = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({username: this.username, password: this.password, mail: this.mail})
        })

        if (rawResponse.status === 401) {
          this.$toast.open({
            duration: 2000,
            message: `Données incorrectes ou pseudonyme et/ou adresse mail déjà saisies`,
            type: 'is-primary'
          })
        } else {
          this.$toast.open({
            duration: 5000,
            message: `
            Bienvenue ${this.username} ! Vous pouvez dès à présent vous connecter afin d'accéder à votre espace personel.
          `,
            type: 'is-primary'
          })

          this.$parent.close()
        }
      } catch (e) {
        this.error = true
      }
    }
  }
}
</script>
