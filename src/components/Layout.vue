<template>
  <v-header></v-header>

  <div>
      <div class="row" v-for="i in 10" style="margin: 0 .2em; 0">
        <div class="col text-primary" >
          <div v-text="text"></div>
        </div>
        <div class="col-2  d-none d-lg-block">
            <img style="object-fit: cover; object-position: 50% 0;width: 100%;max-height: 200px; margin-left: 1em;" class="img-thumbnai float-lg-end" src="https://images.pexels.com/photos/5847901/pexels-photo-5847901.jpeg" alt="Happy New Year">
        </div>
      </div>
    </div>
  
  <v-footer></v-footer>
</template>
  
<script setup>
import vHeader from './AppHeader.vue'
import vFooter from './AppFooter.vue'

const text = ref("How do you do!")


</script>
