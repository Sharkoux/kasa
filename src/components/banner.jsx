import styled from 'styled-components'


const DivBanner = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    position: relative;
    @media only screen and (max-width: 768px) {
        height: 150px
     }
    @media only screen and (max-width: 425px) {
        height: 120px;
     }
`

const ImgBanner = styled.img`
    width: 100%;
    border-radius: 25px;
    filter: brightness(80%);
    height: 100%;
    
`
const TxtBanner = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 47px;
    color: white;
    margin: auto;
    width: 70%;
    padding-left: 10%;
    @media only screen and (max-width: 768px) {
        font-size: 24px;
     }
     @media only screen and (max-width: 425px) {
        font-size: 20px;
        text-align: left;
        padding: 0;
     }
`

function Banner({image, texte}) {
    return (
        <DivBanner>
            <ImgBanner src={image} alt="logo" />
            <TxtBanner>{texte}</TxtBanner>
        </DivBanner>
    )
}

export default Banner
