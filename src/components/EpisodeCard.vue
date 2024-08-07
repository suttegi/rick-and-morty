<template>
  <div class="card">
    <router-link :to="'/episode/' + episode.id">
      <h3>{{ episode.name }}</h3>
      <p>{{ episode.air_date }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    episode: {
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
