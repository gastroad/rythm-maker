"use client"
import { useEffect, useRef, useState } from "react"

type DotType = number[][][]

export const FrameTester = () => {
    const [frames, setFrames] = useState<DotType>([[]])
    const canvas = useRef<HTMLCanvasElement>(null)
    const pixelSize = 10;

    useEffect(() => {
        const getData = async () => {
            const some = await fetch(`http://localhost:3000/api/badapple/`, {
                cache: 'no-store',
            }).then((res) => res.json())
            setFrames(some.results)
        }
        getData()
    }, [])

    function drawFrame(frame: any[][]) {
        const ctx = canvas.current!.getContext('2d')!
        ctx.clearRect(0, 0, canvas.current!.width, canvas.current!.height);
        frame.forEach((line, y) => {
            line.forEach((dot, x) => {
                if (dot === 1) {
                    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                }

            })
        })
    }

    let currentFrame = 0;
    const totalFrames = frames.length;
    function animate() {
        drawFrame(frames[currentFrame]);
        currentFrame = (currentFrame + 1) % totalFrames;  // 프레임을 순환
        requestAnimationFrame(animate);
    }

    return (
        <>
            <button onClick={animate}>play</button>
            <canvas ref={canvas} id="badAppleCanvas" width="640" height="480" />
        </>
    )
}
