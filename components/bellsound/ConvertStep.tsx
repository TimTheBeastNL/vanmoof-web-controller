"use client"

import { useEffect, useState } from "react";
import { CommonProps } from "./BellSoundWalkthrough";
import WalkthroughButton from "./WalkthroughButton";

export default function ConvertStep({ onDismiss, selectedFile, onConversionCompleted, onError }: CommonProps & {
    selectedFile: File,
    onConversionCompleted: (convertedFile: Uint8Array) => void,
    onError: (error: string) => void,
}) {
    const [converting, setConverting] = useState<boolean>(false);

    const startConversion = async () => {
        if (converting) return;

        setConverting(true);

        // Perform any necessary file validation or checks here

        // Convert the File object to Uint8Array
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const arrayBuffer = fileReader.result as ArrayBuffer;
            const uint8Array = new Uint8Array(arrayBuffer);
            onConversionCompleted(uint8Array);
            setConverting(false);
        };
        fileReader.readAsArrayBuffer(selectedFile);
    };

    return (
        <>
            <p>Selected file: {selectedFile.name}</p>
            <p>Uploading .pak firmware file...</p>

            <WalkthroughButton onClick={startConversion} disabled={converting}>
                {converting ? "Uploading..." : "Upload"}
            </WalkthroughButton>

            <WalkthroughButton onClick={onDismiss}>Cancel</WalkthroughButton>

            <style jsx>{`
                ul li {
                    margin: 0.5rem 0;
                }
            `}</style>
        </>
    );
}
