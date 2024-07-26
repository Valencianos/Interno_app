<script setup lang="ts">
  import LogoLink from '@/components/atoms/LogoLink.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__box">
        <div class="footer__media">
          <LogoLink />
          <a href="#" class="footer__media_link">
            <img src="@/assets/img/social/twitter.svg" alt="Twitter">
          </a>
          <a href="#" class="footer__media_link">
            <img src="@/assets/img/social/linkedin.svg" alt="LinkedIn">
          </a>
        </div>

        <div class="footer__links">
          <h4 class="footer__links_title">Pages</h4>
          <p class="footer__links_text">About Us</p>
          <p class="footer__links_text">Our Projects</p>
          <p class="footer__links_text">Our Team</p>
          <p class="footer__links_text">Contact Us</p>
          <p class="footer__links_text">Services</p>
        </div>

        <div class="footer__links">
          <h4 class="footer__links_title">Services</h4>
          <p class="footer__links_text">Kitchan</p>
          <p class="footer__links_text">Living Area</p>
          <p class="footer__links_text">Bathroom</p>
          <p class="footer__links_text">Dinning Hall</p>
          <p class="footer__links_text">Bedroom</p>
        </div>

        <div class="footer__contacts">
          <h4 class="footer__contacts_title">Contact</h4>
          <p class="footer__contacts_info">55 East Birchwood Ave.<br> Brooklyn, New York 11201</p>
          <p class="footer__contacts_info">contact@interno.com</p>
          <p class="footer__contacts_info">(123) 456 - 7890</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-bottom: 100px;
  &__box {
    display: flex;
    justify-content: space-between;
  }
  &__logo {
    margin-bottom: 30px;
  }
  &__media {
    &_link {
      margin-right: 20px;
    }
  }
  &__links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &_title {
      font-family: "DM Serif Display", sans-serif;
      font-weight: 400;
      font-size: 25px;
      line-height: 1.25;
      color: #292f36;
    }
    &_text {
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 22px;
      line-height: 3;
      letter-spacing: 0.01em;
      color: #4d5053;
    }
  }
  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &_title {
      font-family: "DM Serif Display", sans-serif;
      font-weight: 400;
      font-size: 25px;
      line-height: 1.25;
      color: #292f36;
    }
    &_info {
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 22px;
      line-height: 3;
      letter-spacing: 0.01em;
      color: #4d5053;
    }
  }
}
</style>