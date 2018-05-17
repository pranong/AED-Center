<template>
  <div id="app">
    <div class="show" v-if="login">
      <input type="hidden" v-model="lats">
      <input type="hidden" v-model="lngs">
      <div class="container" align="center" v-if="lats">
        <button @click="center=toPosition(lats, lngs); zoom=18;" class="btn btn-success">Go!</button>  
      </div>
      <div v-else></div>

      <gmap-map
      :center="center"
      :zoom="zoom"
      map-type-id="roadmap"
      style="width: 100%; height: 530px">

        <gmap-marker
        :key="index"
        v-for="(events, index) of event"
        :position="toPosition(events.lat, events.lng)"
        :clickable="true"
        :draggable="false"
        @click="toggleInfoWindow(m,i)">

        <gmap-info-window
          :opened.sync="infowindow"
          @click="rechange(index)"
          >
          <!-- :opened.sync="m.ifw" -->
          <router-link :to="{ name: 'imgInfo', params: { eventId: events['.key'] }}">more info</router-link>
          </gmap-info-window>
        </gmap-marker>

        <gmap-marker
        :key="index"
        v-for="(devices, index) of device"
        :position="toPosition(devices.lat, devices.lng)"
        :clickable="true"
        :draggable="false"
        >



          <gmap-info-window
          :opened.sync="infowindow"
          @click="rechange(index)"
          >
          <!-- :opened.sync="m.ifw" -->
          <div @click="rechange(index)">
            <div v-if="devices.change==1">
              <div class="infoHead" align="left" >
              <div v-if="devices.battery > 75">
              <b style="font-family: 'Open Sans', sans-serif;font-size: 25px;" class="blink_me">AED {{index+1}} - </b>
              <b style="font-family: Quicksand, sans-serif;position:  relative;bottom: 2px;">{{devices.battery}} % </b>
                <img src="./img/100.png" height="30" style="position:  relative;bottom: 3px;">
              </div>
              <div v-else-if="devices.battery > 50">
              <b style="font-family: 'Open Sans', sans-serif;font-size: 25px;" class="blink_me">AED {{index+1}} - </b>
              <b style="font-family: Quicksand, sans-serif;position:  relative;bottom: 2px;">{{devices.battery}} % </b>
                <img src="./img/75.png" height="30" style="position:  relative;bottom: 3px;">
              </div>
              <div v-else-if="devices.battery > 25">
              <b style="font-family: 'Open Sans', sans-serif;font-size: 25px;" class="blink_me">AED {{index+1}} - </b>
              <b style="font-family: Quicksand, sans-serif;position:  relative;bottom: 2px;">{{devices.battery}} % </b>
                <img src="./img/50.png" height="30" style="position:  relative;bottom: 3px;">
              </div>
              <div v-else-if="devices.battery > 0">
              <b style="font-family: 'Open Sans', sans-serif;font-size: 25px;" class="blink_me">AED {{index+1}} - </b>
              <b style="font-family: Quicksand, sans-serif;position:  relative;bottom: 2px;">{{devices.battery}} % </b>
                <img src="./img/25.png" height="30" style="position:  relative;bottom: 3px;">
              </div>
            </div>
          </div>
          <div v-else>
            <div class="infoHead" align="left" >
              <div v-if="devices.battery > 75">
              <b style="font-family: 'Open Sans', sans-serif;font-size: 25px;">AED {{index+1}} - </b>
              <b style="font-family: Quicksand, sans-serif;position:  relative;bottom: 2px;">{{devices.battery}} % </b>
                <img src="./img/100.png" height="30" style="position:  relative;bottom: 3px;">
              </div>
              <div v-else-if="devices.battery > 50">
              <b style="font-family: 'Open Sans', sans-serif;font-size: 25px;">AED {{index+1}} - </b>
              <b style="font-family: Quicksand, sans-serif;position:  relative;bottom: 2px;">{{devices.battery}} % </b>
                <img src="./img/75.png" height="30" style="position:  relative;bottom: 3px;">
              </div>
              <div v-else-if="devices.battery > 25">
              <b style="font-family: 'Open Sans', sans-serif;font-size: 25px;">AED {{index+1}} - </b>
              <b style="font-family: Quicksand, sans-serif;position:  relative;bottom: 2px;">{{devices.battery}} % </b>
                <img src="./img/50.png" height="30" style="position:  relative;bottom: 3px;">
              </div>
              <div v-else-if="devices.battery > 0">
              <b style="font-family: 'Open Sans', sans-serif;font-size: 25px;">AED {{index+1}} - </b>
              <b style="font-family: Quicksand, sans-serif;position:  relative;bottom: 2px;">{{devices.battery}} % </b>
                <img src="./img/25.png" height="30" style="position:  relative;bottom: 3px;">
              </div>
            </div>
          </div> 
            <div align="left">
              <b style="font-family: 'Quicksand', sans-serif;">Temperature : {{devices.temperature}}</b><br>
              <b style="font-family: 'Quicksand', sans-serif;">Humidity : {{devices.humidity}}</b><br>
            </div>

            <div v-if="devices.status == '1'">
              <b style="font-family: 'Quicksand', sans-serif;">Status : Available&nbsp;&nbsp;&nbsp;&nbsp;</b>
              <img src="./img/gc.png">
              <hr>
              <div v-if="devices.lock == '1'">
                <button class="btn btn-success" @click="setopen(index)"><b style="font-family: 'Open Sans', sans-serif;">Open</b></button>
                <img src="./img/un2.png">
              </div>
              <div v-else>
                <button class="btn btn-warning" @click="setclose(index)"><b style="font-family: 'Open Sans', sans-serif;">Close</b></button>
                <img src="./img/un.png">
              </div>
            </div>

            <div v-else>
              <b style="font-family: 'Quicksand', sans-serif;">Status : Unavailable&nbsp;&nbsp;&nbsp;&nbsp;</b>
              <img src="./img/rc.png">
              <hr>
              <div v-if="devices.lock == '1'">
                <button class="btn btn-success" @click="setopen(index)"><b style="font-family: 'Open Sans', sans-serif;">Open</b></button>
                <img src="./img/un2.png">
              </div>
              <div v-else>
                <button class="btn btn-warning" @click="setclose(index)"><b style="font-family: 'Open Sans', sans-serif;">Close</b></button>
                <img src="./img/un.png">
              </div>
            </div>

            <div v-if="devices.enablepass == '0'">
              <button class="btn btn-success" @click="setenable(index)"><b style="font-family: 'Open Sans', sans-serif;">Enable Pass</b></button>
              <img src="./img/unable.png" height="20">
            </div>

            <div v-else>
              <button class="btn btn-danger" @click="setdisable(index)"><b style="font-family: 'Open Sans', sans-serif;">Disable Pass</b></button>
              <img src="./img/enable.png" height="20">
            </div>
          </div>
          
          </gmap-info-window>
        </gmap-marker>
      </gmap-map>
    </div>
    <div class="container" v-else>
      ไป Log-in ก่อน นาจา นาจา
    </div>
  </div>
</template>

<script>
import { deviceRef, notiRef, eventRef } from './firebase'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC833ACqvQDf0YfbwsSqPiX2Am7zz1wxN0',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

export default {
  props: ['login', 'lats', 'lngs', 'centersearch'],
  data: function data () {
    return {
      count: 0,
      center: { lat: 14.163979, lng: 101.343258 },
      infowindow: true,
      zoom: 15,
      date: '',
      time: ''
    }
  },
  firebase: {
    device: deviceRef,
    noti: notiRef,
    event: eventRef
  },
  methods: {
    test () {
      console.log(this.device)
    },
    toPosition (lat, lng) {
      return {lat, lng}
    },
    setopen (index) {
      deviceRef.child(index + 1).update({lock: 0})
      var d = new Date() // for now
      d.getHours() // => 9
      d.getMinutes() // =>  30
      d.getSeconds() // => 51
      var dd = d.getDate()
      var mm = d.getMonth() + 1
      var yyyy = d.getFullYear()
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      this.time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
      this.date = dd + '/' + mm + '/' + yyyy
      deviceRef.child(index + 1).child('log').child('lock').push({
        locklog: 0,
        date: this.date,
        time: this.time,
        access: 'web-access'
      })
      // notiRef.child('2').push({
      //   info: 'Key Lock/Unlock',
      //   id: index + 1,
      //   log: 'Unlock',
      //   date: this.date,
      //   time: this.time,
      //   access: 'web-access'
      // })
      console.log(this.time)
      console.log(this.date)
    },
    setenable (index) {
      deviceRef.child(index + 1).update({enablepass: 1})
    },
    setdisable (index) {
      deviceRef.child(index + 1).update({enablepass: 0})
    },
    setclose (index) {
      var d = new Date() // for now
      d.getHours() // => 9
      d.getMinutes() // =>  30
      d.getSeconds() // => 51
      var dd = d.getDate()
      var mm = d.getMonth() + 1
      var yyyy = d.getFullYear()
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      this.time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
      this.date = dd + '/' + mm + '/' + yyyy

      deviceRef.child(index + 1).child('log').child('lock').push({
        locklog: 1,
        date: this.date,
        time: this.time,
        access: 'web-access'
      })
      // notiRef.child('2').push({
      //   info: 'Key Lock/Unlock',
      //   id: index + 1,
      //   log: 'Lock',
      //   date: this.date,
      //   time: this.time,
      //   access: 'web-access'
      // })
      deviceRef.child(index + 1).update({lock: 1})
      console.log(this.time)
      console.log(this.date)
    },
    setifw () {
      this.infowindow = true
    },
    rechange (index) {
      deviceRef.child(index + 1).update({change: 0})
    }
  },
  mounted () {
    this.$nextTick(() => {
      $('.show').hide()
      $('.show').fadeIn('slow')
    })
    console.log('5555' + this.lats + this.lngs)
  },
  computed: {
    meter: function () {
      return `background: rgb(${this.r}, ${this.g}, ${this.b});`
    }
  }
}
</script>

<style>
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
map {
  width:100%;
  height: 600px;
  display: block;
}
/* .infoHead{
  font-family:    Arial, Helvetica, sans-serif;
  font-size:      50px;
  font-weight:    bold;
} */
.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {  
  50% { opacity: 0; }
}
</style>
