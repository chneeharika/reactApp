import React, { Component, lazy, Suspense } from 'react';
import {connect} from 'react-redux';
import {getUsersNames, getFirstName} from './../selectors/customSelector';
const PersonDetails = lazy(() => import ('./PersonDetails'));

class UsingSaga extends Component {
	
	render(){
        const  name = this.props.user1;
        console.log("after selector",name);
		return(
			<>
				<button onClick = {this.props.getUsers}>Get Users Data</button>
        		<Suspense fallback={<div>Loading....</div>}>
					<p>Users data</p>
						<table style={{border: '1px solid black'}}>
							<tbody>
							{this.props.users.length >0 && <tr style={{border: '1px solid black'}}>
								<th>ID </th>
								<th>NAME </th>
								<th>EMAILD ID</th>
                            </tr>}
                            {this.props.users.map(user => (							
                                <tr style={{border: '1px solid black'}} key={user.id}>
                                    <td>{user.id} </td>
                                    <td>{user.name} </td>
                                    <td>{user.email} </td>
                                </tr>
                            ))}
							</tbody>
							</table>
							<PersonDetails user={this.props.user1}/>
							<p>Only Names</p>
							{this.props.usersNames.map((name, index) =><p style={{display:'inline'}} key={index}>{index+1}. {name}  </p>)}
				</Suspense>
			</>
		);
	}
}
const mapDispatchToProps = dispatch => ({
 getUsers: () => {dispatch({type:'GETUSERS'})}
});

const mapStateToProps = state => ({
	users: state.reducer2.users,
    usersNames: getUsersNames(state.reducer2),
    user1: getFirstName(state.reducer2)
});
export default connect(mapStateToProps, mapDispatchToProps)(UsingSaga);
