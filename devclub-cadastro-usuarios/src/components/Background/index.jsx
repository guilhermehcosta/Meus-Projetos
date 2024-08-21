import { TopBackground } from "./styles"
import UsersImage from "../../assets/users.png"

function DefaltBackground(){
     return(
          <TopBackground>
        <img src={UsersImage} alt="Imagem-Usuário" />
      </TopBackground>

     )
}

export default DefaltBackground
