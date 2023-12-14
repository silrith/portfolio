<template>
  <section class="contact" id="contact">
    <h2 class="heading">{{$t("header.contact")}}</h2>

    <form action="#">
      <div class="input-box">
        <div class="input-field">
          <input type="text" :placeholder='$t("contact.fullname")' required />
          <span class="focus"></span>
        </div>
        <div class="input-field">
          <input type="text" :placeholder='$t("contact.email")' required />
          <span class="focus"></span>
        </div>
      </div>
      <div class="input-box">
        <div class="input-field">
          <input type="number" :placeholder='$t("contact.mobile")' required />
          <span class="focus"></span>
        </div>
        <div class="input-field">
          <input type="text" :placeholder='$t("contact.subject")' required />
          <span class="focus"></span>
        </div>
      </div>
      <div class="textarea-field">
        <textarea
          name="contactTextArea"
          id=""
          cols="30"
          rows="10"
          :placeholder='$t("contact.message")'
          required
        ></textarea>
        <span class="focus"></span>
      </div>
      <div class="contactButton">
        <button type="submit" class="btn">{{$t("contact.submit")}}</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.contact {
  min-height: auto;
  padding: 13rem 7rem;
}

.contact form {
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;
}

.contact form .input-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.contact form .input-box .input-field {
  position: relative;
  width: 49%;
  margin: 0.8rem 0;
}

.contact form .input-box .input-field input,
.contact form .textarea-field textarea {
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  font-size: 1.6rem;
  color: var(--text-color);
  background-color: transparent;
  border-radius: 0.6rem;
  border: 0.2rem solid var(--main-color);
}

.contact form .input-box .input-field input::placeholder,
.contact form .textarea-field textarea::placeholder {
  color: var(--text-color);
}

.contact form .textarea-field {
  position: relative;
  margin: 0.8rem 0 2.7rem;
  display: flex;
}

.contact form .textarea-field textarea {
  resize: none;
}

.contact form .btn-box .btn {
  cursor: pointer;
}

.contactButton {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5rem;
}

.contactButton button {
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

.contactButton .btn::before {
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

.contactButton button:hover::before {
  width: 100%;
}

.contactButton button:hover {
  color: var(--main-color);
}

.contact form .focus {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--second-bg-color);
  border-radius: 0.6rem;
  z-index: -1;
  transition: 0.5s;
}

.contact form .input-box .input-field input:focus ~ .focus,
.contact form .input-box .input-field input:valid ~ .focus,
.contact form .textarea-field textarea:focus ~ .focus,
.contact form .textarea-field textarea:valid ~ .focus {
  width: 100%;
}

@media(max-width: 762px){
.contact{
  padding: 35% 4% 5rem 5%;
}

  .contact form .input-box .input-field{
    width: 100%;
  }
}
</style>
