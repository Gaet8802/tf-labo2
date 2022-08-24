const { default: axios } = require("axios");
const { useEffect } = require("react");
const { useState } = require("react")

const GetAll = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/getAll')
        .then(response => {
            setMembers(response.data)
        });
    }, []);


    return <div>
        <ul>
            {
                members.length !== 0 && members.map((member) => {
                    return <li key={member.id}>{member.email}</li>
                })
            }
        </ul>
    </div>
}

export default GetAll;