<template>
  <v-header></v-header>

  <div>
      <div class="row" v-for="i in 10" style="margin: 0 .2em; 0">
        <div class="col text-primary" >
          <div v-text="text"></div>
          <div style="margin: 1.2rem 0;">
            <button class="btn btn-success">查看全文</button>
          </div>
        </div>
        <div class="col-2  d-none d-lg-block">
            <img style="object-fit: cover; object-position: 50% 0;width: 100%;max-height: 200px; margin-left: 1em;" class="img-thumbnai float-lg-end" src="C:\Users\AnFeng\Desktop\Liu_yifei\saika.jpg" alt="None">
        </div>
      </div>
    </div>
  <v-footer></v-footer>
</template>
  
<script setup>
import vHeader from './AppHeader.vue'
import vFooter from './AppFooter.vue'

const text = ref("我爱的人早在我18岁的时候就爱过我了，至于她25岁是谁的妻子，30岁是谁的母亲，我都祝她幸福。她曾经陪我走过一段路，让我明白了一些事情，我十分感恩！")


</script>