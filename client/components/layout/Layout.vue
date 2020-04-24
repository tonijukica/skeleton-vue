<template>
 <div>
  <appbar/>
  <router-view/>
  <custom-footer/>
 </div>
</template>

<script>
import Appbar from './Bar';
import CustomFooter from './Footer';
export default {
  components: {
    Appbar,
    CustomFooter
  }
}
</script>

<style>

</style>
