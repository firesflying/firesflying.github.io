import React from 'react'
import BannerImage1 from './assets/BannerImg_1.jpg'
import BannerImage2 from './assets/BannerImg_2.jpg'
import BannerImage3 from './assets/BannerImg_3.jpg'


export default function CoverImages() {


  return (
    <>
    
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">

    {/* {posts.map (()=>{
        return  (
    <div className="carousel-item active">
        <img src={posts} className="d-block w-100 img-fluid" alt="..."/>
      </div>
        )
    }) 
    } */}
        
    <div className="carousel-item active">
      <a href='https://amzn.to/3vJ9epY'><img src={BannerImage1} className="d-block w-100 img-fluid" alt="..."/></a>
    </div>
    <div className="carousel-item">
    <a href='https://amzn.to/3JB459u'><img src={BannerImage2} className="d-block w-100 img-fluid" alt="..."/></a>
    </div>
    <div className="carousel-item">
    <a href='https://amzn.to/3Stexnn'><img src={BannerImage3} className="d-block w-100 img-fluid" alt="..."/></a>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}
