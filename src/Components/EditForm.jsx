
import { useState } from 'react';
import FormControl from './FormControl';


const EditForm = (props) => {

    const [agent, setAgent] = useState([props.data])
    console.log(agent[0])

    return (
        <>
            {/* {agent[0].map((x)=><FormControl agentData = {x}/> )} */}
            <FormControl/>
        </>
    )
}

export default EditForm;