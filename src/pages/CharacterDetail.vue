<template>
  <div v-if="character">
    <h1>{{ character.name }}</h1>
    <img :src="character.image" alt="character.name">
    <p>Status: {{ character.status }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Gender: {{ character.gender }}</p>
    <p>Location: {{ character.location.name }}</p>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      character: null
    };
  },
  async created() {
    const response = await api.getCharacter(this.$route.params.id);
    this.character = response.data;
  }
};
</script>
