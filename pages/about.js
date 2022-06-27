import { useEffect, useState } from "react"

function About() {

    const [teste1, setTeste1] = useState('etest')

    useEffect(() => {
        setTeste1(88)
    }, [])

    return (<>
        <div>About</div>
        <p>Testando o pages no next</p>
        <p>Um numero teste {teste1}</p>
    </>)
}

export default About