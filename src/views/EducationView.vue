<template>
  <section class="education" id="education">
    <h2 class="heading">My <span>Journey</span></h2>

    <div class="education-row">
      <div class="education-column">
        <h3 class="title">Education</h3>
        <div class="education-box">
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2019-2021
              </div>
              <h3>Master Degree - University</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit!
              </p>
            </div>
          </div>
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2019-2021
              </div>
              <h3>Master Degree - University</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit!
              </p>
            </div>
          </div>
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2019-2021
              </div>
              <h3>Master Degree - University</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="education-column">
        <h3 class="title">Experience</h3>
        <div class="education-box">
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2019-2021
              </div>
              <h3>Master Degree - University</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit!
              </p>
            </div>
          </div>
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2019-2021
              </div>
              <h3>Master Degree - University</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit!
              </p>
            </div>
          </div>
          <div class="education-content">
            <div class="content">
              <div class="year">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" /> 2019-2021
              </div>
              <h3>Master Degree - University</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit!
              </p>
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

.education-box .education-content::before{
    content: '';
    position: absolute;
    top: 0;
    left:-1.1rem;
    width: 2rem;
    height: 2rem;
    background-color: var(--main-color);
    border-radius: 50%;
}

.education-content .content {
  position: relative;
  padding: 1.5rem;
  border: .2rem solid var(--main-color);
  border-radius: .6rem;
  margin-bottom: 2rem;
}

.education-content .content::before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 0;
    height: 100%;
    background: var(--second-bg-color);
    z-index: -1;
    transition:.5s;
}

.education-content .content:hover::before{
    width: 100%;
}

.education-content .content:hover::before .year{
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
  font-size: 2rem;
}

.education-content .content p {
  font-size: 1.6rem;
  padding-top: 0.5rem;
}
</style>
