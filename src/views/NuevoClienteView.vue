<script setup>
import RouterLink from '../components/UI/RouterLink.vue'
import Heading from '../components/UI/Heading.vue'
import { FormKit } from '@formkit/vue'
</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="inicio">Ir a inicio</RouterLink>
        </div>
        <Heading>Agregar Cliente</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <FormKit type="form">

            </FormKit>
        </div>
    </div>
</template>
