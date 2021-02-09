<template>
    <base-layout>
       <div class="my-5">
           <div class="col-md-6 my-5 mx-auto p-3">
                <div class="card p-5">
                    <div class="card-body">
                        <div>
                            <h4 class="text-left">
                               Register here....
                            </h4>
                        </div>
                        <div>
                            <form @submit.prevent="registerUser">
                                <div class="form-group">
                                    <label for="name">username</label>
                                    <input type="text" v-model="name"
                                    class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="name">email</label>
                                    <input type="email" v-model="email"
                                    class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="password">password</label>
                                    <input type="password" v-model="password"
                                    class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="confirm-password">confirm password</label>
                                    <input type="text"              class="form-control"     v-model="confirmPassword">
                                </div>
                                <div class="form-group">
                                   <button type="submit" class="btn btn-block btn-outline-dark">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </base-layout>
</template>
<script>
import axios from 'axios';
import BaseLayout from '../Layout/BaseLayout.vue'
export default {
  name: 'UserRegistration',  
  components: { BaseLayout },
  data: function() {
      return {
          name: null,
          email: null,
          password: null,
          confirmPassword: null
      }
  },
  methods: {
      registerUser() {
          if(this.name == null) {
              alert('name is required');
              return false;
          }
          if(this.email == null) {
              alert('email is required');
              return false;
          }
          if(this.password == null) {
              alert('name is required');
              return false;
          }
          if(this.password != this.confirmPassword) {
              alert('Two Passwords are not same.');
              return false;
          }
          
          axios.post('http://127.0.0.1:8000/api/register/user',{
              header: {
                'accept': 'application/json'
              },
              'name': this.name,
              'email': this.email,
              'password': this.password
          }).then((res) => {
              console.log(res.data);
          });
      }
  }

    
}
</script>