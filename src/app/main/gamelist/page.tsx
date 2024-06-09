"use client"
import GameList from "@/components/GameList/GameList"
import type { GameListItemType } from "@/components/GameList/GameListItem"
import MazeMakerThumbnail from "@/assets/images/maze-maker.png"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()
    const gameListData: GameListItemType[] = [
        {
            title: "Maze-Maker",
            description: "Create your own maze and navigate through it to find the exit in this challenging puzzle game. Design creatively and escape quickly!",
            thumbNail: MazeMakerThumbnail,
            handlePlayClick: () => {
                router.push('/mazemaker')
            },
            handleMakeClick: () => { },
        },
        {
            title: "Ryrhme-Maker",
            description: "Create and play your own rhythm game tracks. Design unique levels and test your skills to the beat!",
            thumbNail: MazeMakerThumbnail,
            handlePlayClick: () => { },
            handleMakeClick: () => { },
        },
    ]
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6" style={{ maxWidth: "1080px" }}>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">GameList</h1>
            </div>
            <div>
                <GameList gameListData={gameListData} />
            </div>
        </main >
    )
}
