<template>
<div class="row mt-3">
    <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header bg-dark text-white text-center">
                Add student
            </div>
            <div class="card-body">
                <form>
                    <div class="d-grid col-6 mx-auto mb-3">
                        <img v-if="this.photo" height=100 :src="this.photo" id="photoImg">
                        <img v-else height="100" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" id="photoImg" alt="avatar photo">
                    </div>
                    <div class="input-group m-3">
                        <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                        <input type="text" v-model="name" id="name" placeholder="Name" required maxlength="50" class="form-control">
                    </div>
                    <div class="input-group m-3">
                        <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                        <input type="text" v-model="name" id="name" placeholder="Last name" required maxlength="50" class="form-control">
                    </div>
                    <div class="input-group m-3">
                        <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                        <input type="text" v-model="name" id="name" placeholder="Last name" required maxlength="50" class="form-control">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>

	export default{
		data() {
			return{
				name:null,
				last_name:null,
				photo:null,
				url:'http://academicbackend.test/api/v1/students',
				loading:false
			}
		},
		methods:{
			saveStudent() {
				this.loading = true;
			}
		}
	}
    asd
</script>