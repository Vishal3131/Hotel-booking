import React from 'react'

export default function Site_setting() {
  return (
    <div>
      
      <div class="container-fluid">
	
	<div class="card col-lg-12">
		<div class="card-body">
			<form action="" id="">
				<div class="form-group">
					<label for="name" class="control-label">Hotel Name</label>
					<input type="text" class="form-control" id="name" name="name" value="" required/>
				</div>
				<div class="form-group my-3">
					<label for="email" class="control-label">Hotel email</label>
					<input type="email" class="form-control" id="email" name="email" value="" required/>
				</div>
				<div class="form-group my-3">
					<label for="contact" class="control-label">Hotel Contact</label>
					<input type="text" class="form-control" id="contact" name="contact" value="" required/>
				</div>
				<div class="form-group my-3">
					<label for="about" class="control-label">Hotel About Content</label>
					<textarea name="about" class="text"/>

				</div>
				<div class="form-group my-3">
					<label for="" class="control-label">Image</label>
					<input type="file" class="form-control my-3" name="img" onchange="displayImg(this,$(this))"/>
				</div>
				<div class="form-group">
					<img src="" alt="" id="cimg"/>
				</div>
				<center>
					<button class="btn btn-info btn-primary btn-block col-md-2">Save</button>
				</center>
			</form>
		</div>
	</div>
    </div>

    
    </div>
  )
}
