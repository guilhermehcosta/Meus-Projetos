import api from "../../services/api"
import Button from "../../components/Button"
import DefaltBackground from "../../components/Background"
import { useEffect, useState } from "react"
import { CardUsers, ContainerUsers, TrashIcon, Container, Title, AvatarUser } from "./styles"
import Trash from "../../assets/trash.svg"
import { useNavigate } from "react-router-dom"

function ListUsers() {
     const navigate = useNavigate()
     const [users, setUsers] = useState([])


     useEffect(() => {
          async function getUsers() {
               const { data } = await api.get("/usuarios")

               setUsers(data)
          }
          getUsers()
     }, [])

     async function deleteUser(id) {
          await api.delete(`/usuarios/${id}`)
          
          const updatedUsers = users.filter( user => user.id !== id )

          setUsers(updatedUsers)
     }


     return (
          <Container>
               <DefaltBackground />

               <Title>Lista de Usuários</Title>


               <ContainerUsers>
                    {users.map(user => (
                         <CardUsers key={user.id}>
                              <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                              <div>
                                   <h3>{user.name}</h3>
                                   <p>{user.age}</p>
                                   <p>{user.email}</p>

                              </div>
                              <TrashIcon src={Trash} alt="icone-lixo" onClick={() => deleteUser(user.id)} />
                         </CardUsers>
                    ))}
               </ContainerUsers>

               <Button type="button" onClick={() => navigate("/")}>Voltar</Button>


          </Container>
     )
}

export default ListUsers