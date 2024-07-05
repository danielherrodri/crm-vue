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
                <FormKit type="text" label="Nombre" placeholder="Nombre del cliente"
                    help="Coloca el nombre del cliente que deseas registrar" validation="required"
                    :validation-messages="{ required: 'El nombre del cliente es obligatorio' }" />
            </FormKit>
        </div>
    </div>
</template>
