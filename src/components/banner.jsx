import styled from 'styled-components'
import logo from '../asset/banner.png'

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
    filter: brightness(90%)
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

function Banner() {
    return (
        <DivBanner>
            <ImgBanner src={logo} alt="logo" />
            <TxtBanner>Chez vous, partout et ailleurs</TxtBanner>
        </DivBanner>
    )
}

export default Banner
