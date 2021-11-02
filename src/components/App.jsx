import React, { Component } from "react";
import { isElementOfType } from "react-dom/test-utils";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: "Ready Player One", author: "Ernest Cline"},
            {title: "All the light we cannot see", author: "Anthony Doerr"},
            {title: "The First and Last Freedom", author: "Jiddu Krishnamurit"} 
        ];
        this.state = {
            bookNumber: 2
        };
            
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0) {
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-3">
                        {/*Button herer to move to the previous book viewed*/}
                        <button onClick={this.goToPreviousBook}>Previous Book</button>
                    </div>
                    <div className="col-md-6">
                        {/*display book with cover here*/}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-3">
                        {/*Button to move to the next book here*/}
                        <button onClick={this.goToNextBook}>Next Book</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;