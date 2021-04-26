import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol,MDBCard,MDBInput } from 'mdbreact';
import axios from 'axios';

const LoginPage=()=> {

    const [userInfo, setUserInfo] = useState()
    const [showNotification, setShowNotification] = useState("")

    let history = useHistory();
    const handleButton = () => {
        const data = userInfo
        axios.post(`http://localhost:8080/api/auth/signin`,
            { ...data }
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
                history.push('/user-list');
                
            }).catch(error => {
                console.error('There was an error!', error);
                handleNotification()
            });


    }

    const handleNotification =()=>{
        setShowNotification("Plase enter valid Email and Password!!")
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
        <div >
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="6">
                    <img src="images/img1.jpg" alt=""  style={{width:"100%"}}></img>
                    </MDBCol>
                    <MDBCol size="6" style={{ background: "#FFF" }} className="w-responsive h-auto d-inline-block">
                    <MDBCard className="h-100 d-inline-block p-3">
                        <h3 className="text-center">Welcome Back!! </h3>
                        <p className="text-center">Please login to your account.</p>
                        <MDBRow className="mx-auto">
                            <MDBCol size="12">
                                <MDBInput label="Email" size="sm" type="email" name="email" 
                                onChange={(event) => handleOnChange(event)}
                                required>
                                </MDBInput>
                                <MDBInput label="Password" size="sm" type="password" name="password" 
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
                            <MDBCol size="12" className="text-center">
                            <button type="submit" className="btn btn-orange col-md-5" onClick={handleButton}>Login</button>
                            </MDBCol>

                            <MDBCol size="12" className="text-center">
                            <p style={{color:"red"}}>{showNotification}</p>

                                <a href="/register" >Please Register </a>
                            </MDBCol>
                            
                        </MDBRow>
                        
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default LoginPage;