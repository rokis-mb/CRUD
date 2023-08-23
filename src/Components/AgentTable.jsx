import Button from 'react-bootstrap/Button'
import { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import { AgentContext } from '../Context/AgentContextProvider';
import EditAgentForm from './EditAgentForm';

// import '../CSS/AgentTable.css'

const AgentTable = () => {
    const [agent, setAgent] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState();
    const { updateAgent, agentInfo, setAgentInfo } = useContext(AgentContext);
    const [show, setShow] = useState(false);
    const [rpshow, setRPShow] = useState(false);

    // Fetching data from the api

    const getAgents = async () => {
        try {
            const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Signature": "p0m76"
                },
                body: JSON.stringify({
                    "AuthCode": "r1d3r",
                    "Flag": "S",
                    "UserID": "-1",
                    "IsActive": "-1",
                    "AllowApp": "-1"
                })
            })
            const data = await res.json();
            // console.log(data.Values[0].AllowApp)
            const agentsWithAllowStatus = data.Values.map(agent => {
                return {
                    ...agent,
                    isAllowed: agent.AllowApp === "Y" ? true : false,
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
    }, [])

    const handleRPClose = () => {
        setRPShow(false)
        setSelectedAgent(null)
    }

    function handleRPButtonClick() {
        handleRPClose();
        resetPassword(selectedAgent);
    }

    async function resetPassword(data) {
        console.log(data)
        try {
            await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Signature": "p0m76"
                },
                body: JSON.stringify({
                    "AuthCode": "r1d3r",
                    "Flag": "RP",
                    "AgentID": data.AgentID + "",
                    "Password": "1"
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleRPOpen = (agent) => {
        setSelectedAgent(agent)
        console.log(selectedAgent)
        setRPShow(true)
    }

    const handleClose = () => {
        setShow(false)
        setSelectedAgent(null)
    }

    const handleOpen = (agent) => {
        async function getAgentInfo() {
            try {
                const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Signature": "p0m76"
                    },
                    body: JSON.stringify({
                        "AuthCode": "r1d3r",
                        "Flag": "SI",
                        "AgentID": agent.AgentID + ""
                    }),
                })
                const data = await res.json();
                console.log(btoa(data.Values[0].Image))
                setAgentInfo(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getAgentInfo()
        // setSelectedAgent(agent)
        setShow(true)
    }

    function handleEditButtonClick() {
        handleClose();
        updateAgentData(updateAgent);
    }

    async function updateAgentData(data) {
        try {
            await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Signature": "p0m76"
                },
                body: JSON.stringify(data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        {
            name: "S.N",
            cell: (row, index) => index + 1,
        },
        {
            name: "Fullname",
            selector: (row) => row.FullName,
            sortable: "true"

        },
        {
            name: "Agent Code",
            selector: (row) => row.AgentCode,
            sortable: "true"
        },
        {
            name: "Total Property",
            selector: (row) => row.NoOfProperty,
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
                    <Button onClick={() => handleRPOpen(row)} className="btn btn-warning">Reset Password</Button>
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
                    <EditAgentForm agent={agentInfo} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEditButtonClick}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={rpshow} onHide={handleRPClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to reset your password?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleRPButtonClick}>
                        Yes, Reset it
                    </Button>
                    <Button variant="danger" onClick={handleRPClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

function Allow({ data }) {

    const [isAllowed, setIsAllowed] = useState(data.isAllowed);
    async function allow(shouldAAllow) {
        setIsAllowed(!shouldAAllow); //client side
        //backend
        await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Signature": "p0m76"
            },
            body: JSON.stringify({
                "AuthCode": "r1d3r",
                "Flag": "AD",
                "AgentID": data.AgentID.toString(),
                "AllowApp": !shouldAAllow ? "Y" : "N",
            }),
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
        await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Signature": "p0m76"
            },
            body: JSON.stringify({
                "AuthCode": "r1d3r",
                "Flag": "AI",
                "AgentID": data.AgentID.toString(),
                "IsActive": !shouldActivate ? "A" : "I",
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