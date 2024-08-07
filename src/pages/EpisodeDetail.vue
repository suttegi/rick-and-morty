<template>
  <div>
    <h1>{{ episode.name }}</h1>
    <p>Air Date: {{ episode.air_date }}</p>
    <h2>Characters</h2>
    <div class="card-container">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
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
      episode: null,
      characters: []
    };
  },
  async created() {
    const episodeId = this.$route.params.id;
    const response = await api.getEpisode(episodeId);
    this.episode = response.data;
    await this.loadCharacters();
  },
  methods: {
    async loadCharacters() {
      const characterPromises = this.episode.characters.map(url => api.getCharacterByUrl(url));
      const characters = await Promise.all(characterPromises);
      this.characters = characters.map(response => response.data);
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

h1 {
  color: #66bb6a;
}

h2 {
  color: #81c784;
}
</style>
