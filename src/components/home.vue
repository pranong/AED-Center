<template>
  <div id="app">
    <div class="show">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">AED Center</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#"><router-link to="/">Home <span class="sr-only">(current)</span></router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/Dashboard">Dashboard</router-link></a>
              </li>
            </ul>
          </div>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-default" ><span class="glyphicon glyphicon-search"></span></button>
        </form>
      </nav>
    </div>


      <gmap-map
      :center="center"
      :zoom="15"
      map-type-id="roadmap"
      style="width: 100%; height: 550px">

        <gmap-marker
        :key="index"
        v-for="(devices, index) of device"
        :position="toPosition(devices.lat, devices.lng)"
        :clickable="true"
        :draggable="false"
        @click="setifw ()">

        

          <gmap-info-window
          :opened.sync="infowindow"
          >
          <!-- :opened.sync="m.ifw" -->
            <div class="infoHead" align="left" >
              <font size="5">AED {{index+1}}</font>
            </div>
            <div align="left">
              Temperature : {{devices.temperature}}<br>
              Humidity : {{devices.humidity}}<br>
            </div>

            <div v-if="devices.status == '1'" align="center">
              Status : Available&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="./img/gc.png">
              <hr>
              <div v-if="devices.lock == '1'">
                <button class="btn btn-success" @click="setopen(index)">Open</button>
                <img src="./img/un2.png">
              </div>
              <div v-else>
                <button class="btn btn-warning" @click="setclose(index)">Close</button>
                <img src="./img/un.png">
              </div>
            </div>

            <div v-else align="center">
              Status : Unavailable&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="./img/rc.png">
              <hr>
              <div v-if="devices.lock == '1'">
                <button class="btn btn-danger">Unavailable</button>
                <img src="./img/un2.png" >
              </div>
              <div v-else>
                <button class="btn btn-danger">Unavailable</button>
                <img src="./img/un.png">
              </div>
            </div>
          </gmap-info-window>
        </gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
import { deviceRef } from './firebase'
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
  data: function data () {
    return {
      count: 0,
      center: { lat: 14.163979, lng: 101.343258 },
      infowindow: false
    }
  },
  firebase: {
    device: deviceRef
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
    },
    setclose (index) {
      deviceRef.child(index + 1).update({lock: 1})
    },
    setifw () {
      this.infowindow = true
    }
  },
  mounted () {
    this.$nextTick(() => {
      $('.show').hide()
      $('.show').fadeIn('slow')
    })
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
}.
.infoHead{
  font-family:    Arial, Helvetica, sans-serif;
  font-size:      50px;
  font-weight:    bold;
}
</style>
