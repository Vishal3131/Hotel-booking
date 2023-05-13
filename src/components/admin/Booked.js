import React from 'react'

export default function Booked() {
  return (
    <div>
      
      <div class="container-fluid">
	<div class="col-lg-12">
		<div class="row mt-3">
			<div class="col-md-12">
				<div class="card">
					<div class="card-body">
						<table class="table table-bordered">
							<thead>
								<th>#</th>
								<th>Category</th>
								<th>Reference</th>
								<th>Status</th>
								<th>Action</th>
							</thead>
							<tbody>
								




								<tr>
									<td class="text-center">      </td>
									<td class="text-center">      </td>
									<td class="">                  </td>
										<td class="text-center"><span class="badge badge-warning">Booked</span></td>
									<td class="text-center">
											<button class="btn btn-sm btn-primary check_out" type="button" data-id="<?php echo $row['id'] ?>">View</button>
									</td>
								</tr>
							
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

    </div>
  )
}
