<template>
  <header>
    <a href="#" class="logo"> Portfolio. </a>

    <div class="dropdown">
      <button class="bars">
        <font-awesome-icon class="barsChild" :icon="['fas', 'bars']" color="white" />
      </button>
      <div class="dropdown-content">
        <a href="#"> Home </a>
        <hr>
        <a href="#"> About </a>
        <hr>
        <a href="#"> Services </a>
        <hr>
        <a href="#"> Portfolio </a>
        <hr>
        <a href="#"> Contact </a>
      </div>
    </div>

    <nav ref="navbarRef" class="navbar">
      <a href="#"> Home </a>
      <a href="#"> About </a>
      <a href="#"> Services </a>
      <a href="#"> Portfolio </a>
      <a href="#"> Contact </a>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header-Component',
  component: {},
  data(): {
    name: string
  } {
    return {
      name: ''
    }
  },
  methods: {
  }
})
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  background: rgb(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  padding: 2rem 10%;
  justify-content: space-between;
  z-index: 100;
}

.logo {
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}

.navbar a {
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 2.5rem;
}

.navbar a:hover {
  color: orange;
  font-size: 1.8rem;
  transition: font-size 0.3s ease-in-out;
}

.bars {
  display: none;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2.2rem;
}

.bars:hover .barsChild {
  color: orange;
  scale: 1.2;
  transition: scale 0.3s ease;
}

.dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
  height: 100%;
}

.dropdown-content {
  display: none;
  position: fixed;
  background: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(100px);
  min-width: max-content;
  z-index: 50;
  right: 5px;
  text-align: center;
  padding: 1.3rem 5%;
  border-radius: 5px;
  border: 1px solid #333;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 16px;
  text-shadow: 1px 1px 2px orange, 0 0 1em orange, 0 0 0.2em orange;
}

.dropdown:hover .dropdown-content {display: block;}

@media (max-width: 992px) {
  header {
    padding: 1.3rem 2% 1.3rem 5%;
  }

  .bars {
    display: block;
  }

  .navbar {
    position: absolute;
    top: 100%;
    right: 0;
    width: 20%;
    background: rgb(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    align-items: center;
    display: none;
    flex-direction: column;
    align-items: end;
  }

  .navbar a {
    font-size: 1.3rem;
    padding: 1.3rem 10%;
    width: max-content;
  }

  .navbar a:hover {
    color: orange;
    font-size: 1.3rem;
  }
}
</style>
