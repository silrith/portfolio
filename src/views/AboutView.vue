<template>
  <section class="about" id="about">
    <h2 class="heading">About <span>Me</span></h2>
    <div class="about-img">
      <img src="@/assets/images/meprofile.png" alt="About Picture" />
      <span class="circle-spin"></span>
    </div>
    <div class="about-content">
      <h3>Frontend Developer!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequuntur quas ipsa
        impedit ea assumenda officiis officia molestias eligendi ex quidem alias quo. Ex veritatis
        voluptas dolor explicabo iure dolore.
      </p>
      <div class="btn-box btn aboutButton">
        <a href="#" class="btn">Read More</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 6rem;
  background-color: var(--third-bg-color);
}

.about-img{
  position: relative;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-img img{
  width: 90%;
  border-radius: 50%;
}

span{
  color: var(--main-color);
}

.about-img .circle-spin{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-top: .5rem solid var(--second-bg-color);
  border-bottom: .5rem solid var(--second-bg-color);
  border-left: .5rem solid var(--main-color);
  border-right: .5rem solid var(--main-color);
}

.about-content{
  text-align: center;
}

.about-content h3{
  font-size: 2.6rem;
}

.about-content p{
  font-size: 1.6rem;
  margin: 2rem 0 3rem;
}

.aboutButton{
  display: flex;
  justify-content: center;
}
</style>
