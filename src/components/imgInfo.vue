<template>
  <div>
    <div v-for="(events, index) of event">
      <div v-if="events['.key'] == eventId">
        <div v-for="(img, index) of events.img">
           <img :src="img.url"><br><br>
        </div>
        
      </div> 
    </div>
  </div>
</template>

<script>
import { eventRef } from './firebase'
export default {
  props: ['eventId'],
  name: 'imgInfo',
  data () {
    return {
      id: this.eventId
    }
  },
  firebase: {
    event: eventRef
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
