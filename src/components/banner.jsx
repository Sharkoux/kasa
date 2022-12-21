import styled from 'styled-components'


const DivBanner = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    position: relative
`

const ImgBanner = styled.img`
    width: 100%;
    border-radius: 25px;
    filter: brightness(80%)
`
const TxtBanner = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 48px;
    color: white;
    margin: 0px;
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
