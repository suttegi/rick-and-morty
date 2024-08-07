<template>
  <div class="card">
    <router-link :to="'/location/' + location.id">
      <h3>{{ location.name }}</h3>
      <p>Type: {{ location.type }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 10px 0 0;
  color: #e0e0e0;
}

p {
  color: #b0b0b0;
}
</style>
