<script setup>
import RouterLink from '../components/UI/RouterLink.vue'
</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink class="bloc md:inline-block rounded bg-blue-600 py-2 px-3" to="agregar-cliente">
                Agregar Cliente
            </RouterLink>
        </div>
        <h1 class="text-4xl font-extrabold text-slate-500">Clientes</h1>
    </div>
</template>
