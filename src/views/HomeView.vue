<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">ID</th>
					<th scope="col">Poto</th>
					<th scope="col">Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Registered</th>
				</tr>
			</thead>
			<tbody class="table-group-divider" id="content">
				<tr v-if="this.loading">
					<td colspan="6"><h3>Please wait...</h3></td>
				</tr>
				<tr v-else v-for="std, i in this.students" :key="std.id">
					<td v-text="(i+1)"></td>
					<td v-text="std.id"></td>
					<td>
						<img v-if="std.photo" style="width: 90px !important;" :src="std.photo" class="img-thumbnail" alt="">
						<img v-else height="90" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" alt="avatar photo">
					</td>
					<td v-text="std.name"></td>
					<td v-text="std.last_name"></td>
					<td v-text="new Date(std.created_at).toLocaleDateString()"></td>
					<td>
						<router-link :to="{path:'/viewe/'+std.id}" class="btn btn-info">
							<i class="fa-solid fa-eye"></i>
						</router-link>
						&nbsp;
						<router-link :to="{path:'/edite/'+std.id }" class="btn btn-warning">
							<i class="fa-solid fa-edit"></i>
						</router-link>
						&nbsp;
						<button class="btn btn-danger" v-on:click="remove(std.id, std.name)">
							<i class="fa-solid fa-trash"></i>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
      </div>
    </div>
  </div>

</template>
<script>
	import axios from 'axios';
	import {confirmation} from '../functions';

	export default{
		data() {
			return{
				students:null,
				loading:false
			}
		},
		mounted() {
			this.getStudents();
		},
		methods:{
			getStudents() {
				this.loading = true;
				axios.get('http://academicbackend.test/api/v1/students').then(
					res =>{
						this.students = res.data;
						this.loading = false;
					}
				);
			},
			remove(id, name) {
				confirmation('http://academicbackend.test/api/v1/students/',id, 'Remove student', 'Do you want to remove '+name+'?');
				this.loading = false;
			}
		}
	}
</script>