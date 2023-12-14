<script setup lang="ts">
// import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <section class="home" id="home">
    <div class="home-content">
      <h1>
        {{ $t('home.hi') }}
        <div class="text-animate2">
          <h3 data-text="Berk Ozerdogan" class="text-animate2">Berk Ozerdogan</h3>
        </div>
      </h1>
      <div class="text-animate">
        <h3>{{ status }}</h3>
      </div>
      <p>
        {{ $t('homeShortParagraph') }}
      </p>
      <div class="btn-box">
        <router-link @click="mailMe" class="btn" to="/">{{ $t('home.hire') }}</router-link>
        <router-link @click="callMe" class="btn" to="/">{{ $t('home.talk') }}</router-link>
      </div>
      <div class="social-media">
        <a :href="link.href" v-for="link in links" :key="link.href" target="_blank"
          ><font-awesome-icon class="linkIcon" :icon="link.icon"
        /></a>
      </div>
      <div class="imgHover"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
interface Link {
  href?: string
  icon?: string[]
}

export default defineComponent({
  name: 'Header-Component',
  component: {},
  data(): {
    href?: string
    icon?: string[]
    links: Link[]
    status: string
    statusList: string[]
    statusNumber: number
  } {
    return {
      statusList: [
        'Full Stack Developer',
        'Frontend Developer',
        'Backend Developer',
        'Mobile Developer',
        'UI Designer'
      ],
      status: 'Full Stack Developer',
      statusNumber: 0,
      links: [
        { href: 'https://twitter.com/berkmiyimkiben', icon: ['fab', 'x-twitter'] },
        { href: 'http://www.github.com/wanudell', icon: ['fab', 'github'] },
        { href: 'https://www.instagram.com/berkmiyimki/', icon: ['fab', 'instagram'] },
        { href: 'https://www.linkedin.com/in/berk-%C3%B6-51218918b/', icon: ['fab', 'linkedin-in'] }
      ]
    }
  },
  methods: {
    rotateText() {
      this.statusNumber += 1
      if (this.statusNumber == 5) this.statusNumber = 0
      this.status = this.statusList[this.statusNumber]
    },
    callMe() {
      const mobileNumber: string = '+905061678928'
      window.location.href = 'tel:' + mobileNumber
    },
    mailMe() {
      const emailAddress: string = 'berkozerdogan@gmail.com'
      window.location.href = 'mailto:' + emailAddress
    }
  },
  mounted() {
    setInterval(this.rotateText, 6000)
  }
})
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  padding: 0 9%;
  background: url('@/assets/images/mebg.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}

/* text'e background image'ı birleştirme */
/* .home-content{
  background-image: url('@/assets/images/cat.jpg');
  background-position: center;
  background-size: cover;
  background-clip: text;
} */

.home-content {
  max-width: 62rem;
}

.home-content h1 {
  font-size: 6.6rem;
  font-weight: 700;
}

.home-content h3:nth-of-type(2) {
  margin-bottom: 2rem;
}

.home-content h1 {
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
}

.home-content p {
  font-size: 1.6rem;
  text-align: justify;
  margin: 2rem 0 4rem;
}

.btn-box .btn:nth-child(2) {
  background: transparent;
  color: var(--main-color);
}

.btn-box .btn:nth-child(2):hover {
  color: var(--bg-color);
}

.btn-box .btn:nth-child(2)::before {
  background-color: var(--main-color);
}

.imgHover {
  position: absolute;
  top: 0;
  right: 0;
  width: 45%;
  height: 100%;
  background-color: var(--bg-color);
  animation: breathEffect 10s infinite;
}

@keyframes breathEffect {
  0% {
    opacity: 0.5;
  }
  25% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.5;
  }
}

.social-media a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  background-color: transparent;
  border: 0.2rem solid #555;
  border-radius: 50%;
  font-size: 3rem;
  color: var(--main-color);
  margin: 3rem 1.5rem 3rem 0;
  transition: 1s ease;
}

.social-media a:hover {
  background: var(--main-color);
  color: var(--second-bg-color);
  box-shadow: 0 0 1rem var(--main-color);
}

.social-media a:hover .linkIcon {
  transition: transform 1s ease;
  transform: rotate(360deg);
}

.social-media a:nth-child(n) {
  animation: move 4s infinite;
}

.social-media a:nth-child(2n) {
  animation: move 4s infinite;
  animation-delay: 2s;
}

@keyframes move {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(25px);
  }
}

@media (max-width: 992px) {
  .home {
    display: flex;
    flex-direction: column;
    text-align: justify;
    background-position: top;
    background-size: contain;
    justify-content: center;
    align-items: center;
    padding: 5% 4%;
  }

  .home h1{
    font-size: 5rem;
  }

  .home-content {
    width: 100%;
  }

  .btn-box {
    width: 100%;
  }

  .social-media {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .imgHover {
    display: none;
  }
}
</style>
