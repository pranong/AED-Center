<template>
  <div>
    <div v-for="(events, index) of event">
      <div v-if="events['.key'] == eventId">
        <center>
        <div class="rounded col" style="width: 500px;background-color: #99c2ff;padding-top: 10px;padding-bottom: 10px;marginBottom: 20px;">
        <h3 style="font-family: 'Open Sans', sans-serif;"><span class="glyphicon glyphicon-info-sign"></span> Details<hr></h3>
        <div class="rounded row"  style="margin-left: 10px;margin-bottom: 20px;margin-right: 10px;background-color: white;">
          <div class="col-sm" style="border-right: 1px solid #ccc;text-align: right"><br>
            <b style="font-family: 'Open Sans', sans-serif;">Date & Time </b><span class="glyphicon glyphicon-time" style="color:#ffbb33; font-size: 15px;"></span> <br>
            <b style="font-family: 'Open Sans', sans-serif;">Location </b><span class="glyphicon glyphicon-map-marker" style="color:#d9534f; font-size: 15px;"></span> <br>
            <b style="font-family: 'Open Sans', sans-serif;">Amount </b><span class="glyphicon glyphicon-user" style="color:#3399ff; font-size: 15px;"></span> <br>
            <b style="font-family: 'Open Sans', sans-serif;">Type </b><span class="glyphicon glyphicon-th-list" style="color:#5CB85C; font-size: 15px;"></span> <br>
            <b style="font-family: 'Open Sans', sans-serif;">Detail </b><span class="glyphicon glyphicon-stats" style="color:rgb(205, 92, 177); font-size: 15px;"></span> <br>
            
          </div>
          <div class="col" style="border-right: 1px solid #ccc;text-align: left">
            <br>
            <b style="font-family: 'Open Sans', sans-serif;">{{events.date}} | {{events.time}}</b><br>
            <b style="font-family: 'Open Sans', sans-serif;">{{events.location}} <a v-bind:href="'https://www.google.com/maps/search/?api=1&query=' + events.lat + ',' + events.lng">Go</a></b><br>
            <b style="font-family: 'Open Sans', sans-serif;">{{events.amount}}</b><br>
            <b style="font-family: 'Open Sans', sans-serif;">{{events.type}}</b><br>
            <b style="font-family: 'Open Sans', sans-serif;">{{events.detail}}</b><br>
          </div>
        </div>
      </div>
      </center>
      <center>
        <div v-for="(img, index) of events.img">
           <img :src="img.url"><br><br>
        </div>
      </center>  
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
