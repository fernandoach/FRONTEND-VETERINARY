import { useState } from "react"

function Login() {
  // paso 2: gestionar inputs con estados
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        body: JSON.stringify(credenciales)
      })

      if(!request.ok){
        const {message} = await request.json()
        console.log(message)
      }

      if(request.ok){
        const {accesToken, role} = await request.json()
        switch(role){
          case 'A':
            console.log('Redirigir a panel admin')
            break
          case 'U':
            console.log('Redirigir a panel user')
            break
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