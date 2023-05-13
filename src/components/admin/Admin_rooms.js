import React from 'react'

export default function Admin_rooms() {
  return (
    <div>
      
     
<div class="container-fluid">
	
	<div class="col-lg-12">
		<div class="row">
			{/* FORM Panel */}
			<div class="col-md-4">
			<form action="" id="manage-room">
				<div class="card">
					<div class="card-header">
						    Room Form
				  	</div>
					<div class="card-body">
							<input type="hidden" name="id"/>
							<div class="form-group">
								<label class="control-label">Room</label>
								<input type="text" class="form-control" name="room"/>
							</div>
							<div class="form-group">
								<label className="form-label my-3">Category</label>
								<select className="form-select shadow-none" name="category_id">
								
								<option selected> select Category</option>
                                <option value="1">Single Room</option>
                                 <option value="2">Double Room</option>
                                <option value="3">Family Room</option>
								<option value="4">Luxery Room</option>
								</select>
							</div>
							<div class="form-group">
								<label for="" className="control-label my-3">Availability</label>
								<select className="form-select shadow-none" name="status">
									<option value="0">Available</option>
									<option value="1">Unavailable</option>

								</select>
							</div>
					</div>
							
					<div class="card-footer my-3">
						<div class="row">
							<div class="col-md-12">
								<button class="btn btn-sm btn-primary col-sm-3 offset-md-3"> Save</button>
								<button class="btn btn-sm btn-default col-sm-3" type="button" onclick="$('#manage-room').get(0).reset()"> Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</form>
			</div>
			{/*FORM Panel */}

			{/* Table Panel */}
			<div class="col-md-8">
				<div class="card">
					<div class="card-body">
						<table class="table table-bordered table-hover">
							<thead>
								<tr>
									<th class="text-center">#</th>
									<th class="text-center">Category</th>
									<th class="text-center">Room</th>
									<th class="text-center">Status</th>
									<th class="text-center">Action</th>
								</tr>
							</thead>
							<tbody>
								
						
								<tr>
									<td class="text-center">1 </td>

								
									<td class="text-center">Single Room </td>
									<td class="">Room-101 </td>
									
										<td class="text-center"><span class="badge badge-success">Available</span></td>
								
									
									<td class="text-center">
										<button class="btn btn-sm btn-primary edit_cat me-2" type="button" >Edit</button>
										<button class="btn btn-sm btn-danger delete_cat" type="button" data-id="<?php echo $row['id'] ?>">Delete</button>
									</td>
								</tr>
								
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{/* Table Panel */}
		</div>
	</div>	

</div>


    </div>
  )
}
