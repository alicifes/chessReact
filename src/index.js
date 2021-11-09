import React,{useState}from "react";
import ReactDOM from "react-dom";
import './style.css'

const Cell = function(props) {
  return(
    <div className='cell' onClick={props.onClick}>
      {props.text}
    </div>
  )
}

const Chessboard = function(){
  const [cells,setCells] = useState(
    [
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ]
  )     //也可以使用和为3,30,300等方法相等（特征值）
        //使用二进制进行处理
  const [finished,setFinished] = useState(false)
  const [n,setN] = useState(0)  //函数式编程
  const tell =(cells)=>{        //这里需要获取到新的状态，而不是旧的，在拷贝之前和拷贝之后是同时存在的
    for(let i = 0;i<3;i++){
      if(cells[i][0]==cells[i][1]&&cells[i][1]==cells[i][2]&&cells[i][0]!=null){
        console.log(cells[i][0]+'赢了');
        setFinished(true)
        break
      }
    }
    for(let i = 0;i<3;i++){
      if(cells[0][i]==cells[1][i]&&cells[1][i]==cells[2][i]&&cells[0][i]!=null){
        console.log(cells[0][i]+'赢了');
        setFinished(true)
        break
      }
    }
    if(cells[0][0]==cells[1][1]&&cells[1][1]==cells[2][2]&&cells[0][0]!=null){
      console.log(cells[0][0]+'赢了');
      setFinished(true)
    }
    if(cells[0][2]==cells[1][1]&&cells[1][1]==cells[2][0]&&cells[0][2]!=null){
      console.log(cells[0][2]+'赢了');
      setFinished(true)
    }
    console.log('panduan');
  }
  const onClickCell = (row,col)=>{
    // console.log('onclick cell');
    // console.log("hang"+row);
    // console.log("lie"+col);
    setN(n+1)
    const copy = JSON.parse(JSON.stringify(cells))  //深拷贝
    copy[row][col] = n%2?'x':'o'
    setCells(copy)
    tell(copy)
  }
  return(
    <div>
      n:{n}
      {cells.map((items,row)=><div className='row'>
        {items.map((item,col)=><div className='col'>{<Cell text={item} onClick={()=>onClickCell(row,col)}/>}</div>)}
      </div>)}
      {finished&&<div className='gameOver'>游戏结束</div>}   
    </div>
  )
}


ReactDOM.render(<div><Chessboard /></div>,document.getElementById('root'))