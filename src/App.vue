<template>
  <nav>
    <router-link to="/">Список валют</router-link> |
    <router-link to="/converter">Конвертер</router-link>
  </nav>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #db4500;
}
.container{
  max-width: 800px ;
  width: 100%;
  margin: 0 auto;
}
</style>
