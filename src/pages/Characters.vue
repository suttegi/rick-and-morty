<template>
  <div>
    <h1>Characters</h1>
    <div class="card-container">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
    <button @click="loadMore">Load More</button>
  </div>
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue';
import api from '../services/api';

export default {
  components: {
    CharacterCard
  },
  data() {
    return {
      characters: [],
      page: 1
    };
  },
  async created() {
    await this.loadCharacters();
  },
  methods: {
    async loadCharacters() {
      const response = await api.getCharacters(this.page);
      this.characters = [...this.characters, ...response.data.results];
    },
    async loadMore() {
      this.page += 1;
      await this.loadCharacters();
    }
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  margin-top: 20px;
}
</style>
