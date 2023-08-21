import { createContext, useState } from "react";

export const AgentContext = createContext()

const AgentContextProvider = (props) => {

    const [allow, setAllow] = useState(false)
    const [verify, setVerify] = useState(true)

    const [initialValue, setInitialValue] = useState({

        AuthCode: "r1d3r",
        Flag: "i",
        UserID: 0,
        AgentCode: "",
        FullName: "",
        UserName: "",
        Password: "",
        Image: "",
        Address: "",
        District: 0,
        StarGrading: 0,
        Academic: "",
        Professional: "",
        WorkExp: "",
        ResponseTime: "",
        ProductCat: "",
        ProductType: "",
        Statement: "",
        Contact: 0,
        AllowApp: "",

    })

    const [updateAgent, setUpdateAgent] = useState({
        AuthCode: "r1d3r",
        Flag: "U",
        UserID: "",
        AgentID: "",
        FullName: "",
        Image: "",
        Address: "",
        District: "",
        StarGrading: "",
        Academic: "",
        Professional: "",
        WorkExp: "",
        ResponseTime: "",
        ProductCat: "",
        ProductType: "",
        Statement: "",
        Contact: "",
    });

    const [formValue, setFormValue] = useState(initialValue)
    const [AgentList, setAgentlist] = useState([])


    const contextValue = {
        allow, setAllow, verify, setVerify, initialValue,setInitialValue, updateAgent, setUpdateAgent
    };
    return (
        <AgentContext.Provider value={contextValue}>
            {props.children}
        </AgentContext.Provider>
    )

}

export default AgentContextProvider;