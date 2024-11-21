<script lang="js">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Pills",
    props: {
      lancamento: { type: String, required: true },
      diretor: { type: String, required: true },
    },
    setup(props) {
      const ano = props.lancamento
      const diretor = props.diretor

      return {
        ano,
        diretor
      }
    }
  })
</script>

<template>
  <div class="pills">
    <ul>
      <li>Ano: {{ ano }}</li>
      <li>Diretor: {{ diretor }}</li>
    </ul>
  </div>
</template>

<style scoped>
.pills ul {
  display: flex;
}

.pills ul li {
  background-color: var(--primary-color);
  border-radius: 20px;
  color: #fff;
  padding: 5px 15px;
  margin: 0 10px;
  text-transform: uppercase;
}

.pills ul li:first-child {
  margin-left: 0;
}
</style>