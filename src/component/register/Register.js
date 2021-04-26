import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol,MDBCard,MDBInput } from 'mdbreact';
import axios from 'axios';

function Register() {
    const [userInfo, setUserInfo] = useState()
    const [showNotification, setShowNotification] = useState("")
    let history = useHistory();

    const handleButton = () => {
        const data = userInfo


        axios.post(`http://localhost:8080/api/auth/signup`,
            { ...data }
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
                // store the user in localStorage
                alert("User Register Successfull!!")
                history.push('/');
            }).catch(error => {
                
                console.error('There was an error!', error);
                handleNotification()
            });


    }

    const handleNotification =()=>{
        setShowNotification("Email id already in use!!")
        setTimeout(()=>{
            setShowNotification("")
        },3000)
    }

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    }
    
    return(
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="6">
                    <img src="images/img1.jpg" alt="" style={{width:"100%"}}></img>
                    </MDBCol>
                    <MDBCol size="6">
                       
                    <MDBCard className="h-100 d-inline-block p-3">
                        <h3 className="text-center">Welcome Back!! </h3>
                        <p className="text-center">Please Register to your account.</p>
                        <MDBRow className="mx-auto">
                            <MDBCol size="12">
                                <MDBInput label="Name" size="sm"  name="name" type="text" 
                                onChange={(event) => handleOnChange(event)}
                                required>
                                </MDBInput>
                                <MDBInput label="Email" size="sm"  name="email" type="email" 
                                onChange={(event) => handleOnChange(event)}
                                required>
                                </MDBInput>
                                <MDBInput label="Mobile" size="sm"  name="mobile" type="text" maxLength="10" 
                                onChange={(event) => handleOnChange(event)}
                                required>
                                </MDBInput>
                                <MDBInput label="Password" size="sm"  name="password" 
                                onChange={(event) => handleOnChange(event)}
                                required>
                                </MDBInput>
                            </MDBCol>
                            <MDBCol size="6">
                                <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked"></input>
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Rembeber me</label>
                                </div>
                            </MDBCol>
                            <MDBCol size="6">
                                <p className="float-right">Forget Password</p>
                            </MDBCol>
                            <MDBCol size="12"  className="text-center">
                            <button type="submit" className="btn btn-orange btn-rounded col-md-5" onClick={handleButton}>Register</button>
                            </MDBCol>
                            <MDBCol size="12" className="text-center">
                                <p style={{color:"red"}}>{showNotification}</p>
                                <a href="/">Please Login </a>
                            </MDBCol>
                        </MDBRow>
                        
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Register;