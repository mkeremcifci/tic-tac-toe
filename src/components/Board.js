import { useState } from "react"
import Square from "./Square"
import CalculateWinner from "../utils/CalculateWinner"


export default function Board(){
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleCLick(i){
        if(squares[i] || CalculateWinner(squares)){
            return;
        }
        const nextSquare = squares.slice()
        if(xIsNext){
            nextSquare[i] = "X"
        } else{
            nextSquare[i] = "O"
        }
        setSquares(nextSquare)
        setXIsNext(!xIsNext)
    }
    const winner = CalculateWinner(squares)
    let status
    if(winner){
        status = "Winner "+ winner
    } else{
        status = "Next player: "+(xIsNext ? "X" : "O")
    }
    return(
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={()=>handleCLick(0)}/>
                <Square value={squares[1]} onSquareClick={()=>handleCLick(1)}/>
                <Square value={squares[2]} onSquareClick={()=>handleCLick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={()=>handleCLick(3)}/>
                <Square value={squares[4]} onSquareClick={()=>handleCLick(4)}/>
                <Square value={squares[5]} onSquareClick={()=>handleCLick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={()=>handleCLick(6)}/>
                <Square value={squares[7]} onSquareClick={()=>handleCLick(7)}/>
                <Square value={squares[8]} onSquareClick={()=>handleCLick(8)}/>
            </div>
        </>
    )
}