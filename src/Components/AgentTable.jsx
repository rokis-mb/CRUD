import Button from 'react-bootstrap/Button'
import { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import EditForm from './EditForm'
import Modal from 'react-bootstrap/Modal';
import { AgentContext } from '../Context/AgentContextProvider';
import FormControl from './FormControl';
// import '../CSS/AgentTable.css'

const AgentTable = () => {
    const [agent, setAgent] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState();
    const { updateAgent } = useContext(AgentContext);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setSelectedAgent(null)
    }

    const handleOpen = (agent) => {
        setSelectedAgent(agent)
        setShow(true)
    }

    function handleEditButtonClick() {
        handleClose();
        updateAgentData(updateAgent);
    }

    async function updateAgentData(data) {
        const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Signature": "p0m76"
            },
            body: JSON.stringify({ data })
        })
    }

    // Fetching data from the api

    const getAgents = async () => {
        try {
            const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Signature": "p0m76"
                },
                body: JSON.stringify({
                    "UserID": "-1",
                    "Flag": "S",
                    "IsAllow": "-1",
                    "IsVerified": "-1",
                    "UserType": "-1",
                    "AuthCode": "r1d3r"
                })
            })
            const data = await res.json();
            const agentsWithAllowStatus = data.Values.map(agent => {
                return {
                    ...agent,
                    isAllowed: agent.IsAllow === "Y" ? true : false,
                    isActivated: agent.IsActive === "A" ? true : false
                };
            });
            setAgent(agentsWithAllowStatus);
        } catch (error) {
            console.log(error)
        }
    }

    // calling the agents function during rendering
    useEffect(() => {
        getAgents();
        // console.log(agent)
    }, [])

    const columns = [
        {
            name: "S.N",
            selector: (row) => row.MemID,
            sortable: "true"
        },
        {
            name: "Fullname",
            selector: (row) => row.FullName,
            sortable: "true"

        },
        {
            name: "Agent Code",
            selector: (row) => row.FiscallID,
            sortable: "true"
        },
        {
            name: "Total Property",
            selector: (row) => row.DefHouseNum,
            sortable: "true"
        },
        {
            name: "Category",
            selector: (row) =>
                <Allow data={row} />
        },
        {
            name: "Status",
            cell: (row) => (
                <Active data={row} />
            )
        },
        {
            name: "Action",
            width: "250px", // Adjust the width as needed
            cell: (row) => (
                <div className='d-flex'>
                    <Button onClick={() => handleOpen(row)} className="btn btn-info">Edit</Button>&nbsp;
                    <Button className="btn btn-warning">Reset Password</Button>
                </div>
            )
        },
    ]

    return (
        <>

            <DataTable columns={columns} data={agent}
                // pagination
                fixedHeader
                fixedHeaderScrollHeight='600px'
                selectableRows
                selectableRowsHighlight
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Agent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedAgent && <FormControl agent={selectedAgent} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEditButtonClick}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

function Allow({ data }) {
    const [isAllowed, setIsAllowed] = useState(data.isAllowed);
    // console.log(data)
    async function allow(shouldAllow) {
        setIsAllowed(!shouldAllow); //client side
        //backend
        const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Signature": "p0m76"
            },
            body: JSON.stringify({

                // "UserID": data.MemID.toString(),
                // "Flag": "AD",
                // "IsAllow": shouldAllow ? "Y" : "N",
                // "MemID": data.MemID.toString(),
                // "AuthCode": "r1d3r"

                "AuthCode": "r1d3r",
                "Flag": "AD",
                "AgentID": data.MemID.toString(),
                "AllowApp": shouldAllow ? "Y" : "N",

            })
        })
    }
    return (
        <span className={`uk-badge ${isAllowed ? 'uk-badge-success' : 'uk-badge-danger'}`} onClick={() => allow(isAllowed)}>
            {isAllowed ? 'Allow' : 'Disallow'}
        </span>
    )
}

function Active({ data }) {
    const [isActivated, setIsActivated] = useState(data.isActivated);
    // console.log(data)
    async function activate(shouldActivate) {
        setIsActivated(!shouldActivate); //client side
        //backend
        const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Signature": "p0m76"
            },
            body: JSON.stringify({

                // "UserID": data.MemID.toString(),
                // "Flag": "AI",
                // "IsActive": shouldActivate ? "A" : "I",
                // "MemID": data.MemID.toString(),
                // "AuthCode": "r1d3r"

                "AuthCode": "r1d3r",
                "Flag": "AD",
                "AgentID": data.MemID.toString(),
                "IsActive": shouldActivate ? "A" : "I",

            })
        })
    }
    return (
        <span className={`uk-badge ${isActivated ? 'uk-badge-success' : 'uk-badge-danger'}`} onClick={() => activate(isActivated)}>
            {isActivated ? 'Activate' : 'Deactivate'}
        </span>
    )
}

export default AgentTable