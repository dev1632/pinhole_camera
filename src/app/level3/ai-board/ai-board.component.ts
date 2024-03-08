import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from 'src/app/level3/services/tic-tac-toe.service';
import { Piece } from 'src/app/level3/models/piece';
import { fabric } from 'fabric'


@Component({
  selector: 'app-ai-board',
  templateUrl: './ai-board.component.html',
  styleUrls: ['./ai-board.component.css'],
})
export class AiBoardComponent implements OnInit {
  private currentPlayer: Piece = Piece.EMPTY;
  private player: Piece = Piece.X;
  gameOver: boolean = false;
  board: Piece[][] = [];
  pinhole_screen: any;
  board2: Piece[][] = [];
  board3: Piece[][] = [];
  statusMessage: string = '';
  aiLevelEasy = true;
  canvas: any;
  text1 : any;
  Gamestarted = false;

  constructor(private readonly svc: TicTacToeService) {}

  ngOnInit(): void {    
   }

  choosePlayer(checked: boolean) {
    this.player = checked ? Piece.X : Piece.O;
  }
  chooseLevel(checked: boolean) {
    this.aiLevelEasy = checked;
  }
  

  newGame() {
    this.currentPlayer = Piece.X;
    this.Gamestarted = true;
    this.gameOver = false;
    this.board = [
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
    ];
    this.board2 = [
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
    ];
    this.board3 = [
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
    ];

    this.statusMessage = `Player ${this.currentPlayer}'s turn`;
    if (this.player !== this.currentPlayer) {
      this.aiTurn();
    }
  }

  move(row: number, col: number) {
    if (!this.gameOver && this.board[row][col] === Piece.EMPTY) {
      this.board[row][col] = this.currentPlayer;
      if (this.svc.isDraw(this.board)) {
        this.statusMessage = `It's a Draw.`;
        this.gameOver = true;
      } else if (this.svc.isWin(this.board)) {
        this.statusMessage = `Player ${this.currentPlayer} win!`;
        this.gameOver = true;
      } else {
        this.currentPlayer = this.currentPlayer === Piece.O ? Piece.X : Piece.O;
        this.statusMessage = `Player ${this.currentPlayer}'s turn`;
        if (this.currentPlayer !== this.player) {
          this.aiTurn();
        }
      }
    }
  }


  aiTurn() {
    const emptyCells = this.svc.countOfEmptyCells(this.board);
    if (emptyCells === 9) {
      this.move(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3));
    } else {
      const bestMove = this.svc.minimax(
        this.board,
        this.aiLevelEasy && emptyCells > 5 ? 5 : emptyCells,
        this.player !== Piece.X
      );
      this.move(bestMove.row, bestMove.col);
    }
  }

  

  private logBoard() {
    for (let row = 0; row < this.board.length; row++) {
      console.log(this.board[row]);
    }
  }

}
