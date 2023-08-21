import { createContext, useState } from "react";

export const AgentContext = createContext()

const AgentContextProvider = (props) => {

    const [agent, setAgent] = useState({

        AuthCode: "r1d3r",
        Flag: "i",
        UserID: "1",
        AgentCode: "",
        FullName: "",
        UserName: "",
        Password: "",
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
        AllowApp: ""
    })

    const [updateAgent, setUpdateAgent] = useState({
        AuthCode: "r1d3r",
        Flag: "U",
        UserID: "1",
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
        Contact: ""   
    });

    const contextValue = {
        agent, setAgent, updateAgent, setUpdateAgent,
    };
    return (
        <AgentContext.Provider value={contextValue}>
            {props.children}
        </AgentContext.Provider>
    )

}

export default AgentContextProvider;