<script setup>
import { onMounted } from "vue";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";
import axios from "axios";

onMounted(() => {
  axios
    .get("http://localhost:3000/clientes")
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
});
</script>
<template>
  <div>
    <div class="flex justify-end">
      <RouterLink
        class="bloc md:inline-block rounded bg-blue-600 py-2 px-3"
        to="agregar-cliente"
      >
        Agregar Cliente
      </RouterLink>
    </div>
    <Heading>Listado de Clientes</Heading>
  </div>
</template>
