import { createContext, useState } from "react";

export const AgentContext = createContext()

const AgentContextProvider = (props) => {

    const [allow, setAllow] = useState(false)
    const [verify, setVerify] = useState(true)

    const initialValue = {
        fname: '',
        mname: '',
        lname: '',
        email: '',
        pnumber: '',
        password: '',
        username: '',
        contact: '',
        address: '',
        district: '',
        DefHouseNum: ''
    }

    // const initialValue = {
    //     BranchID: '',
    //     DefHouseNum: '',
    //     FiscallID: '',
    //     FullName: '',
    //     IsActive: '',
    //     IsAllow: '',
    //     IsVerified: '',
    //     MemID: '',
    //     UserImage: '',
    //     UserName: '',
    //     UserType: ''
    // }

    const [formValue, setFormValue] = useState(initialValue)
    const [AgentList, setAgentlist] = useState([])

    return (
        <AgentContext.Provider value={{ allow, setAllow, verify, setVerify, initialValue, formValue, setFormValue, AgentList, setAgentlist }}>
            {props.children}
        </AgentContext.Provider>
    )

}

export default AgentContextProvider;