import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    const [alldata, setAlldata] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onsubmit = () => {
        let val = JSON.parse(localStorage.getItem('register'));
        let data =(val == null) ? [] : val;
        let ans = data.filter((val) => {
            if (val.email == email) {
                return val;
            }
        });
        if (ans.length != 0) {
            if (ans[0].password == password) {
                localStorage.setItem("login", JSON.stringify(ans[0]));
                toast.success("Successfully Login");
                navigate('/home')
            } else {
                toast.error("Password is not valid");
            }
        } else {
            toast.error("Email is not found");
        }
    }



    return (
        <>
            <div class="round"></div>
            <div className="box">
                <div className="d-flex justify-content-center">
                    <form className="col-10">

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="registr" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="text" name="password " onChange={(e) => setPassword(e.target.value)} value={password} className="registr" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <Link to={`/`} style={{color:"white",textDecoration:"none"}}>Register!</Link>
                        <div className="md-3 d-flex justify-content-center">
                            <button type="button" onClick={() => onsubmit()} className="btn-my">Submit</button>

                        </div>

                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login