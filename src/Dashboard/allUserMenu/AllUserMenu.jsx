import { useLoaderData } from "react-router-dom";
import AllUserCard from "../../components/allUserCard/AllUserCard";


const AllUserMenu = () => {

    const users = useLoaderData();



    return (
        <div>
            {
                Array.isArray(users) && users.length > 0 ? <>
                
                    <div className="overflow-x-auto">
                        <div className="flex justify-between items-center gap-14">
                            <div><h2 className="text-2xl">Total Users: {users.length} </h2></div>
                        </div>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => <AllUserCard key={user._id} user={ user} />)}
                            </tbody>
                        </table>
                    </div>
                
                </> : <p>no user found</p>
            }
        </div>
    );
};

export default AllUserMenu;