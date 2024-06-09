"use client"
import GameListItem, { GameListItemType } from "./GameListItem"

interface GameListType {
    gameListData: GameListItemType[]
}
const GameList = ({ gameListData }: GameListType) => {
    return (
        <div style={{ overflow: 'auto', height: '85vh' }}>
            {gameListData.map((game) => {
                return <GameListItem key={game.title} {...game} />
            })}
        </div>
    )
}
export default GameList