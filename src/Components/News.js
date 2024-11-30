import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProp = {
    country: 'us',
    pageSize:5,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  
  

  constructor(){
    super();
    console.log("hello  i am a constructor from news component");
    this.state={
    articles:[],
    loading:false,
    page:1
    // this.state sets in constructor state used to dynamically change bar bar change huna
    }
    
  }

  // component did mount lifecycle method

  async componentDidMount(){
    
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=95853b61bc9f4821863e7aa0b23b89ff`;
    // let url=`https://newsapi.org/v2/everything?q=apple&from=2024-11-18&to=2024-11-18&sortBy=popularity&category=${this.props.category}&apiKey95853b61bc9f4821863e7aa0b23b89ff&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);

    let parsedData=await data.json();
    console.log(parsedData);
    // promise hu jay ga data convert data to text or json pass articles k zaroorat nai component did mount run hu ga finally api say lay kay ay ga
    this.setState({
    articles:parsedData.articles,totalArticles:parsedData.totalResults,
    loading:false

    })
  
    
  }

   handlePrevClick=async()=>
     {
     console.log("Previous");
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country} &category=${this.props.category}&apiKey95853b61bc9f4821863e7aa0b23b89ff&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
     let data=await fetch(url);
 
     let parsedData=await data.json();
     console.log(parsedData);
     // promise hu jay ga data convert data to text or json pass articles k zaroorat nai component did mount run hu ga finally api say lay kay ay ga
     this.setState({
      page:this.state.page-1,
     articles:parsedData.articles,
     loading:false
 
     })
     }

     handleNextClick=async()=>
      {
         console.log("Next");

         if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

      //    }
      // else{
         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey95853b61bc9f4821863e7aa0b23b89ff&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
          this.setState({loading:true});
         let data=await fetch(url);
     
         let parsedData=await data.json();
       
         
         // promise hu jay ga data convert data to text or json pass articles k zaroorat nai component did mount run hu ga finally api say lay kay ay ga
         this.setState({
          page:this.state.page+1,
         articles:parsedData.articles,
         loading:false
     
         })
         }
      }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsWorld- Top Headlines</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row">
        {!this.state.loading&&this.state.articles.map((element)=>{
          
  return <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title?element.title.slice(0,45):""} 
        description={element.description?element.description.slice(0,88):""} 
        imageUrl= {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>

        
        </div>      

        })}
          
        
        </div> 
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1}type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr;Previous</button>
      <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next&rarr;</button>


      </div>
      </div>
    )
  }

}
export default News
