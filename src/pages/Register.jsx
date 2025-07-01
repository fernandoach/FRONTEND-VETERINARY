import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState('')
  const [dni, setDni] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handlerFirstname = (e) => {
    e.preventDefault()
    setFirstname(e.target.value)
  }
  const handlerLastname = (e) => {
    e.preventDefault()
    setLastname(e.target.value)
  }
  const handlerGender = (e) => {
    e.preventDefault()
    setGender(e.target.value)
  }
  const handlerBirthday = (e) => {
    e.preventDefault()
    setBirthday(e.target.value)
  }
  const handlerDni = (e) => {
    e.preventDefault()
    setDni(e.target.value)
  }
  const handlerTelephone = (e) => {
    e.preventDefault()
    setTelephone(e.target.value)
  }
  const handlerEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlerPassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handlerRepassword = (e) => {
    e.preventDefault()
    setRepassword(e.target.value)
  }

  /* const log = `
    firstname: ${firstname}
    lastname: ${lastname}
    gender: ${gender}
    birthday: ${birthday}
    dni: ${dni}
    telephone: ${telephone}
    email: ${email}
    password: ${password}
    repassword: ${repassword}
  ` 
  console.log(log) */

  const handlerSubmit = async (e) => { 
    e.preventDefault()
    try {
      const newRegister = {
        firstname,
        lastname,
        gender,
        birthday,
        dni,
        telephone,
        email,
        password,
        repassword
      }

      const result = await fetch('http://localhost:3000/user/register',{
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRegister)
      })

      const fetchState = result.status

      if(fetchState === 400){ 
        const { message }  = await result.json()
        setErrorMessage(message)
      } 

      if(fetchState === 200) {
        alert('registrado cone xito')
        return navigate('/login')
      }  

    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className="main">
      <h1>Register</h1>
      <br />
      <strong>{errorMessage}</strong>
      <br />
      <br />
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="firstname">Nombres: </label>
          <input onChange={handlerFirstname} type="text" name="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Apellidos: </label>
          <input onChange={handlerLastname} type="text" name="lastname" required/>
        </div>
        <div>
          <label htmlFor="gender">Género: </label>
          <select onChange={handlerGender} name="gender" required>
            <option value="" default> --Selecciona tu genero-- </option>
            <option value="M" > Masculino </option>
            <option value="F" default> Femenino </option>
            <option value="O" default> Otro </option>
          </select>
        </div>
        <div>
          <label htmlFor="birthday">Fecha de nacimiento: </label>
          <input onChange={handlerBirthday} type="date" name="birthday" required />
        </div>
        <div>
          <label htmlFor="dni">DNI: </label>
          <input onChange={handlerDni} type="text" name="dni" required />
        </div>
        <div>
          <label htmlFor="telephone">Teléfono: </label>
          <input onChange={handlerTelephone} type="text" name="telephone" required />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico: </label>
          <input onChange={handlerEmail} type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input onChange={handlerPassword} type="password" name="password" required />
        </div>
        <div>
          <label htmlFor="repassword">Repetir contraseña: </label>
          <input onChange={handlerRepassword} type="password" name="repassword" required />
        </div>
        <div>
          <button type="submit">Crear</button>
        </div>
      </form>
    </div>
  )
}

export { Register }