<template>
  <header>
    <a href="#" class="logo"> Portfolio.</a>
    <font-awesome-icon
      @click="showNavbar"
      class="menu-icon"
      id="menu-icon"
      :icon=iconName
      color="white"
    />
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
    iconName: string[]
    hamburgerIcon: string[]
    xIcon: string[]
    headerTabs: Tabs[]
    navbarActive: boolean
  } {
    return {
      name: '',
      iconName: ['fas', 'bars'],
      hamburgerIcon: ['fas', 'bars'],
      xIcon: ['fab', 'mixer'],
      navbarActive: false,
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
    showNavbar() {
      let navBarElement: any = document.querySelector('.navbar')
      this.iconName = this.navbarActive ? this.hamburgerIcon : this.xIcon;
      navBarElement.classList.toggle('active');
      this.navbarActive = !this.navbarActive;
    }
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

.navbar{
  position: relative;

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
    display: block;
  }

  .navbar {
    position: absolute;
    top: 100%;
    left: -100%;
    width: 100%;
    padding: 1rem 4%;
    background: rgb(8, 27, 41, 0.9);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    transition: .25s ease;
    transition-delay: .25s;
  }

  .navbar.active {
    left: 0;
  }

  .navbar .navbar-links {
    display: block;
    font-size: 2rem;
    margin: 3rem 0;
    z-index: 1;
  }
}
</style>
