import Flexbox from 'flexbox-react';
import './CreditBox.css'

export const CreditBox = () => {
    return <Flexbox alignContent={"center"} alignItems={"center"} flexDirection={"column"} className={'credit-box'}>
        <a target={'_blank'} rel="noreferrer" href={'https://wilmaplus.fi'}><img src={process.env.PUBLIC_URL+'/logo192.png'} className={'app-logo'} alt={"Logo"} style={{maxHeight: "30px"}}/></a>
        <p className={'copyright'}>&copy; 2022 <a rel="noreferrer" target={'_blank'}  href={'https://wilmaplus.fi'}>Wilma Plus</a> | <a rel="noreferrer" target={'_blank'}  href={'https://wilmaplus.fi/dl/'}>Lataa sovellus</a> |<a rel="noreferrer" target={'_blank'} href={'https://wilmaplus.fi/help/'} style={{margin: '5px'}}>Apua</a></p>
    </Flexbox>
}