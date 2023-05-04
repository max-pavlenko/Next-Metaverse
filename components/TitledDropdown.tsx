import React, {useEffect, useRef, useState} from 'react';

const TitledDropdown = ({
                            data,
                            title = 'dropdown'
                        }: { title?: string, data: { title: string, variants: string[] }[] }) => {
    const [isOpened, setIsOpened] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        isOpened && inputRef.current?.focus()
    }, [isOpened]);
    let emptyTabsCount = 0;

    return (
        <div  style={{
            display: 'flex',
            borderRadius: 7,
            // width: 300,
            gap: 5,
            flexDirection: 'column',
            padding: '5px 10px',
            backgroundColor: 'red',
            position: 'relative',
        }}>
            <div style={{border: '2px solid #bbb',}}>
                <h4 onClick={() => setIsOpened(prev => !prev)}>{title}</h4>
                {isOpened && <div style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    left: 0,
                    bottom: 0,
                    borderLeft: '2px solid #bbb',
                    borderRight: '2px solid #bbb',
                    borderBottom: '2px solid #bbb',
                    borderBottomRightRadius: 7,
                    borderBottomLeftRadius: 7,
                    translate: '0 100%',
                    width: '100%'
                }}>
                   <input value={inputValue} onChange={e => setInputValue(e.target.value)}
                          style={{backgroundColor: '#ddd', borderRadius: 6}} ref={inputRef} type="text"/>
                   <div style={{marginTop: 10}}>
                       {data.map(({title, variants}) => {
                           const filteredVariants = variants.filter(value => value.toLowerCase().includes(inputValue.toLowerCase()));
                           emptyTabsCount += filteredVariants.length === 0 ? 1 : 0;
                           return (
                               <>
                                   <h6 style={{backgroundColor: 'mistyrose'}}>
                                       {title}
                                   </h6>
                                   <div>
                                       {filteredVariants.map((variant) => (
                                           <div>
                                               {variant}
                                           </div>
                                       ))}
                                   </div>
                               </>
                           )
                       })}
                   </div>
                    {emptyTabsCount === data.length && <h1>No results!</h1>}
                </div>
                }
            </div>
        </div>
    );
};

export default TitledDropdown;