import './AttachmentPreviewBlock.css'
import React, {useEffect, useState} from "react";
import Flexbox from 'flexbox-react';
import {LoadingWidget} from "../Components/LoadingWidget";
import {MessageBox} from "../Components/MessageBox";
import {ErrorWidget} from "../Components/ErrorWidget";
import {WilmaPlusButtonLink} from "../Components/Button";
import useWindowDimensions from "../Utils/screen";
import * as mimeTypeDb from 'mime-db'

const HumanReadableBytes = (bytes) => {
    let i = Math.floor( Math.log(bytes) / Math.log(1024) );
    return ( bytes / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB'][i];
}

const NoAttachmentFound = ({style}) => {
    return <Flexbox alignContent={"center"} justifyContent={'center'} justifyItems={'center'} alignItems={"center"} flexDirection={"column"} style={{height: '70%', ...style}}>
        <MessageBox title={"Liite ei löytynyt"} desc={"Linkki voi olla vanhentunut tai virheellinen"}/>
    </Flexbox>
}

const Information = ({attachment}) => {
    return <div className={'attachment-info'}>
        <h2>{attachment.filename}</h2>
        <p>{HumanReadableBytes(attachment.fileSize)}</p>
        <span>{new Date(attachment.createDate).toLocaleString()}</span>
        <br/>
        <span>{attachment.Username} | {attachment.School}</span>
        <Flexbox flexDirection={'row'} className={'attachment-actions'}>
            <WilmaPlusButtonLink title={'Lataa'} href={attachment.urlDownload}/>
        </Flexbox>
    </div>
}

const FileDetails = ({style, attachment}) => {

    const isPreviewableImage = attachment && attachment.media && attachment.mimetype.includes("image/");
    const {width} = useWindowDimensions();
    const [type, setType] = useState("blank");


    useEffect(() => {
        if (attachment == null) return;
        if (isPreviewableImage) {
           document.getElementById('attachment-background').style.backgroundImage = `url(${attachment.urlDownload})`;
        } else {
            document.getElementById('attachment-background').style.backgroundImage = null;
        }
        if (attachment.filename && attachment.filename.split('.').length > 1) {
            setType(attachment.filename.split('.').pop())
        } else if (attachment.mimetype && attachment.mimetype in mimeTypeDb) {
            setType(mimeTypeDb[attachment.mimetype])
        }
    },[attachment, isPreviewableImage])

    return <Flexbox alignContent={"center"} justifyItems={'center'} alignItems={"center"} flexDirection={width > 650 ? "row" : 'column'} class={'animated-transitions'} style={style}>
        <img alt={'Preview'} src={isPreviewableImage ? attachment.urlDownload : process.env.PUBLIC_URL+`/icons/${type}.png`} className={'img-preview'} style={{padding: (isPreviewableImage ? '0' : '10px')}} />
        <Information attachment={attachment ?? {}}/>
    </Flexbox>
}

export const AttachmentPreviewBlock = ({id, style}) => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [attachment, setAttachment] = useState(null);

    async function getAttachment(id) {
        let resp = await fetch(`https://wilmaplus.dfjapis.com/v3/attachments/?id=${id}`)
        if (resp.ok) {
            return await resp.json()
        }
        return {}
    }

    useEffect(() => {
        getAttachment(id).then(attachment => {
            setLoading(false);
            setError(null);
            if (!attachment.status) {
                setAttachment(null);
                return
            }
            setAttachment(attachment)
        }).catch(err => {
            setLoading(false)
            setError({code: err.message.toString()})
        })
    },[id])

    return <Flexbox style={style} alignContent={"center"} justifyContent={'center'} justifyItems={'center'} alignItems={"center"} flexDirection={"column"}>
        <LoadingWidget style={{display: isLoading ? 'flex' : 'none'}} text={'Ladataan, odota hetki...'}/>
        <NoAttachmentFound style={{display: (!isLoading && !error && !attachment) ? 'flex' : 'none'}}/>
        <ErrorWidget error={error} style={{
            display: error ? 'flex' : 'none'
        }}/>
        <FileDetails style={{display: (!isLoading && !error && attachment) ? 'flex' : 'none', width: '100%'}} attachment={attachment} />
    </Flexbox>
}