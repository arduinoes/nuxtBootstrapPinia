<script setup>
import BaseCard from '../components/BaseCard.vue'
import { almacen } from '../stores/almacen.ts'

const datos = almacen()

</script>
<template>
  <div class="row justify-content-center">
    <BaseCard
      class="col-4 m-2"
      v-for="obra in datos.obras"
      :key="obra.author"
      :obra="obra"
    />
  </div>
</template>
