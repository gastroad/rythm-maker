import Image from "next/image"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"
import { StaticImageData } from "next/image"

export interface GameListItemType {
    title: string
    description: string,
    thumbNail: StaticImageData,
    handlePlayClick: () => void,
    handleMakeClick: () => void
}
const GameListItem = ({ title, description, thumbNail, handlePlayClick, handleMakeClick }: GameListItemType) => {
    return (
        <div className="mb-2">
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <div className="flex" style={{ justifyContent: 'space-between', }}>
                        <div style={{
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'space-between',
                            width: "60vw"
                        }}>
                            <CardDescription>
                                {description}
                            </CardDescription>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button className="mr-2" onClick={handlePlayClick}>Play</Button>
                                <Button variant="secondary" onClick={handleMakeClick}>Make</Button>
                            </div>
                        </div>
                        <div className="ml-8">
                            <Image style={{ maxWidth: '150px', maxHeight: "150px" }} src={thumbNail} objectFit="cover" alt="" />
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}
export default GameListItem