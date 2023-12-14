<template>
  <header>
    <a href="#" class="logo"> {{ $t('header.portfolio') }}</a>
    <font-awesome-icon
      @click="showNavbar"
      class="menu-icon"
      id="menu-icon"
      :icon="iconName"
      color="white"
    />
    <nav ref="navbarElement" class="navbar">
      <router-link
        @click="deactivateNavBar"
        ref="navbarElementLink"
        class="navbar-links"
        v-for="tab in headerTabs"
        :key="tab.tabName"
        :to="tab.routeName"
        >{{ tab.tabName }}</router-link
      >
      <a href="#" class="navbar-links language"
        >{{ $t('header.language') }}
        <div class="languagePicker">
          <ul>
            <li @click="changeLanguage('tr')">
              <img src="@/assets/flags/tr.png" alt="Turkey Flag" width="32" />
            </li>
            <li @click="changeLanguage('en')">
              <img src="@/assets/flags/en.png" alt="Turkey Flag" width="32" />
            </li>
            <li @click="changeLanguage('de')">
              <img src="@/assets/flags/de.png" alt="Turkey Flag" width="32" />
            </li>
          </ul>
        </div>
      </a>
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
    home: string
    about: string
    education: string
    skills: string
    contact: string
    currentLanguage: string
  } {
    return {
      name: '',
      iconName: ['fas', 'bars'],
      hamburgerIcon: ['fas', 'bars'],
      xIcon: ['fab', 'mixer'],
      navbarActive: false,
      home: this.$t('header.home'),
      about: this.$t('header.about'),
      education: this.$t('header.education'),
      skills: this.$t('header.skill'),
      contact: this.$t('header.contact'),
      currentLanguage: this.$i18n.locale,
      headerTabs: [
        { tabName: this.$t('header.home'), routeName: '/' },
        { tabName: this.$t('header.about'), routeName: '/about' },
        { tabName: this.$t('header.education'), routeName: '/education' },
        { tabName: this.$t('header.skill'), routeName: '/skills' },
        { tabName: this.$t('header.contact'), routeName: '/contact' }
      ]
    }
  },
  methods: {
    showNavbar() {
      let navBarElement: any = document.querySelector('.navbar')
      this.iconName = this.navbarActive ? this.hamburgerIcon : this.xIcon
      navBarElement.classList.toggle('active')
      this.navbarActive = !this.navbarActive
    },
    deactivateNavBar() {
      let navBarElement: any = document.querySelector('.navbar')
      navBarElement.classList.remove('active')
    },
    changeLanguage(language: string) {
      localStorage.setItem('lang', language)
      this.$i18n.locale = language
    }
  },
  watch: {
    '$i18n.locale': function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.currentLanguage = newVal
        this.headerTabs = [
          { tabName: this.$t('header.home'), routeName: '/' },
          { tabName: this.$t('header.about'), routeName: '/about' },
          { tabName: this.$t('header.education'), routeName: '/education' },
          { tabName: this.$t('header.skill'), routeName: '/skills' },
          { tabName: this.$t('header.contact'), routeName: '/contact' }
        ]
      }
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
  background: linear-gradient(75deg, var(--main-color), orange);
  font-weight: 600;
  cursor: default;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navbar {
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

.language:hover .languagePicker {
  display: inline-block;
}

.languagePicker {
  width: 5rem;
  position: fixed;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  color: var(--bg-color);
  z-index: 1;
  border: 0.3rem solid var(--bg-color);
  display: none;
}

.languagePicker ul {
  list-style: none;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.languagePicker ul li {
  background: rgb(0, 171, 240, 0.3);
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.languagePicker ul li img {
  width: 2.7rem;
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

  .language {
    position: relative;
  }

  .navbar {
    position: absolute;
    top: 100%;
    left: -100%;
    width: 100%;
    padding: 1rem 4%;
    background: rgb(8, 27, 41, 0.9);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    transition: 0.25s ease;
    transition-delay: 0.25s;
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
