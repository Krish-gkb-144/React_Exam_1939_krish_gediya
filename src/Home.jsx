import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATA, DATA_DELETE, DATA_EDIT, UP_DATE } from "./action/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {

    const dispatch = useDispatch();
    const record = useSelector(state => state.Crud.users)
    const singl = useSelector(state => state.Crud.user)
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [edit, setEdit] = useState("");
    console.log(edit);


    const onsubmit = () => {
        if (edit) {
            let obj = {
                id: edit,
                name: name,
            }
            dispatch(UP_DATE(obj))
        } else {
            let obj = {
                id: Math.floor(Math.random() * 1000),
                name: name,
            }
            toast.success("Successfully Add");
            dispatch(ADD_DATA(obj))
        }
        setName("")
        setEdit("")
    }

    useEffect(() => {
        let admin = JSON.parse(localStorage.getItem('login'));
        if (!admin) {
            navigate('/login');
        }
    }, [])
    useEffect(() => {
        setName(singl.name);
        setEdit(singl.id);
    }, [singl])
    return (
        <center>
            <div class="round"></div>
            <div className="box">
                <thead>
                    <tr>
                        <td>ADD a nots</td>
                    </tr>
                    <tr>
                        <td><input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}></input></td>
                        <td>
                            {
                                (edit) ? (<button type="button" onClick={() => onsubmit()}><i className="bi bi-pencil-square"></i></button>)
                                    : (<button type="button" onClick={() => onsubmit()}><i className="bi bi-plus-lg"></i></button>)
                            }
                        </td>
                    </tr>
                </thead>
                <table >
                    {
                        record.map((val) => {
                            const { name, id } = val
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td><button onClick={() => dispatch(DATA_DELETE(id))}><i className="bi bi-trash3"></i></button></td>
                                    <td><button onClick={() => dispatch(DATA_EDIT(id))}><i className="bi bi-pencil-square"></i></button></td>
                                </tr>
                            )
                        })
                    }
                </table>

            </div>
            <ToastContainer />
        </center >
    )
}

export default Home