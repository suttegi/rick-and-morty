<template>
  <div id="app">
    <nav>
      <router-link to="/characters">Characters</router-link>
      <router-link to="/episodes">Episodes</router-link>
      <router-link to="/locations">Locations</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background-color: #121212;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  color: #66bb6a;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s;
}

nav a:hover {
  color: #81c784;
}

h1, h2 {
  color: #66bb6a;
}

a {
  color: #66bb6a;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #81c784;
}

.card {
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px;
  padding: 20px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

button {
  background-color: #66bb6a;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #81c784;
}
</style>
