/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { makeAdmin } from "../../api/users";


const AllUserCard = ({ user }) => {
    
    const { email, role } = user;

    return (
        <>
            <tr>
                <td>
                    <span className="font-bold">{ email }</span>
                </td>
                <td>
                    {
                        role === 'admin' ? 'Admin' : <button onClick={() => makeAdmin(email)} className="btn btn-warning btn-sm"><FaUser></FaUser>Make Admin</button>
                    }
                </td>
                <th>
                    <button className="btn btn-ghost btn-sm bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                </th>
            </tr> 
        </>
    );
};

export default AllUserCard;