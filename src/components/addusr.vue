<template>
  <div class="">
    <center>
    <h3 style="font-family: 'Open Sans', sans-serif;"><span class="glyphicon glyphicon-info-sign"></span> Add User<hr></h3></center>
    <center>
    <div class="col" style="width: 500px;">
      <input class="form-control mr-sm-2" placeholder="Name" aria-label="Name" v-model="name">
      <input class="form-control mr-sm-2" placeholder="Username" aria-label="username" v-model="username">
      <input class="form-control mr-sm-2" type="Password" placeholder="Password" aria-label="password" v-model="pass">
      <input class="form-control mr-sm-2" type="Password" placeholder="Password Again" aria-label="password2" v-model="pass2"><br>
      <input class="form-control mr-sm-2" type="Password" placeholder="Admin Password" aria-label="adminpassword" v-model="adminpass"><br>
      <button class="btn btn-success" @click="pushUser()"><b style="font-family: 'Open Sans', sans-serif;">Push</b></button>
    </div>
    </center>
  </div>
</template>

<script>
  import {userRef, deviceRef} from './firebase'
  import swal from 'sweetalert2'

  export default {
    components: {
    },
    data () {
      return {
        name: '',
        username: '',
        pass: '',
        pass2: '',
        adminpass: ''
      }
    },
    firebase: {
      user: userRef,
      device: deviceRef
    },
    mounted () {
    },
    created () {
      var pattMail = /.+@\w+\..+/g
      console.log(pattMail.test('nutpat'))
    },
    methods: {
      pushUser () {
        if (this.adminpass === '023944571') {
          if (this.pass === this.pass2) {
            userRef.push({
              name: this.name,
              user: this.username,
              pass: this.pass
            })
            swal({
              title: 'Add User Success',
              icon: 'success',
              button: 'Ok'
            })
          } else {
            swal({
              title: 'Password does not match',
              icon: 'error',
              button: 'Noooo'
            })
          }
        } else {
          swal({
            title: 'Wrong Admin Password',
            icon: 'error',
            button: 'Noooo'
          })
        }
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:800i');
@import url('https://fonts.googleapis.com/css?family=Quicksand:700');
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
  .icon-success {
    color: #5CB85C;
  }
  .icon-unsuccess {
    color: #d9534f;
  }
  .icon-info {
    color: #3399ff;
  }
  .icon-warning {
    color: #ffbb33;
  }
  th {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
  }
  td {
    font-family: 'Quicksand', sans-serif;
  }
  .data-primary {
    backgroundColor: #5bc0de;
  }
  /* tbody tr:nth-child(even)
	{
	  background: #d6d6c2;
	} */
   b {
     font-family: 'Open Sans', sans-serif;
   }
</style>