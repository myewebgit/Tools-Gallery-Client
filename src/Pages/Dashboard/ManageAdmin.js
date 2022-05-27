import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import OwnerList from "./OwnerList";

const ManageAdmin = () => {
    const { data: owners, isloading } = useQuery('owners', () => fetch('http://localhost:5000/owner', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isloading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {/* <h1 >  Manage Admin:{owners.length} </h1> */}
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            owners.map((owner, index) => <OwnerList
                                key={owner._Key}
                                owner={owner}
                                index={index}
                            ></OwnerList>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageAdmin;
