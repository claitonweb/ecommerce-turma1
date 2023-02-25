import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sobre from '@/components/Sobre'
import Produtos from '@/components/Produtos'
import CadastroCliente from '@/components/CadastroCliente'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: Produtos
    },
    {
      path: '/cliente/cadastro',
      name: 'CadastroCliente',
      component: CadastroCliente
    }
  ]
})
