<template>
  <div id="app">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="width: 100%">
            <div class="navbar-header">
              <a class="navbar-brand" href="#" style="height: 70px;margin-right: 0px;padding-top: 5px;padding-right: 5px;padding-left: 5px;padding-bottom: 5px;"><router-link to="/"><img src="./components/img/icon.png" alt="" width="60" class="imgnav"></router-link></a>
            </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#"><router-link to="/"><span class="glyphicon glyphicon-home"></span> <b style="font-family: 'Open Sans', sans-serif;">HOME</b></router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/Dashboard"><span class="glyphicon glyphicon-file"></span> <b style="font-family: 'Open Sans', sans-serif;">DASHBOARD</b></router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/addusr"><span class="glyphicon glyphicon-file"></span> <b style="font-family: 'Open Sans', sans-serif;">ADD USER</b></router-link></a>
              </li>
            </ul>
          </div>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
          <button class="btn btn-default" @click="searchlocation()"><span class="glyphicon glyphicon-search"></span>{{numnoti.num}}</button>
        </form>
        <div v-for="notis in numnoti" class="hidden">
          {{notiss = notis.num}}
        </div>
        <ul class="nav navbar-nav navbar-right" v-if="login">
        <li class="nav-item" v-if="notiss > 0">
          <a href="#" data-toggle="dropdown">
          <button class="btn btn-primary btn-md round flash-button" @click="resetnoti()"><span class="glyphicon glyphicon-bell" aria-hidden="true"></span><b style="font-family: 'Open Sans', sans-serif;"> Notifications <font>({{notiss}})</font></b></button></a>
			      <ul id="login-dp" class="dropdown-menu">
              <li>
					      <div class="row">
							    <div class="col-lg-15">
                    <div v-for="(devices, index) of notiReverse" v-bind:key="devices['.key']" class="">
                      <div v-if="index<6">
                        <div v-if="devices.info == 'Key Lock/Unlock'">
                        <h4 style="color: Red;">AED {{devices.id}} - {{devices.info}}</h4>
                      </div>
                      <div v-else-if="devices.info == 'Availability'">
                        <h4 style="color: Blue;">AED {{devices.id}} - {{devices.info}}</h4>
                      </div>
                      <div v-else-if="devices.info == 'Temp/Humi Problem'">
                        <h4 style="color: Purple;">AED {{devices.id}} - {{devices.info}}</h4>
                      </div>
                        Status : {{devices.log}}<br>On 
                        Date : {{devices.date}} - 
                        Time : {{devices.time}}<br>
                        Access by {{devices.access}}
                        {{index}}
                      <hr>
                      </div>
                    </div>
							    </div>
					      </div>
				      </li>
		      	</ul>
        </li>
        <li class="nav-item" v-if="notiss == 0">
        <a href="#" data-toggle="dropdown">
          <button class="btn btn-primary btn-md round"><span class="glyphicon glyphicon-bell" aria-hidden="true"></span><b style="font-family: 'Open Sans', sans-serif;"> Notifications</b> <span class="caret"></span></button></a>
			      <ul id="login-dp" class="dropdown-menu">
				      <li>
					      <div class="row">
							    <div class="col-lg-15">
                    <div v-for="(devices, index) of notiReverse" v-bind:key="devices['.key']" class="">
                      <div v-if="index<6">
                        <div v-if="devices.info == 'Key Lock/Unlock'">
                        <h4 style="color: Red;">AED {{devices.id}} - {{devices.info}}</h4>
                      </div>
                      <div v-else-if="devices.info == 'Availability'">
                        <h4 style="color: Blue;">AED {{devices.id}} - {{devices.info}}</h4>
                      </div>
                      <div v-else-if="devices.info == 'Temp/Humi Problem'">
                        <h4 style="color: Purple;">AED {{devices.id}} - {{devices.info}}</h4>
                      </div>
                        Status : {{devices.log}}<br>On 
                        Date : {{devices.date}} - 
                        Time : {{devices.time}}<br>
                        Access by {{devices.access}}
                        {{index}}
                      <hr>
                      </div>
                    </div>
							    </div>
					      </div>
				      </li>
		      	</ul>
            </li>
          <li v-if="login" class="nav-item">
            <a href="#" data-toggle="dropdown">
            <button class="btn btn-danger btn-md round" @click="out()"><span class="glyphicon glyphicon-off"></span><b style="font-family: 'Open Sans', sans-serif;"> Logout</b></button></a>
          </li>
        
      </ul>

        <!-- if no login -->
        <li class="dropdown" v-else>
          <a href="#" data-toggle="dropdown"><button class="btn btn-primary btn-sm round"><b style="font-family: 'Open Sans', sans-serif;">Login</b> <span class="caret"></span></button></a>
			      <ul id="login-dp" class="dropdown-menu">
				    <li>
					  <div class="row">
							<div class="col-md-12">
								<font size="5" ><b style="font-family: 'Open Sans', sans-serif;">Login...</b></font><br><br>
								<form class="form" accept-charset="UTF-8" id="login-nav">
										<div class="form-group">
											 <label class="sr-only" for="exampleInputEmail2">Email address</label>
											 <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email address" required v-model="email">
										</div>
										<div class="form-group">
											 <label class="sr-only" for="exampleInputPassword2">Password</label>
											 <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required v-model="password">
                    <div class="help-block text-right"><a href="">Forget the password ?</a></div>
										</div>
										<div class="form-group" align="center">
											 <button class="btn btn-primary btn-lg round" @click="signin()">Sign in</button>
										</div>
										<div class="checkbox">
											 <label>
											 <input type="checkbox"> keep me logged-in
											 </label>
										</div>
								</form>
							</div>
							<div class="bottom text-center">
								New here ? <a href="#"><b>Join Us</b></a>
							</div>
					 </div>
				</li>
			</ul>
        </li>
      
      </nav>
    </div>
    <router-view v-bind:login="login" :lats="lats" :lngs="lngs"></router-view>
  </div>
</template>

<script>
import {auth, noti2Ref, notiRef, deviceRef, numnotiRef} from './components/firebase'
import swal from 'sweetalert'
import Push from 'push.js'
export default {
  data () {
    return {
      login: '',
      email: '',
      password: '',
      onStateemail: '',
      uid: '',
      notiss: '',
      search: '',
      centersearch: {},
      lats: '',
      lngs: '',
      alert: 0,
      notiReverse: [],
      limit: 0
    }
  },
  firebase: {
    noti: notiRef,
    noti2: noti2Ref,
    device: deviceRef,
    numnoti: numnotiRef
  },
  mounted () {
    if (this.notiss > 0) {
      Push.create('AED Notification', {
        body: 'AED Data has changed',
        icon: 'components/img/icon.png',
        timeout: 4000,
        onClick: function () {
          window.focus()
          this.close()
        }
      })
    }
    // let data = []
    notiRef.on('value', (snapshot) => {
      snapshot.forEach(function (child) {
        this.notiReverse.push(child.val())
      }.bind(this))

      console.log('>>>>>', this.notiReverse.reverse())
      // data = (snapshot.val())
      // data.reverse()
      // console.log('reverse: >>>>', data)
    })
  },
  created () {
    console.log(this.numnoti.num)
    auth.onAuthStateChanged((user) => {
      if (user) {
    // User is signed in.
        let vm = this
        vm.onStateemail = user.email
        vm.uid = user.uid
        vm.login = user
        console.log(this.notiss)
        console.log('onAuthStateChanged Function : ', this.user)
    // ...
      } else {
    // User is signed out.
    // ...
      }
    })
  },
  methods: {
    signin () {
      auth.signInWithEmailAndPassword(this.email, this.password)
      .then((userData) => {
        this.login = true
        this.onStateemail = userData
        this.success()
        console.log('then Function : ', this.login)
        console.log('user data : ', this.onStateemail)
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        if (errorCode === 'auth/wrong-password') {
          swal({
            title: 'Wrong Email/Password',
            text: 'Please re-check your Email/Password Again!',
            icon: 'error'
          })
        } else {
          swal({
            title: errorMessage,
            text: 'Please re-check your Email/Password Again!',
            icon: 'error'
          })
        }
        console.log(error)
      })
    },
    signout () {
      auth.signOut()
      this.login = false
      console.log('signout Function : ', this.login)
    },
    searchlocation () {
      this.lats = this.device[this.search - 1].lat
      this.lngs = this.device[this.search - 1].lng
      if (this.lats > 1) {
        swal({
          title: 'AED Location has found!',
          icon: 'success',
          button: 'Aww yess!'
        })
      } else {
        swal({
          title: 'AED Location not found!',
          icon: 'error',
          button: 'Noooo'
        })
      }
      this.search = ''
      this.centersearch = {
        lat: this.lats,
        lng: this.lngs }
      console.log(this.centersearch)
    },
    success () {
      swal({
        title: 'Login Success!',
        text: 'You Login as : ' + this.onStateemail.email,
        icon: 'success',
        button: 'Aww yess!'
      })
    },
    out () {
      swal({
        title: 'Are you sure?',
        text: 'Do you want to Logout?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
      .then((willDelete) => {
        if (willDelete) {
          this.signout()
          swal('You are now Log-out', {
            icon: 'success'
          })
        } else {
          swal('You are not logout')
        }
      })
    },
    resetnoti () {
      numnotiRef.child('1').update({num: 0})
      console.log('resetnoti')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:800i');
@import url('https://fonts.googleapis.com/css?family=Quicksand:700');
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#login-dp{
    min-width: 250px;
    padding: 14px 14px 0;
    overflow:hidden;
    background-color:rgba(255,255,255,.8);
}
#login-dp .help-block{
    font-size:12px    
}
#login-dp .bottom{
    background-color:rgba(255,255,255,.8);
    border-top:1px solid #ddd;
    clear:both;
    padding:14px;
}
#login-dp .social-buttons{
    margin:12px 0    
}
#login-dp .social-buttons a{
    width: 49%;
}
#login-dp .form-group {
    margin-bottom: 10px;
}
.btn-fb{
    color: #fff;
    background-color:#3b5998;
}
.btn-fb:hover{
    color: #fff;
    background-color:#496ebc 
}
.btn-tw{
    color: #fff;
    background-color:#55acee;
}
.btn-tw:hover{
    color: #fff;
    background-color:#59b5fa;
}
@media(max-width:768px){
    #login-dp{
        background-color: inherit;
        color: #fff;
    }
    #login-dp .bottom{
        background-color: inherit;
        border-top:0 none;
    }
}

.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 10px 16px;
}
  
.btn-lg {
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}

.btn-primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
}

.btn-danger {
  color: #fff;
  background-color: #b61827;
  border-color: #357ebd;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #3276b1;
  border-color: #285e8e;
}

/***********************
  ROUND BUTTONS
************************/
.round {
  border-radius: 24px;
}

/***********************
  CUSTON BTN VALUES
************************/

.btn {
    padding: 14px 24px;
    border: 0 none;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.btn:focus, .btn:active:focus, .btn.active:focus {
    outline: 0 none;
}


.btn-primary {
    background: #0099cc;
    color: #ffffff;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {
    background: #33a6cc;
}
.btn-primary:active, .btn-primary.active {
    background: #007299;
    box-shadow: none;
}
.navimg {
  margin-bottom: 50;
}

.flash-button{
	background:blue;
	padding:5px 10px;
	color:#fff;
	border:none;
	border-radius:5px;
	
	animation-name: flash;
	animation-duration: 1s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;

	/* Firefox 1+ */
	-webkit-animation-name: flash;
	-webkit-animation-duration: 1s;
	-webkit-animation-timing-function: linear;
	-webkit-animation-iteration-count: infinite;

	/* //Safari 3-4 */
	-moz-animation-name: flash;
	-moz-animation-duration: 1s;
	-moz-animation-timing-function: linear;
	-moz-animation-iteration-count: infinite;
}

@keyframes flash {  
    0% { opacity: 1.0; }
    50% { opacity: 0.5; }
    100% { opacity: 1.0; }
}

/* //Firefox 1+ */
@-webkit-keyframes flash {  
    0% { opacity: 1.0; }
    50% { opacity: 0.5; }
    100% { opacity: 1.0; }
}

/* //Safari 3-4 */
@-moz-keyframes flash {  
    0% { opacity: 1.0; }
    50% { opacity: 0.5; }
    100% { opacity: 1.0; }
}
</style>
