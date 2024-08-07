<template>
  <div>
    <h1>Episodes</h1>
    <div class="card-container">
      <EpisodeCard
        v-for="episode in episodes"
        :key="episode.id"
        :episode="episode"
      />
    </div>
    <button @click="loadMore">Load More</button>
  </div>
</template>

<script>
import EpisodeCard from '../components/EpisodeCard.vue';
import api from '../services/api';

export default {
  components: {
    EpisodeCard
  },
  data() {
    return {
      episodes: [],
      page: 1
    };
  },
  async created() {
    await this.loadEpisodes();
  },
  methods: {
    async loadEpisodes() {
      const response = await api.getEpisodes(this.page);
      this.episodes = [...this.episodes, ...response.data.results];
    },
    async loadMore() {
      this.page += 1;
      await this.loadEpisodes();
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
