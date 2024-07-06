<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ClienteService from "../services/ClienteService";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";
import { FormKit } from "@formkit/vue";

const router = useRouter()
const route = useRoute()

const { id } = route.params;
const formData = reactive({});

onMounted(() => {
    ClienteService.obtenerCliente(id)
        .then(({ data }) => {
            Object.assign(formData, data)
        })
        .catch(({ error }) => console.log(error));
})

const handleSubmit = (data) => {

};
</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="listado-clientes">Ir a inicio</RouterLink>
        </div>
        <Heading>Editar Cliente</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form" submit-label="Agregar Cliente" @submit="handleSubmit"
                    incomplete-message="No se pudo enviar, revisa los mensajes." :value="formData">
                    <FormKit type="text" label="Nombre" name="nombre" v-model="formData.nombre"
                        placeholder="Nombre del cliente" validation="required" :validation-messages="{
                            required: 'El nombre del cliente es obligatorio',
                        }" />

                    <FormKit type="text" label="Apellido" name="apellido" v-model="formData.apellido"
                        placeholder="Apellido del cliente" validation="required" :validation-messages="{
                            required: 'El apellido del cliente es obligatorio',
                        }" />

                    <FormKit type="email" label="Email" name="email" v-model="formData.email"
                        placeholder="Email del cliente" validation="required|email" :validation-messages="{
                            required: 'El email del cliente es obligatorio',
                            email: 'Coloca un email válido',
                        }" />

                    <FormKit type="text" label="Teléfono" name="telefono" v-model="formData.telefono"
                        placeholder="Teléfono XXX-XXX-XXX" validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{
                            required: 'El teléfono del cliente es obligatorio',
                            matches: 'El formato no es válido.',
                        }" />

                    <FormKit type="text" label="Empresa" name="empresa" v-model="formData.empresa"
                        placeholder="Empresa del cliente" />

                    <FormKit type="text" label="Puesto" name="puesto" v-model="formData.puesto"
                        placeholder="Puesto del cliente" />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
.formkit-wrapper {
    max-width: 100% !important;
}
</style>
