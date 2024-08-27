import nextSlideArrow from "../../assets/icons/slider-controll/next.svg";
import prevSlideArrow from "../../assets/icons/slider-controll/prev.svg";


export const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <img
            className={className}
            style={{ ...style }}
            onClick={onClick}
            src={nextSlideArrow} />
    );
}

export const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <img
            className={className}
            style={{ ...style }}
            onClick={onClick}
            src={prevSlideArrow} />
    );
}