<template>
    <div class="cadastrocliente mt-5">
        <b-container>
            <b-row>
                <b-col>
                  <b-alert variant="success" :show='mostraralert'>
                    EEEEE FOI!!!!
                    {{ this.form }}
                  </b-alert>

                  <b-form @submit="Cadastrar" @reset="onReset" v-if="show">
                    <b-form-group
                      id="input-group-1"
                      label="Email address:"
                      label-for="input-1"
                      description="We'll never share your email with anyone else."
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter email"
                        required
                      ></b-form-input>
                      {{ form.email }}
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2" description="Mínimo 3 letras">
                      <b-form-input
                        id="input-2"
                        v-model="form.name"
                        placeholder="Enter name"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                      <b-form-select
                        id="input-3"
                        v-model="form.food"
                        :options="foods"
                        required
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                      <b-form-checkbox-group
                        v-model="form.checked"
                        id="checkboxes-4"
                        :aria-describedby="ariaDescribedby"
                      >
                        <b-form-checkbox value="me">Check me out</b-form-checkbox>
                        <b-form-checkbox value="that">Check that out</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                  </b-form>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'CadastroCliente',
  created () {

  },
  data () {
    return {
      cliente: {},
      mostraralert: false,
      form: {
        email: 'claitonweb@gmail.com',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    Cadastrar (event) {
      event.preventDefault()
      if (this.form.name !== 'claiton') {
        alert('nome errado!')
      } else {
        this.show = false
        this.mostraralert = true
      }
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
