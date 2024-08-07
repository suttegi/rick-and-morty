<template>
  <div>
    <h1>Locations</h1>
    <div class="card-container">
      <LocationCard
        v-for="location in locations"
        :key="location.id"
        :location="location"
      />
    </div>
    <button @click="loadMore">Load More</button>
  </div>
</template>

<script>
import LocationCard from '../components/LocationCard.vue';
import api from '../services/api';

export default {
  components: {
    LocationCard
  },
  data() {
    return {
      locations: [],
      page: 1
    };
  },
  async created() {
    await this.loadLocations();
  },
  methods: {
    async loadLocations() {
      const response = await api.getLocations(this.page);
      this.locations = [...this.locations, ...response.data.results];
    },
    async loadMore() {
      this.page += 1;
      await this.loadLocations();
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
