import Image from "next/image"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

export interface GameListItemType {
    title: string
    description: string,
    thumbNail: string,
    handlePlayClick: () => void,
    handleMakeClick: () => void
}
const GameListItem = ({ title, description, thumbNail, handlePlayClick, handleMakeClick }: GameListItemType) => {
    return (
        <div className="mb-2">
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <div className="flex">
                        <div style={{
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'space-between',
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
                            <Image style={{ backgroundColor: "red", minWidth: '150px', minHeight: "150px" }} src={thumbNail} objectFit="cover" alt="" />
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}
export default GameListItem