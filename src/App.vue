<template>
  <div id="app">
    <div class="">
      <ul>
        <li>
          <p>{{ device }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { deviceRef } from './firebase'
export default {
  data () {
    return {
      Status: status
    }
  },
  firebase: {
    device: deviceRef
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
