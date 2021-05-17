import React, { useEffect } from "react";
import { useState } from "react";
import "./Slide.style.scss";

interface Props {
    images: any;
    interval: number;
}

const Slide = (props: Props) => {
    // const [thumbnails, setThumnails] = useState([]);
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(() => {
        // setThumnails(props.images);
        setCurrentSlideStyle({
            backgroundImage: "url('" + props.images[currentSlide] + "')"
        });

        if (currentSlide > 0) {
            setPreviousSlideStyle({
                backgroundImage: "url('" + props.images[currentSlide - 1] + "')"
            });
        } else {
            setPreviousSlideStyle({
                backgroundImage: "url('" + props.images[props.images.length - 1] + "')"
            });
        }

        if (currentSlide === props.images.length - 1) {
            setNextSlideStyle({
                backgroundImage: "url('" + props.images[0] + "')"
            });
        } else {
            setNextSlideStyle({
                backgroundImage: "url('" + props.images[currentSlide + 1] + "')"
            });
        }

        const loop = setInterval(() => {
            if (currentSlide === props.images.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, props.interval);
        return () => clearInterval(loop);
    }, [props.images, currentSlide, props.interval]);

    // function previous() {
    //     if (currentSlide > 0) {
    //         setCurrentSlide(currentSlide - 1);
    //     } else {
    //         setCurrentSlide(thumbnails.length - 1);
    //     }
    // }

    // function next() {
    //     if (currentSlide === thumbnails.length - 1) {
    //         setCurrentSlide(0);
    //     } else {
    //         setCurrentSlide(currentSlide + 1);
    //     }
    // }
    return (
        <section className="slideshow">
            <div className="slide-holder">
                <section className="slide previous-slide">
                    <div style={previousSlideStyle} className="slide-thumbnail"></div>
                </section>
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail"></div>
                </section>
                <section className="slide next-slide">
                    <div style={nextSlideStyle} className="slide-thumbnail"></div>
                </section>
            </div>

            {/* <div className="slideshow-controller">
                <span onClick={previous}>Previous</span>
                <span onClick={next}>Next</span>
            </div> */}
        </section>
    )
};

export default Slide;