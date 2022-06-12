import React, { useEffect, useState } from 'react'
import { Axios } from '../../Helper/axios'

function Profileuser() {
    const [userProfile, setUserProfile] = useState({
        nama: "",
        email: "",
        created_at: ""
    });
    const fetchData = () => {
        Axios.get(`/account`).then((resp) =>{
            setUserProfile({
                nama: resp.data.data.nama,
                email: resp.data.data.email,
                created_at: resp.data.data.created_at,
            })
        })
    }

    useEffect(() => {
        fetchData();
    }, [setUserProfile])

    console.log("data", userProfile)
    return (
        <div>
            {userProfile?.map((item) => (
                <div>
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Profileuser