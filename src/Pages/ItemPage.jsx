import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import garri from '../resource/garri.png'
import egusi from '../resource/egusi.jpg'
import yam from '../resource/yams.jpg'
import NavbarComponent from "../Component/Material-Tailwind/NavbarComponent";
import Select from "react-select";

 const CarouselData = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];
 
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  
  class ItemPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentSlide: 0,
        paused: false,
      };
    }
  
    componentDidMount() {
      setInterval(() => {
        if (this.state.paused === false) {
          let newSlide =
            this.state.currentSlide === CarouselData.length - 1
              ? 0
              : this.state.currentSlide + 1;
          this.setState({ currentSlide: newSlide });
        }
      }, 3000);
    }
  
    nextSlide = () => {
      let newSlide =
        this.state.currentSlide === CarouselData.length - 1
          ? 0
          : this.state.currentSlide + 1;
      this.setState({ currentSlide: newSlide });
    };
  
    prevSlide = () => {
      let newSlide =
        this.state.currentSlide === 0
          ? CarouselData.length - 1
          : this.state.currentSlide - 1;
      this.setState({ currentSlide: newSlide });
    };
  
    setCurrentSlide = (index) => {
      this.setState({ currentSlide: index });
    };
  
    render() {
      return (
        <>
        <NavbarComponent/>
        <div className=" bg-teal-50 max-w-screen-xl mx-auto flex  flex-col justify-center items-center h-screen p-6 ">
          <div className="max-w-xl h-72 flex overflow-hidden relative">
            <AiOutlineLeft
              onClick={this.prevSlide}
              className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
            />
  
            <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
              {CarouselData.map((slide, index) => {
                return (
                  <img
                    src={slide.image}
                    alt="This is a carousel slide"
                    key={index}
                    className={
                      index === this.state.currentSlide
                        ? "block w-full h-auto object-cover"
                        : "hidden"
                    }
                    onMouseEnter={() => {
                      this.setState({ paused: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ paused: false });
                    }}
                  />
                );
              })}
            </Swipe>
  
            <div className="absolute w-full flex justify-center bottom-0">
              {CarouselData.map((element, index) => {
                return (
                  <div
                    className={
                      index === this.state.currentSlide
                        ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                        : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                    }
                    key={index}
                    onClick={() => {
                      this.setCurrentSlide(index);
                    }}
                  ></div>
                );
              })}
            </div>
  
            <AiOutlineRight
              onClick={this.nextSlide}
              className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
            />
          </div>
            <div className='item-detail w-full xl:w-1/4'>
            <h3 className="w-full mt-4 h-10 gap-5 text-xl font-sans" > <span className="inline-block float-left mr-5">Price</span><span  className="inline-block float-right">2000/1kg</span> </h3><hr className="w-full h-1" />
            <h3 className="w-full mt-4 h-10 gap-5 text-xl font-sans" > <span className="inline-block float-left mr-5">Quantity</span><span  className="inline-block float-right">2000/1kg</span> </h3><hr className="w-full h-1" />
            <h3 className="w-full mt-4 h-10 gap-5 text-xl font-sans" > <span className="inline-block float-left mr-5">Location</span><span  className="inline-block float-right">Bamilagui</span> </h3><hr className="w-full h-1" />
            <div className='w-full xl:w-full mt-5 '>
            <label className='text-lg text-gray-700  font-sans ml-3'>Category</label>
              <Select
              placeholder='Category'
              className='w-full    h-5 mb-5 xl:w-full'
              options={options} />
            </div>
         </div>
        
         <button className='bg-teal-900 w-1/3 xl:w-1/4 h-8 rounded-md text-lg text-white mt-5'> Place Order</button>
        </div>
        </>
       
      );
    }
  }
  
  export default ItemPage;