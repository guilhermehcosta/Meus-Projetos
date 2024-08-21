import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import Button from "../../components/Button"
import TopBackground from "../../components/Background"
import { Title, Container, ContainerInputs, Form, Input, InputLabel } from "./styles"
import UsersImage from "../../assets/users.png"
import { MensagemDeCadastro } from "../ListUsers/styles"

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const [showSuccessMessage, setShowSuccessMessage] = useState(false) // Estado para controlar a exibição da mensagem de sucesso

  const navigate = useNavigate()

  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    })

    // Exibe a mensagem de sucesso
    setShowSuccessMessage(true)

    // Oculta a mensagem após 3 segundos
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)

    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''
  }

  return (
    <Container>

      <TopBackground>
        <img src={UsersImage} alt="Imagem-Usuário" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>Nome <span> *</span></InputLabel>
            <Input type="text" placeholder="Nome de usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>Idade <span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>E-mail <span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>

      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>Ver lista de Usuários</Button>

      {showSuccessMessage && (
        <MensagemDeCadastro>
          Usuário cadastrado com sucesso!
        </MensagemDeCadastro>
      )}
    </Container>
  )
}

export default Home
