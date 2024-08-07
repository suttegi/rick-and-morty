<template>
  <div>
    <h1>{{ location.name }}</h1>
    <p>Type: {{ location.type }}</p>
    <p>Dimension: {{ location.dimension }}</p>
    <h2>Residents</h2>
    <div class="card-container">
      <CharacterCard
        v-for="resident in residents"
        :key="resident.id"
        :character="resident"
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
      location: null,
      residents: []
    };
  },
  async created() {
    const locationId = this.$route.params.id;
    const response = await api.getLocation(locationId);
    this.location = response.data;
    await this.loadResidents();
  },
  methods: {
    async loadResidents() {
      const residentPromises = this.location.residents.map(url => api.getCharacterByUrl(url));
      const residents = await Promise.all(residentPromises);
      this.residents = residents.map(response => response.data);
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
