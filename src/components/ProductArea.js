import React,{useState, } from 'react';
import { Pagination } from './Pagination';
import ProductCard from './ProductCard';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space, Typography } from 'antd';



export default function ProductItem() {


  
  const [json]  = useState(require('../components/assets/sampleOutput.json'))
  const [iposts,] = useState([...json.products]);
  const [posts, setPosts] = useState(iposts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage ] = useState(12); 


  
  // useEffect(() => {
  //   fetchPost();
  // }, []);


  // const fetchPost = () =>{
  //   const res = require('../components/assets/sampleOutput.json');
  //   setPosts(res);
  // }

  // Get Current Posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  var currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  function filterHandlerLowtoHigh  ()  {
    currentPosts = setPosts([...posts].sort((a,b)=>a.price < b.price?1:-1));
    paginate(1);
  }
  function filterHandlerHightoLow  ()  {
    currentPosts = setPosts([...posts].sort((a,b)=>a.price > b.price?1:-1));
    paginate(1);
  }

  function filterHandlerPopularity  ()  {
    currentPosts = setPosts([...posts].sort((a,b)=>a.rating < b.rating?1:-1));
    paginate(1);
  }

  function filterHandlerLatest  ()  {
    currentPosts = setPosts([...posts].sort((a,b)=>a.id < b.id?1:-1));
    paginate(1);
  }

 
  const paginate=(pageNumber)=>setCurrentPage(pageNumber);




  const filter = (
    <Menu
      selectable
      defaultSelectedKeys={['3']}
      items={[
        {
          key: '1',
          label: <Button type="text" onClick={filterHandlerPopularity}>Popularity</Button>,
        },
        {
          key: '2',
          label: <Button type="text" onClick={filterHandlerLowtoHigh}>Price (High to Low)</Button>,
        },
        {
          key: '3',
          label: <Button type="text" onClick={filterHandlerHightoLow}> Price (Low to High)</Button>,
        },
        {
          key: '4',
          label: <Button type="text" onClick={filterHandlerLatest}>Latest</Button>,
        },
      ]}
    />
  );


  // function filterHandlerTag1  () {
  //   currentPosts = setPosts(iposts.filter(a => { return a.tags.includes("SSTandoor") }));
  //    paginate(1);
  // }
  // function filterHandlerTag2  () {
  //    currentPosts = setPosts(iposts.filter(a => { return a.tag === "MSTandoor" }));
  //    paginate(1);
  // }
  // function filterHandlerTag3  () {
  //    currentPosts = setPosts(iposts.filter(a => { return a.tag === "CHTandoor" }));
  //    paginate(1);
  // }
  // function filterHandlerTagAll  () {
  //   currentPosts = setPosts(iposts);
  //   paginate(1);
  // }

  function filterHandlerTag  (t) {
    currentPosts = setPosts(iposts.filter(a => { return a.tags.includes(`${t}`)}));
    paginate(1);
 }
  




  return (
    <>
    <div className="container my-4 ">
    <div className="d-flex justify-content-center flex-wrap">
    {/* <Button onClick={filterHandlerTagAll}> All</Button>
    <Button onClick={filterHandlerTag1}> SSTandoor</Button>
    <Button onClick={filterHandlerTag2}> MSTandoor</Button>
    <Button onClick={filterHandlerTag3}> CHTandoor</Button> */}
    {
      json.allTags.map(t => {
        return <div className=' mx-1'><Button onClick={()=>filterHandlerTag(`${t}`)}>{t}</Button><br/></div>
      })
    }
    </div>
    <div className='d-flex justify-content-end'><Dropdown overlay={filter}>
          <Typography.Link><Space>
              Filter<DownOutlined />
            </Space></Typography.Link>
        </Dropdown>
    </div>
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
             <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>

         </div>
    </>
  )
}
