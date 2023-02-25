<template>
    <div class="produtos mt-5">
        <b-button @click="AddProduto()">Adicionar Produto</b-button>
        <b-container class="bv-example-row">
            <b-row>
                <b-col md="4" v-for="(produto, index) in produtos" :key="index">
                    <b-card
                        :title="produto.name"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-4"
                    >
                        <b-card-text>
                            {{ produto.description }}
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'Produtos',
  created () {
    this.AddProduto()
  },
  data () {
    return {
      produtos: []
    }
  },
  methods: {
    AddProduto () {
      // exibir a mensagem de loading
      // fazer uma chamada para o backend
      // depois remover o loading
      // carregar os produtos
      this.produtos.push({
        'id': '1',
        'name': 'Produto 1',
        'description': 'O melhor produto está aqui'
      },
      {
        'id': '2',
        'name': 'Produto 2',
        'description': 'O melhor produto está aqui'
      },
      {
        'id': '3',
        'name': 'Produto 3',
        'description': 'O melhor produto está aqui'
      })
    }
  }
}
</script>
