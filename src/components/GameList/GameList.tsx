"use client"
import GameListItem, { GameListItemType } from "./GameListItem"

const GameList = () => {
    const temp: GameListItemType[] = [
        {
            title: "Maze-Maker",
            description: "Create your own maze and navigate through it to find the exit in this challenging puzzle game. Design creatively and escape quickly!",
            thumbNail: "",
            handlePlayClick: () => { },
            handleMakeClick: () => { },
        },
        {
            title: "Ryrhme-Maker",
            description: "Create and play your own rhythm game tracks. Design unique levels and test your skills to the beat!",
            thumbNail: "",
            handlePlayClick: () => { },
            handleMakeClick: () => { },
        },
    ]
    return (
        <div style={{
            overflow: 'auto',
            height: '85vh'
        }}>
            {temp.map((game) => {
                return <GameListItem key={game.title} {...game} />
            })}
        </div>
    )
}
export default GameList