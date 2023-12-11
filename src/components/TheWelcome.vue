<script setup lang="ts">
// import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <section class="home" id="home">
    <div class="home-content">
      <h1>Hi, I'm <span>Berk Ozerdogan</span></h1>
      <div class="text-animate">
        <h3 data-text="Frontend Developer">Frontend Developer</h3>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium quasi
        exercitationem nam aut totam consequuntur, perspiciatis impedit quam cupiditate ullam
        debitis eius, nemo repellat, reprehenderit magni eveniet ipsum quo?
      </p>
      <div class="btn-box">
        <router-link class="btn" to="/">Hire Me</router-link>
        <router-link class="btn" to="/">Let's Talk</router-link>
      </div>
      <div class="social-media">
        <a :href="link.href" v-for="link in links" :key="link.href"
          ><font-awesome-icon :icon="link.icon"
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
    name: string
    href?: string
    icon?: string[]
    links: Link[]
  } {
    return {
      name: '',
      links: [
        { href: 'http://www.twitter.com', icon: ['fab', 'facebook-f'] },
        { href: 'http://www.github.com/wanudell', icon: ['fab', 'github'] },
        { href: 'http://www.linkedin.com', icon: ['fab', 'instagram'] },
        { href: 'http://www.linkedin.com', icon: ['fab', 'linkedin-in'] }
      ]
    }
  },
  methods: {}
})
</script>

<style scoped>
section {
  min-height: 100vh;
  padding: 10rem 9% 2rem;
}

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

.home-content .text-animate {
  position: relative;
  width: 32.8rem;
}

.home-content .text-animate h3 {
  font-size: 3.4rem;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 0.7px var(--main-color);
}

.home-content .text-animate h3::before,
.home-content .text-animate h3::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease-out;
}

.home-content .text-animate h3:hover::before {
  color: orange;
  transform: translate(4px, 4px);
  -webkit-text-stroke: 0.7px black;
}

.home-content .text-animate h3:hover::after {
  color: #77efff;
  transform: translate(8px, 8px);
  -webkit-text-stroke: 0.7px black;
}

.home-content p {
  font-size: 1.6rem;
  margin: 2rem 0 4rem;
}

span {
  color: var(--main-color);
}

.btn-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  widows: 30rem;
  height: 5rem;
}

.btn-box .btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  background-color: var(--main-color);
  border: 0.2rem solid var(--main-color);
  border-radius: 0.8rem;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  color: var(--bg-color);
  z-index: 1;
  overflow: hidden;
}

.btn-box .btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--bg-color);
  z-index: -1;
  transition: 1s;
}

.btn-box .btn:hover::before {
  width: 100%;
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

.btn-box .btn:hover {
  color: var(--main-color);
}

.imgHover{
  position: absolute;
  top:0;
  right: 0;
  width: 45%;
  height: 100%;
  background-color: var(--bg-color);
  animation: breathEffect 10s infinite;
}

@keyframes breathEffect {
  0%{
    opacity: .5;
  }
  25%{
    opacity: .25;
  }
  50%{
    opacity: .5;
  }
  75%{
    opacity: 0.25;
  }
  100%{
    opacity: .5;
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

.social-media a:nth-child(n){
  animation: move 4s infinite;
}

.social-media a:nth-child(2n){
  animation: move 4s infinite;
  animation-delay: 2s;
}

@keyframes move {
  0%, 100% {
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
    background-position: right;
    justify-content: center;
    align-items: center;
  }

  .btn-box {
    width: 100%;
  }

  .social-media {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
