import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  // paso 2: gestionar inputs con estados
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handlerEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  function handlerPassword (e){
    e.preventDefault()
    setPassword(e.target.value)
  }

  // paso 3: Crear funcion para el envio del formulario
  const handlerSubmit = async (e) => {
    e.preventDefault()
    try {

      const credenciales = {
        email,
        password
      }

      const request = await fetch('http://localhost:3000/auth/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credenciales)
      })

      console.log(request)

      if(!request.ok){
        const {message} = await request.json()
        setError(message)
        console.log(message)
      }

      if(request.ok){
        const {role} = await request.json()
        switch(role){
          case 'A':
            console.log('Redirigir a panel admin')
            break
          case 'U':
            console.log('Redirigir a panel user')
            return navigate('/user-panel')
          case 'V':
            console.log('Redirigir a panel veterinario')
            break
        }
      }

      console.log(await request.json())

    } catch (error) {
      console.log(error)
    }
  }

  

  return(
    <div className="main">
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input onChange={handlerEmail} type="email" name="email"/>
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input onChange={handlerPassword} type="password" name="password" />
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
  )
}

export { Login }