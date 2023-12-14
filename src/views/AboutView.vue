<template>
  <section class="about" id="about">
    <h2 class="heading">{{ $t('about.about') }}</h2>
    <div class="about-img">
      <img loading="eager" src="@/assets/images/meprofile.png" alt="About Picture" />
      <span class="circle-spin"></span>
    </div>
    <div class="about-content">
      <div class="text-animate">
        <h3>{{ status }}</h3>
      </div>
      <p>
        {{ $t('aboutShortParagraph.one') }}
        <span
          ><b>{{ age }}</b></span
        >
        {{ $t('aboutShortParagraph.two') }}
      </p>
      <div class="btn-box btn aboutButton">
        <router-link to="/education" class="btn">{{ $t('about.read') }}</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About-Page',
  component: {},
  data(): {
    status: string
    statusList: string[]
    statusNumber: number
    age: number
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
      age: 0
    }
  },
  methods: {
    rotateText() {
      this.statusNumber += 1
      if (this.statusNumber == 5) this.statusNumber = 0
      this.status = this.statusList[this.statusNumber]
    },
    calculateAge() {
      this.age = new Date().getFullYear() - 1990
    }
  },
  mounted() {
    this.calculateAge()
    setInterval(this.rotateText, 6000)
  }
})
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* gap: 2rem;
  padding-bottom: 6rem; */
  background-color: var(--third-bg-color);
}

.about-img {
  position: relative;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-img img {
  width: 90%;
  border-radius: 50%;
}

span {
  color: var(--main-color);
}

.about-img .circle-spin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-left: 0.3rem solid var(--main-color);
  border-right: 0.3rem solid var(--main-color);
  animation: aboutSpinner 8s linear infinite;
}

@keyframes aboutSpinner {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  max-width: 60rem;
}

.about-content h3 {
  font-size: 3.2rem;
}

.about-content p {
  font-size: 1.6rem;
  margin: 2rem 0 3rem;
}

.aboutButton {
  display: flex;
  justify-content: center;
}
</style>
