import {useEffect, useState} from "react";

const bottomReached = () => {
    return Math.abs(document.documentElement.getBoundingClientRect().top) >=
        document.body.scrollHeight - window.innerHeight
}

const statReached = (pageElement) => {
    return Math.abs(document.documentElement.getBoundingClientRect().top) <=
        pageElement.offsetTop
}

const scrollToElement = (pageElement) => {
    let positionX = 0, positionY = 0;

    while (pageElement != null) {
        positionX += pageElement.offsetLeft;
        positionY += pageElement.offsetTop;
        pageElement = pageElement.offsetParent;
        window.scrollTo(positionX, positionY);
    }
}

const useScroller = (splitter) => {
    //let lastTop = document.documentElement.getBoundingClientRect().top;
    //let lastBottom = document.documentElement.getBoundingClientRect().bottom;
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        let lastTop = window.pageYOffset || document.documentElement.scrollTop;
        let currentDirection = '';

        const trackScrolling = () => {
            const currentTop =
                window.pageYOffset || document.documentElement.scrollTop;
            const startEntries = document.getElementById("start-entries");
            const endEntries = document.getElementById("end-entries");
            console.log(
                'clientRectTop', document.documentElement.getBoundingClientRect().top,
                'document.body.scrollHeight', document.body.scrollHeight,
                'window.innerHeight', window.innerHeight,
                'target', startEntries?.offsetTop)

            if (currentTop > lastTop) {
                currentDirection = "down";
                lastTop = currentTop
            }

            if(currentTop < lastTop){
                currentDirection = "up";
                lastTop = currentTop
            }

            if (currentDirection === "down" &&
                bottomReached()
            ) {
                setEntries(splitter.next());
                scrollToElement(startEntries)
                lastTop = 0;
                console.log("REQUESTING NEXT");
            }

            if (currentDirection === "up" &&
                statReached(startEntries)
            ) {
                setEntries(splitter.prev());
                scrollToElement(endEntries)
                console.log("REQUESTING PREV");
            }

            console.log(
                `direction - ${currentDirection},
        lastTop - ${lastTop}, 
        currentTop - ${currentTop}`
            );
        };

        setEntries(splitter.filter());

        document.addEventListener("scroll", trackScrolling);
        trackScrolling();
        return () => {
            document.removeEventListener("scroll", trackScrolling);
        };
    }, [splitter]);

    return [entries];
};

export default useScroller;
