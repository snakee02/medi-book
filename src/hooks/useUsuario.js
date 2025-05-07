import { useEffect } from "react"
import { useState } from "react"
import { onChangeuser } from "../Firebase/client"

const useUsuario = () => {
    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        onChangeuser(setUsuario)
    }, [])

    return usuario
}

export default useUsuario