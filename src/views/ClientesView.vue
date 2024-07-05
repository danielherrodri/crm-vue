<script setup>
import RouterLink from '../components/UI/RouterLink.vue'
import Heading from '../components/UI/Heading.vue'
</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink class="bloc md:inline-block rounded bg-blue-600 py-2 px-3" to="agregar-cliente">
                Agregar Cliente
            </RouterLink>
        </div>
        <Heading>Listado de Clientes</Heading>
    </div>
</template>
