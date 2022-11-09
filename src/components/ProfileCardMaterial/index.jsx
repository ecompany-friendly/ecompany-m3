
import trash from "../../assets/delete_FILL0_wght400_GRAD0_opsz48 6.svg";
import pencil from "../../assets/edit_FILL0_wght400_GRAD0_opsz48 2.svg";

const ProfileCardMaterial = ({ user }) => {

    const products = user.products   
    
    return  (
            <>
            {products?.map((product) => (  
                <li className="card">
                    <img 
                        className="image-card"
                        src={product.image} 
                        alt="Imagem do produto" 
                    />
                    <div className="card-options">
                        <img src={pencil} alt="Botão editar anuncio" />
                        <img src={trash} alt="Botão deletar anuncio" />
                    </div>
                </li>
            ))}
            </>
        )
}
export default ProfileCardMaterial;