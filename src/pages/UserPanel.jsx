import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function UserPanel() {
  const navigate = useNavigate()
  const [info, setInfo] = useState()
  async function handlerUserInfo(){
    try {
      const response = await fetch('http://localhost:3000/auth/me', {
        method: 'GET',
        credentials: 'include'
      })

      if(!response.ok){
        return navigate('/login')
      }

      const infoRequest = await response.json()
      setInfo(infoRequest)
      console.log(infoRequest)
    } catch (error) {
      // TODO: Implementar esto
    }
  }



  useEffect(() => {
    handlerUserInfo()
  }, [])

  return (
    <div>UserPanel</div>
  )
}

export default UserPanel