import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false);
    useEffect(() => {
        if(pageYOffset > 400){
            setVisibility(true);
        }
        else{
            setVisibility(false);
        }
    }, [pageYOffset])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"});

    if(!visible){
        return false;
    }

    return (
        <div className="scroll-to-top cursor-pointer text-center" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} className="icon" />
        </div>
    );
};

export default ScrollToTop;