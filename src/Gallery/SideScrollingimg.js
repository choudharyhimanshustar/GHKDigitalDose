import React, { useEffect, useState } from 'react'

export default function SideScrollingimg(props) {

    const [activeDiv, setActiveDiv] = useState(null);
    // for changing background color of active div
    const handleDivClick = (divId) => {
        setActiveDiv(divId);
    };

    useEffect(()=>{
        handleDivClick(props.activeDivnumber);
    },[])
    return (
        <div className='Scrollingmain'>
            <div className='Scrollingmaindivs' onClick={() => { props.handleClick('yogaimgs', 1,7); handleDivClick(1) }}
                style={{
                    border: activeDiv === 1 ? '5px solid rgba(139, 56, 45, 1)' : 'none',
                    backgroundColor: activeDiv === 1 ? 'rgba(253, 168, 168, 1)' : 'rgba(255, 214, 205, 1)'
                }}>
                <div className='sidescrollnamediv'>
                    YOGADAY
                </div>
            </div>
            <div className='Scrollingmaindivs' onClick={() => { props.handleClick('sportsimgs', 1, 7); handleDivClick(2) }}
                style={{
                    border: activeDiv === 2 ? '5px solid rgba(139, 56, 45, 1)' : 'none',
                    backgroundColor: activeDiv === 2 ? 'rgba(255, 202, 190, 1)' : 'rgba(255, 214, 205, 1)'
                }} >
                <div className='sidescrollnamediv'>
                    SPORTSDAY
                </div>
            </div>
            <div className='Scrollingmaindivs' onClick={() => { props.handleClick('shravanimgs', 1, 7); handleDivClick(3) }}
                style={{
                    border: activeDiv === 3 ? '5px solid rgba(139, 56, 45, 1)' : 'none',
                    backgroundColor: activeDiv === 3 ? 'rgba(255, 201, 152, 1)' : 'rgba(255, 228, 175, 1)'
                }} >
                <div className='sidescrollnamediv'>
                    SHRAVAN MAHOTSAV
                </div>
            </div>
            <div className='Scrollingmaindivs' onClick={() => { props.handleClick('mathamaticsimgs', 1, 5); handleDivClick(4) }}
                style={{
                    border: activeDiv === 4 ? '5px solid rgba(139, 56, 45, 1)' : 'none',
                    backgroundColor: activeDiv === 4 ? 'rgba(242, 173, 165, 1)' : 'rgba(242, 156, 144, 1)'
                }} >
                <div className='sidescrollnamediv'>
                    MATHEMATICS EVENT
                </div>
            </div>
            <div className='Scrollingmaindivs' onClick={() => { props.handleClick('independenceimgs', 1, 7); handleDivClick(5) }}
                style={{
                    border: activeDiv === 5 ? '5px solid rgba(139, 56, 45, 1)' : 'none',
                    backgroundColor: activeDiv === 5 ? 'rgba(251, 185, 181, 1)' : 'rgba(255, 201, 201, 1)'
                }} >
                <div className='sidescrollnamediv'>
                    INDEPENDENCE DAY
                </div>
            </div>

            <div className='Scrollingmaindivs' onClick={() => { props.handleClick('gurupurnimaimgs', 1, 7); handleDivClick(6) }}
                style={{
                    border: activeDiv === 6 ? '5px solid rgba(139, 56, 45, 1)' : 'none',
                    backgroundColor: activeDiv === 6 ? 'rgba(252, 207, 187, 1)' : 'rgba(255, 214, 205, 1)'
                }} >
                <div className='sidescrollnamediv'>
                    GURU PURNIMA
                </div>
            </div>

            <div className='Scrollingmaindivs' onClick={() => { props.handleClick('guruharkrishanimgs', 1, 4); handleDivClick(7) }}
                style={{
                    border: activeDiv === 7 ? '5px solid rgba(139, 56, 45, 1)' : 'none',
                    backgroundColor: activeDiv === 7 ? 'rgba(234, 124, 117, 1)' : 'rgba(249, 131, 115, 1)'
                }} >
                <div className='sidescrollnamediv'>
                    GURU HAR KRISHAN JI DAY
                </div>
            </div>

            <div className='Scrollingmaindivs' onClick={() => { props.handleClick('multilingualimgs', 1, 7); handleDivClick(8) }}
                style={{
                    border: activeDiv === 8 ? '5px solid rgba(139, 56, 45, 1)' : 'none',
                    backgroundColor: activeDiv === 8 ? 'rgba(255, 223, 216, 1)' : 'rgba(255, 222, 214, 1)'
                }} >
                <div className='sidescrollnamediv'>
                    MULTILINGUAL PROGRAM
                </div>
            </div>

            <div className='Scrollingmaindivs' onClick={() => { props.handleClick('graduationimgs', 1 ,6); handleDivClick(9) }}
                style={{
                    border: activeDiv === 9 ? '5px solid rgba(139, 56, 45, 1)' : 'none',
                    backgroundColor: activeDiv === 9 ? 'rgba(255, 189, 189, 1)' : 'rgba(255, 201, 201, 1)'
                }} >
                <div className='sidescrollnamediv'>
                    GRADUATION   DAY
                </div>
            </div>

            <div className='Scrollingmaindivs' onClick={() => { props.handleClick('farewellimgs', 1,9); handleDivClick(10) }}
                style={{
                    border: activeDiv === 10 ? '5px solid rgba(139, 56, 45, 1)' : 'none',
                    backgroundColor: activeDiv === 10 ? 'rgba(255, 189, 189, 1)' : 'rgba(255, 228, 175, 1)'
                }} >
                <div className='sidescrollnamediv'>
                    FAREWELL
                </div>
            </div>

        </div>
    )
}
