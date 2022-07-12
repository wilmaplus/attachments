import './App.css';
import {WilmaPlusCard} from "./Components/Card";
import {CreditBox} from "./Components/CreditBox";
import Flexbox from 'flexbox-react';
import {MessageBox} from "./Components/MessageBox";
import queryString from 'query-string'
import {AttachmentPreviewBlock} from "./Blocks/AttachmentPreviewBlock";

const NoAttachments = () => {
    return <Flexbox alignContent={"center"} justifyContent={'center'} justifyItems={'center'} alignItems={"center"} flexDirection={"column"} style={{height: '70%'}}>
        <MessageBox title={"Ei liitteitä avattavana"} desc={"Liitteen saa avattua Wilma-viestissä löytyvästä linkistä, jos lähettäjä on lähettänyt liitetiedoston Wilma Plus- sovelluksella"}/>
    </Flexbox>
}

function App() {
    const parsedQuery = queryString.parse(window.location.search);
  return (
      <>
          <div id={'attachment-background'}/>
          <div className="site-root">
              <WilmaPlusCard>
                  <h1>Wilma-viesti liite</h1>
                  {parsedQuery.id ? <AttachmentPreviewBlock id={parsedQuery.id} style={{height: '70%'}}/> : <NoAttachments/>}
              </WilmaPlusCard>
              <CreditBox/>
          </div>
      </>
  );
}

export default App;
