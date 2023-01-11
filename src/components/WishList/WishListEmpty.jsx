
import bgSpderman from '../../assets/heroPngs/emptyWishListBG.png'
import { StyledLink } from '../../styles/components/Cart.Elements'

import { ContWishListEmpty,PMsjWishList,ContImgWishList } from '../../styles/components/WishList.Elements'

const WishListEmpty = ()=>{
    return(
        <ContWishListEmpty>

            <ContImgWishList>
                <img src={bgSpderman} alt="" />
            </ContImgWishList>
            <PMsjWishList>Al parecer tenes el Sindrome,<i> "Spider-ManYMisProductos"</i>, y no guardaste bien tus productos favoritos...</PMsjWishList>

            <StyledLink to='/'>
            Ir al inicio
            </StyledLink>
            

        </ContWishListEmpty>
    )
}

export default WishListEmpty
