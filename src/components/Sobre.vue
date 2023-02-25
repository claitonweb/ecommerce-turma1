<template>
    <div class="sobre">
      <h1>
        Essa é a página {{ nomedapagina }}
      </h1>
      <b-button @click="changeNamePage('Teste')">Mudar nome da página</b-button>
      <b-button variant="danger" @click="changeNamePage('Outro teste')">Mudar nome da página de novo</b-button>
    </div>
</template>

<script>
export default {
  name: 'Sobre',
  data () {
    return {
      msg: '',
      nomedapagina: 'Página Sobre'
    }
  },
  methods: {
    changeNamePage (data) {
      this.nomedapagina = data
    }
  }
}
</script>
