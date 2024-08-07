<template>
  <div class="card">
    <router-link :to="'/character/' + character.id">
      <img :src="character.image" :alt="character.name" class="character-image" />
      <h3>{{ character.name }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.character-image {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

h3 {
  margin: 10px 0 0;
  color: #e0e0e0;
}
</style>
