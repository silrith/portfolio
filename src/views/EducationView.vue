<template>
  <section class="education" id="education">
    <h2 class="heading">
      {{ $t('skills.my') }} <span>{{ $t('education.journey') }}</span>
    </h2>

    <div class="education-row">
      <div class="education-column">
        <h3 class="title">{{ $t('header.education') }}</h3>
        <div class="education-box">
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2020-2021
              </div>
              <h3>{{ $t('education.certification') }} - {{ $t('education.educationCompany') }}</h3>
              <p>{{ $t('education.baek') }} - {{ $t('education.fsd') }}</p>
            </div>
          </div>
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2019-2020
              </div>
              <h3>{{ $t('education.master') }} - {{ $t('education.university') }}</h3>
              <p>{{ $t('education.itü') }}- {{ $t('education.iqe') }}</p>
            </div>
          </div>
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2015-2019
              </div>
              <h3>{{ $t('education.bachelor') }} - {{ $t('education.university') }}</h3>
              <p>
                {{ $t('education.duzce') }} {{ $t('education.university2') }} -
                {{ $t('education.chemistry') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="education-column">
        <h3 class="title">{{ $t('education.experience') }}</h3>
        <div class="education-box">
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2022-2023
              </div>
              <h3>Verimix Software - Mid Full Stack Developer</h3>
              <p>C#, .NET, EF CORE, WEB API, HTML5, CSS3, JS, Flutter</p>
            </div>
          </div>
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2021-2022
              </div>
              <h3>{{$t("education.baek")}} - Jr Full Stack Developer</h3>
              <p>C#, .NET, EF CORE, WEB API, HTML5, CSS3, JS</p>
            </div>
          </div>
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2020-2021
              </div>
              <h3>Romsis Software - Jr Backend Developer</h3>
              <p>C#, .NET, EF CORE, WEB API</p>
            </div>
          </div>
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2020-2021
              </div>
              <h3>{{$t("education.baek")}}  - Intern Full Stack Developer</h3>
              <p>C#, HTML5, CSS3, JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: auto;
  padding-bottom: 5rem;
}

.education .education-row {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
}

.education-row .education-column {
  flex: 1 1 40rem;
}

.education-row .title {
  font-size: 2.5rem;
  margin: 0 0 1.5rem 2rem;
}

.education-column .education-box {
  border-left: 0.2rem solid var(--main-color);
}

.education-box .education-content {
  position: relative;
  padding-left: 2rem;
}

.education-box .education-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: -1.1rem;
  width: 2rem;
  height: 2rem;
  background-color: var(--main-color);
  border-radius: 50%;
}

.education-content .content {
  position: relative;
  padding: 1.5rem;
  border: 0.2rem solid var(--main-color);
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  height: 15rem;
}

.education-content .content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--second-bg-color);
  z-index: -1;
  transition: 0.5s;
}

.education-content .content:hover::before {
  width: 100%;
}

.education-content .content:hover::before .year {
  color: white;
}

.education-content .content .year {
  font-size: 1.5rem;
  color: var(--main-color);
  padding-bottom: 0.5rem;
}

.education-content .content .year .icon {
  padding-right: 1rem;
}

.education-content h3 {
  font-size: 1.7rem;
  padding-top: .5rem;
}

.education-content .content p {
  font-size: 1.6rem;
  padding-top: 0.5rem;
}

@media (max-width: 520px){
  .education-content .content p,h3{
    padding-top: 2.5rem;
  }
}
</style>
