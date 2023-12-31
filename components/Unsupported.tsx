import type { CSSProperties } from 'react'
import { Callout, CalloutKind } from './Callouts'
import UAParser from 'ua-parser-js'
import { useEffect, useState, ReactNode } from 'react'

const boldA: CSSProperties = { fontWeight: 'bold' }

export default function Unsupported() {
    const [sugestion, setSugestion] = useState<ReactNode>('')

    useEffect(() => {
        setSugestion(getSugestion())
    }, [])

    return (
        <Callout kind={CalloutKind.Error}>
            Unfortunately, this browser does not support <a style={boldA} href="https://caniuse.com/web-bluetooth">Web Bluetooth</a>.<br />
            which is necessary for communicating with your bike.<br />
            {sugestion}
        </Callout>
    )
}

function getSugestion(): ReactNode {
    const parser = new UAParser()

    const os = parser.getOS().name?.toLowerCase()
    const browser = parser.getBrowser().name?.toLowerCase()

    if (os == 'ios') return <>On IOS You might want to try <a style={boldA} href='https://apps.apple.com/us/app/bluefy-web-ble-browser/id1492822055'>Bluefy – Web BLE Browser</a></>
    if (browser == 'chrome') return undefined
    if (os == 'windows') return <>For Windows, we recommend giving Chrome or Edge a try to see if either of them work for you.</>

    return <>You might want to use Chrome</>
}
