import React,{ useEffect,useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function UserList() {
    
    const [userList, setuserList] = useState()
    let history = useHistory();
    useEffect( () => {
        
        axios.get(
          'http://localhost:8080/api/user-list',
          
        )
      .then(res => {
        
        setuserList(res.data.data)
        }).catch(error => {
            console.log('There was an error!', error);
        });
    });
    

    const deleteUser = (id) => {
       
        axios.post(`http://localhost:8080/api/delete-user`,
            { id }
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("User Deleted Successfull!!")
                history.push('/user-list');
            }).catch(error => {
                console.error('There was an error!', error);
               
            });
    }

    const handlerUser =()=>{
        return userList && userList.map((user,index)=>{
        return <tr key={index} >
           
             <td key={user.name}>{user.name}</td>
             <td key={user.email}>{user.email}</td>
             <td key={user.mobile}>{user.mobile}</td>
             <td key={user.id}><button type="submit"  className="btn btn-red" onClick={()=>deleteUser(user.id)}>
Delete</button></td>
             </tr>
            }) 
         
    }
    return (
        <div style={{background:"#F7F7F7"}}>
            
            <MDBContainer>
            
                <MDBRow>
                    <MDBCol size="6">
                    <img src="images/img1.jpg" alt="" style={{width:"100%"}}></img>
                    </MDBCol>
                    <MDBCol size="6">
                    <MDBCard className="h-100 ">
                    <h3 className="p-3">User List</h3>        
                    <MDBTable striped bordered responsive>
                        
                        <MDBTableHead  color="primary-color" textWhite>
                            <tr>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody style={{fontSize:"2px"}}>
                            
                            {handlerUser()}
                            
                        </MDBTableBody>
                        </MDBTable>
                        
                    </MDBCard>
                    </MDBCol>
                    
                </MDBRow>
                
                </MDBContainer>
               
            </div>
    );
}

export default UserList;
