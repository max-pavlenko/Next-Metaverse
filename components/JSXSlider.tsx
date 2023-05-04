import {ReactNode, useState} from 'react';

const JsxSlider = ({
                       initialSlides,
                       slideWidth = '300px',
                       gapWidth = 8
                   }: { slideWidth: string, gapWidth: number, initialSlides: ReactNode[] }) => {
    const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
    const [slides, setSlides] = useState<ReactNode[]>([...initialSlides, ...initialSlides]);
    const slideIndexWithModulus = Math.abs(currentSlideIdx);

    function handlePrevSlide() {
        let newSlideIdx = currentSlideIdx;
        checkIndexBoundaries(--newSlideIdx);
        setCurrentSlideIdx(newSlideIdx < 0 ? initialSlides.length - 1 : newSlideIdx);
    }

    function handleNextSlide() {
        let newSlideIdx = slideIndexWithModulus;
        checkIndexBoundaries(++newSlideIdx);
        setCurrentSlideIdx(newSlideIdx)
    }

    function checkIndexBoundaries(idx: number) {
        if (idx < 1) {
            return setSlides(prev => [...initialSlides, ...prev]);
        }
        else if (idx > slides.length - 1) return setSlides(prev => [...prev, ...initialSlides]);
    }

    return (

        <figure style={{
            listStyle: 'none',
            overflow: 'hidden',
            width: `${slideWidth}`
        }}>
            <div style={{
                translate: `calc(${(-slideIndexWithModulus * 100)}% + ${(-gapWidth * slideIndexWithModulus)}px) 0`,
                gap: gapWidth,
                display: 'flex',
                transition: '.45s all ease-in-out',
            }}>
                {slides.map((element, i) => (
                    <li key={i}>
                        {element}
                    </li>
                ))}
            </div>

            <button onClick={handlePrevSlide}>Prev</button>
            <button onClick={handleNextSlide}>Next</button>
        </figure>
    );
};

export default JsxSlider;