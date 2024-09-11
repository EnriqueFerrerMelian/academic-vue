<template>
  <div class="row mt-3">
      <div class="col-md-6 offset-md-3">
          <div class="card">
              <div class="card-header bg-dark text-white text-center">
                  Edit student
              </div>
              <div class="card-body">
                  <form v-on:submit="updateStudent">
                      <div class="d-grid col-6 mx-auto mb-3" style="justify-items: center;">
                          <img v-if="this.photo" height="100" :src="this.photo" id="photoImg">
                          <img v-else height="300" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" id="photoImg" alt="avatar photo">
                      </div>
                      <div class="input-group m-3">
                          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                          <input type="text" v-model="name" id="name" placeholder="Name" required maxlength="50" class="form-control">
                      </div>
                      <div class="input-group m-3">
                          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                          <input type="text" v-model="last_name" id="last_name" placeholder="Last name" required maxlength="50" class="form-control">
                      </div>
                      <div class="input-group m-3">
                          <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
                          <input v-on:change="photoPreview" type="file" accept="image/png, image/jpeg, image/gif" class="form-control">
                      </div>
                      <div class="d-grid col-4 mx-auto mb-3">
                          <button class="btn btn-warning"><i class="fa-solid fa-refresh"></i> Update</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
  </template>
  <script>
  import { showAlert, sendApplication } from '@/functions';
  import { useRoute } from 'vue-router';
  import axios from 'axios';

    export default{
      data() {
        return{
          id:0,
          name:null,
          last_name:null,
          photo:null,
          url:'http://academicbackend.test/api/v1/students',
          loading:false
        }
      },
      mounted(){
          const route = useRoute();
          this.id = route.params.id;
          this.url += '/' + this.id;
          this.getStudent();
      },
      methods:{
		getStudent(){
			axios.get(this.url).then(
				res => {
					this.name = res.data.data.name;
					this.last_name = res.data.data.last_name;
					this.photo = res.data.data.photo;
				}
			);
        },
        updateStudent() {
			event.preventDefault();
			var myPhoto = document.getElementById('photoImg');
			this.photo = myPhoto.src;

			if (this.name.trim() === '') {
				showAlert('Insert a name', 'warning', 'name');
			}else if (this.last_name.trim() === '') {
				showAlert('Insert a last name', 'warning', 'name');
			} else {
			var params = {name:this.name.trim(), last_name:this.last_name.trim(), photo:this.photo.trim()}
			sendApplication('PUT', params, this.url, 'Student updated!')
}
        },
		photoPreview(event){
			var reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.onload = function() {
			var photo = document.getElementById('photoImg');
			photo.src = reader.result;
			this.photo = photo.src;
			}
		}
      }
    }
  </script>