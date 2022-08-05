import React,{useState, } from 'react';
import { Pagination } from './Pagination';
import ProductCard from './ProductCard';
import 'antd/dist/antd.css';
import { Button, Divider } from 'antd';
import {Link} from 'react-router-dom'


export default function ProductItem() {


  
  const [json]  = useState(require('../components/assets/sampleOutput.json'))
  const [iposts,] = useState([...json.products.sort((a,b)=>a.rating < b.rating?1:-1).slice(0,8)]);
  const [posts,] = useState(iposts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage ] = useState(4); 


  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  var currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

 
  const paginate=(pageNumber)=>setCurrentPage(pageNumber);
   
  return (
    <>
    <Divider>Top Selling Products</Divider>
    <div className="container my-4">
   

    <div className="row">
          
             {    
                

                currentPosts.map((elem) => {
                     return (
                    
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-inline-flex justify-content-center align-items-center d-flex" key={elem.id}>
                      <ProductCard 
                       title={elem.title} 
                       description ={elem.description} 
                       rating={elem.rating}
                       price={elem.price}
                       indexImageUrl = {elem.indexImageUrl} 
                       image1Url={elem.image1Url}  
                       image2Url={elem.image2Url} 
                       image3Url={elem.image3Url}  
                       amazonUrl={elem.amazonUrl}/>
                    </div>
                    
                     )
                 })
             }
         </div>
         <div>
             <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
             <div className='d-flex justify-content-end'> <Link to="/products"><Button  >View More </Button></Link></div>
         </div>
         </div>
         
    </>
  )
}
