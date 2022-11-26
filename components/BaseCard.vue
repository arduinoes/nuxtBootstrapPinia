<script setup>
defineProps({
  obra: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="card" style="width: 18rem">
    <img :src="obra.photo" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ obra.author }}</h5>
      <p class="card-text">
        {{ obra.title }}
      </p>
      <a href="#" class="btn btn-primary">Leer más</a>
    </div>
  </div>
</template>
