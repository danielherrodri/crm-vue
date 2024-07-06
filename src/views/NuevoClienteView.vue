<script setup>
import axios from "axios";
import { useRouter } from 'vue-router'
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";
import { FormKit } from "@formkit/vue";

const router = useRouter()
const handleSubmit = (data) => {
    axios
        .post("http://localhost:3000/clientes", data)
        .then((respuesta) => {
            router.push({ name: 'listado-clientes' })
        })
        .catch((error) => console.log(error));
};
</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="listado-clientes">Ir a inicio</RouterLink>
        </div>
        <Heading>Agregar Cliente</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form" submit-label="Agregar Cliente" @submit="handleSubmit"
                    incomplete-message="No se pudo enviar, revisa los mensajes.">
                    <FormKit type="text" label="Nombre" name="nombre" placeholder="Nombre del cliente"
                        validation="required" :validation-messages="{
                            required: 'El nombre del cliente es obligatorio',
                        }" />

                    <FormKit type="text" label="Apellido" name="apellido" placeholder="Apellido del cliente"
                        validation="required" :validation-messages="{
                            required: 'El apellido del cliente es obligatorio',
                        }" />

                    <FormKit type="email" label="Email" name="email" placeholder="Email del cliente"
                        validation="required|email" :validation-messages="{
                            required: 'El email del cliente es obligatorio',
                            email: 'Coloca un email válido',
                        }" />

                    <FormKit type="text" label="Teléfono" name="telefono" placeholder="Teléfono XXX-XXX-XXX"
                        validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/" :validation-messages="{
                            required: 'El teléfono del cliente es obligatorio',
                            matches: 'El formato no es válido.',
                        }" />

                    <FormKit type="text" label="Empresa" name="empresa" placeholder="Empresa del cliente" />

                    <FormKit type="text" label="Puesto" name="puesto" placeholder="Puesto del cliente" />
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
