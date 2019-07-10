<script>
import jwt from 'jsonwebtoken'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import BInput from 'buefy/src/components/input/Input'

export default {
  data () {
    return {
      token: localStorage.getItem('jwt'),
      datas: null,
      isOpen: false
    }
  },

  components: {BInput},

  created () {
    this.getDatas()
  },

  methods: {
    getDatas () {
      try {
        this.datas = jwt.verify(this.token, 'lol')
      } catch (_) {
        this.datas = null
      }
    },

    _modal (component) {
      this.$modal.open({
        parent: this,
        component: component,
        hasModalCard: true
      })
    },

    loginModal () {
      this._modal(LoginForm)
    },

    registerModal () {
      this._modal(RegisterForm)
    }
  }
}
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-start">
        <router-link class="navbar-item is-tab" to="/" v-on:click.native="isOpen = !isOpen">
          Accueil
        </router-link>

        <router-link class="navbar-item is-tab" to="/" v-on:click.native="isOpen = !isOpen">
          Carte de navigation
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Tableaux et graphiques des données du lac
          </a>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="table" v-on:click.native="isOpen = !isOpen">
              Tableaux
            </router-link>
            <router-link class="navbar-item" to="/" v-on:click.native="isOpen = !isOpen">
              Graphiques
            </router-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Autour de Research
          </a>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/developer" v-on:click.native="isOpen = !isOpen">
              Pour les développeurs
            </router-link>
            <router-link class="navbar-item" to="/" v-on:click.native="isOpen = !isOpen">
              Contribuer
            </router-link>
            <router-link class="navbar-item" to="/" v-on:click.native="isOpen = !isOpen">
              Blog
            </router-link>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="datas == null">
            <div class="buttons">
              <b-button type="is-primary" @click="registerModal">
                S'inscrire
              </b-button>
              <b-button type="is-light" @click="loginModal">
                Se connecter
              </b-button>
            </div>
          </div>
          <div v-else>
            <p>Bienvenue {{this.datas.username}}</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
