import React from "react";

import Card from "./Card"

import Header  from "./Header";

import "../Style/Library.css"


const bookList = [
    {bookName:"A",bookAuthor:"Jaya",bookPrice:100,publishDate:2-2-2021,bookImage:"https://images-na.ssl-images-amazon.com/images/I/51G2H236JAL._SX333_BO1,204,203,200_.jpg",bookSummary:"Lifestyle"},
{bookName:"B",bookAuthor:"Rekha",bookPrice:150,publishDate:2-2-2020,bookImage:"https://m.media-amazon.com/images/I/51uPlHqSy6L.jpg",bookSummary:"Science"},
{bookName:"C",bookAuthor:"Sushma",bookPrice:200,publishDate:1-2-2021,bookImage:"https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1557298988231_Pirates_of%20the%20Caribbean:%20The%20Curse%20of%20the%20Black%20Pearljpg",bookSummary:"Art"},
{bookName:"D",bookAuthor:"Swraj",bookPrice:250,publishDate:2-5-2020,bookImage:"http://www.georgerrmartin.com/wp-content/uploads/2013/03/5bookboxset.jpg",bookSummary:"Bio"},
{bookName:"E",bookAuthor:"Rahul",bookPrice:300,publishDate:21-8-2021,bookImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8ZXbz1NijBjFTxNav-MsU1MvT2mwszvoAg&usqp=CAU",bookSummary:"Mechanics"},
{bookName:"F",bookAuthor:"Jay",bookPrice:350,publishDate:20-9-2019,bookImage:"https://www.gannett-cdn.com/presto/2020/06/18/PPHX/36b2b331-bc87-4883-a4d5-d37f2404be0f-New_Moon_cover.jpg?width=1588",bookSummary:"Space Science"}

]





 const Library = () =>{
    
    return(

        <div className="container mt-3">
            <div className="row">
             
           {
               bookList.map(book => {
               return(
                   <div className="col-md-3 my-3 col-sm-6 center">
               <Card book1 = {book}/>

               </div>
               
               )})
           }
  
       </div>
       </div>
    )
}


export default Library;