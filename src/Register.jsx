import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [alldata, setAlldata] = useState([])

    const onsubmit = () => {
        let obj = {
            id: Math.floor(Math.random() * 1000),
            name: name,
            email: email,
            password: password,
            city: city,
            phone: phone
        }
        let data = [...alldata, obj];
        localStorage.setItem("register", JSON.stringify(data));
        setAlldata(data);
        setEmail("");
        setPassword("");
        setPhone("");
        setName("");
        setCity("");
        toast.success("Successfully registered");
        navigate("/login")
    }
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('register'));
        if (data === null) {
            setAlldata([])
        } else {
            setAlldata(data)
        }
    }, [])

    return (
        <>
            <div class="round"></div>
            <div className="box">
                <div className="d-flex justify-content-center">
                    <form className="col-10">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input className="registr" id="exampleInputEmail1" type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="registr" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                            <input type="text" name="password " onChange={(e) => setPassword(e.target.value)} value={password} className="registr" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                            <input type="text" name="city " onChange={(e) => setCity(e.target.value)} value={city} className="registr" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                            <input type="text" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} className="registr" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <Link to={`/login`} style={{color:"white",textDecoration:"none"}}>Login!</Link>

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

export default Register