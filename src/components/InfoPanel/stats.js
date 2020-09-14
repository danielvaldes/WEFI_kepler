import React from 'react';
import './panel-styles.css';


const stats = () => (
				<stats>
					<table class="table table-bordered table-striped mb-0">
	 				 <thead>
	 					 <tr>
	 						 <th scope="col">#</th>
	 						 <th scope="col">Country</th>
	 						 <th scope="col">Index</th>
	 						 <th scope="col"></th>
	 					 </tr>
	 				 </thead>
	 				 <tbody>
	 					 <tr>
	 						 <th scope="row">1</th>
	 						 <td>Ireland</td>
	 						 <td>80.9816</td>
	 						 <td>
							 	<img className="flag"  src ="https://cdn.iconscout.com/icon/free/png-256/ireland-flag-country-nation-union-empire-32996.png"  alt="Flag Image missing"/>
							 </td>
						 </tr>
	 					 <tr>
	 						 <th scope="row">2</th>
	 						 <td>Switzerland</td>
	 						 <td>80.7688</td>
	 						 <td>
							 <img className="flag" src ="https://cdn.iconscout.com/icon/free/png-256/switzerland-flag-country-nation-union-empire-33095.png" alt="Flag Image missing"/>
							</td>
	 					 </tr>
	 					 <tr>
	 						 <th scope="row">3</th>
	 						 <td>Finland</td>
	 						 <td>79.9572</td>
	 						 <td>
							 	<img className="flag" src ="https://icons.iconarchive.com/icons/wikipedia/flags/256/FI-Finland-Flag-icon.png" alt="Flag Image missing"/>
							 </td>
	 					 </tr>
	 					 <tr>
	 						 <th scope="row">4</th>
	 						 <td>Iceland</td>
	 						 <td>79.5911</td>
	 						 <td>
							 	<img className="flag" src ="https://www.emoji.co.uk/files/apple-emojis/flags-ios/1111-flag-of-iceland.png" alt="Flag Image missing"/>
						 	 </td>
	 					 </tr>
	 					 <tr>
	 						 <th scope="row">5</th>
	 						 <td>Denmark</td>
	 						 <td>77.8312</td>
	 						 <td>
							 <img className="flag" src ="https://icons.iconarchive.com/icons/wikipedia/flags/256/DK-Denmark-Flag-icon.png" alt="Flag Image missing"/>
							</td>
	 					 </tr>
	 				 </tbody>
	 			 </table>
				</stats>
			);

export default stats;
