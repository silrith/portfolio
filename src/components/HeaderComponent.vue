<template>
  <header>
    <a href="#" class="logo"> Portfolio. </a>
    <font-awesome-icon class="menu-icon" id="menu-icon" :icon="['fas', 'bars']" color="white" />
    <nav ref="navbarElement" class="navbar">
      <router-link
        ref="navbarElementLink"
        class="navbar-links"
        v-for="tab in headerTabs"
        :key="tab.tabName"
        :to="tab.routeName"
        >{{ tab.tabName }}</router-link
      >
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Tabs {
  tabName?: string
  routeName: string
}

export default defineComponent({
  name: 'Header-Component',
  component: {},
  data(): {
    name: string
    headerTabs: Tabs[]
  } {
    return {
      name: '',
      headerTabs: [
        { tabName: 'Home', routeName: '/' },
        { tabName: 'About', routeName: '/about' },
        { tabName: 'Education', routeName: '/education' },
        { tabName: 'Skills', routeName: '/skills' },
        { tabName: 'Contact', routeName: '/contact' }
      ]
    }
  },
  methods: {
    // showNavbar(){
    //   let navBarElement : any = this.$refs.navbarElement;
    //   navBarElement.style.display = (navBarElement.style.display == 'none') ? 'block' : 'none';
    // }
  }
})
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 0 0.4rem var(--main-color);
}

.logo {
  font-size: 2.5rem;
  color: var(--text-color);
  font-weight: 600;
  cursor: default;
}

.navbar a {
  font-size: 1.5rem;
  color: var(--text-color);
  font-weight: 500;
  text-decoration: none;
  margin-left: 3.5rem;
  transition: 0.5s ease;
}

.navbar a:hover {
  color: var(--main-color);
}

.menu-icon {
  font-size: 2.7rem;
  color: var(--text-color);
  background-color: transparent;
  display: none;
}

.navbar2 {
  display: none;
}

@media (max-width: 992px) {
  header {
    padding: 2rem 4%;
  }
}

@media (max-width: 768px) {
  .menu-icon {
    display: inline-flex;
  }

  .navbar {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    padding: 1rem 4%;
    background: var(--bg-color);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    display: none;
  }

  .navbar .navbar-links {
    display: block;
    font-size: 2rem;
    margin: 3rem 0;
  }
}
</style>
