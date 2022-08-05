import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Card, Divider, Button, Image, Carousel } from "antd";

const { Meta } = Card;

const contentStyle = {
  maxHeight: "300px",
  minHeight:"250px",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "white",
  width: "240px",
  margin: "auto",
  padding: "15px"
};

const btnStyle = { width: "100%" };



const onChange = (currentSlide) => {
  console.log(currentSlide);
};

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false    
    };
}

  render() {

    let {title , description ,indexImageUrl, amazonUrl , image1Url , image2Url, image3Url, price, rating }= this.props;

    return (
      <>
     <Card
        hoverable
        style={{ width: 240 , margin : '10px' , }}
        cover={
          <div>
            <Carousel afterChange={onChange} arrows>
              {/* 1 item in Card */}
              <div> 
                <Image
                  preview={{ visible: false }}
                  style={contentStyle}
                  src={indexImageUrl}
                  onClick={() => this.setState({visible: true})}
                />
                <div style={{ display: "none" }}>
                  <Image.PreviewGroup
                    preview={{
                      visible: this.state.visible,
                      onVisibleChange: (vis) => this.setState({visible : vis})
                    }}
                  >
                    <Image src={indexImageUrl} />
                    <Image src={image1Url}/>
                    <Image src={image2Url} />
                    <Image src={image3Url} />
                  </Image.PreviewGroup>
                </div>
              </div>
              {/* 2nd item in card */}
              {/* <div>
                <iframe
                  style={contentStyle}
                  src="https://www.youtube.com/embed/LbutceYZgBY"
                  title="RealTalk Ep. 4 - Ft. @Fotty Seven On Diss Tracks, Collaborations , Family Reactions and More"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div> */}


            </Carousel>
          </div>
        }
      >
        <Meta title={title} description={description.slice(0 , 85)} />...
        <div className='my-2'><p>Rating: {rating} / 5 <br/>Price   : <strong>${price}</strong></p></div>
        <Divider></Divider>
        <Button style={btnStyle} type="button" target="_blank" href={amazonUrl}>
          Buy Now
        </Button>
      </Card>
      </>
    )
  }
}

export default ProductCard