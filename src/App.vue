<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg"  type="dark" variant="dark">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/sobre">Sobre</b-nav-item>
            <b-nav-item to="/produtos">Produtos</b-nav-item>
            <b-nav-item to="/cliente/cadastro">Cadastre-se</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
