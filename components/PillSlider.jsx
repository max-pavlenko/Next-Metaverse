import React, {useEffect, useRef, useState} from 'react';

const PillSlider = () => {
    const [draggedByPx, setDraggedByPx] = useState(0);
    const [isDragged, setIsDragged] = useState(false);
    const [clickedAtX, setClickedAtX] = useState(-1);
    const pillWrapperRef = useRef(null);
    const pillContainerRef = useRef(null);
    const [previousDraggedByPx, setPreviousDraggedByPx] = useState(0);

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp)
        return ()=>{
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, []);

    function handleMouseUp(event){
        const computedDraggedBy = Number(pillContainerRef.current.style.transform.replace('translateX(', '').replace('px)', ''));
        console.log('event2', computedDraggedBy, draggedByPx, );
        setPreviousDraggedByPx(computedDraggedBy);
        setClickedAtX(-1)
        setIsDragged(false)
    }
    const onMouseMove = (event) => {
        event.stopPropagation();
        if (!isDragged) return;
        const computedDraggedBy = previousDraggedByPx +  event.clientX - clickedAtX;
        setDraggedByPx(computedDraggedBy)
        console.log('event',event.clientX, computedDraggedBy, clickedAtX, pillContainerRef.current?.getBoundingClientRect().width)
    }

    let computedDraggedBy = draggedByPx;
   if (draggedByPx >= 0) computedDraggedBy = 0
   else if (draggedByPx <= -pillContainerRef.current?.clientWidth + pillWrapperRef.current?.clientWidth) {
      const MARGIN_THRESHOLD = 18;
      computedDraggedBy = -pillContainerRef.current?.clientWidth + pillWrapperRef.current?.clientWidth - MARGIN_THRESHOLD;
   }

   return (
        <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
            <div ref={pillWrapperRef} className='pills-wrapper' style={{
                marginTop: 10,
                marginBottom: 5,
                maxWidth: '50%',
                overflow: 'scroll'
            }}>
                <div ref={pillContainerRef} onMouseDown={(e) => {
                    setClickedAtX(e.clientX)
                    setIsDragged(true)
                }} onMouseMove={onMouseMove}
                     style={{
                         display: 'flex',
                         gap: 20,
                         userSelect: 'none',
                         width: 'max-content',
                         transition: '0.12s all linear',
                         transform: `translateX(${computedDraggedBy}px)`
                     }}>
                    {PILLS_NAMES.map((name, i) => (
                        <button key={i} onClick={()=>{
                           console.log(name)}} style={{
                            padding: '3px 10px',
                            borderRadius: '500px',
                            backgroundColor: '#444',
                            color: 'white',
                        }}>
                            {name}
                        </button>
                    ))}
                </div>
            </div>
            <button
                onClick={()=> {
                    setPreviousDraggedByPx(prevState => prevState - 200)
                    setDraggedByPx(prevState => prevState - 200)
                }}
                style={{borderRadius: '50%',  width: 40, height: 40, color: '#5d5352', backgroundColor: '#ccc', zIndex: 1, boxShadow: 'white -17px -2px 10px 9px'}}>N
            </button>
        </div>
    );
};

const PILLS_NAMES = ['lorem', 'ipsum', 'dolor','sit','amet','lorem1','lorem2','lorem3','lorem4','lorem5',]

export default PillSlider;