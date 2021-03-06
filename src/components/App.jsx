import React, { Component } from "react";
import { isElementOfType } from "react-dom/test-utils";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";
import BookViewer from "./BookViewer/BookViewer";
import Footer from "./Footer/Footer"
import BookCreator from "./BookCreator/BookCreator";

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

    createBook = (newBook) => {
        console.log('From the createBook on App component', newBook);
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length - 1
        })
            
    }
    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextbook={this.goToNextBook} previousbook={this.goToPreviousBook} />
                <Footer />
                <BookCreator createNewBook={this.createBook} />
            </div>
        )
    }
}

export default App;