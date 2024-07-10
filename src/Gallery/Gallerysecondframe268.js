import React from 'react'
import './GalleryMain.css'

export default function Gallerysecondframe268(props) {


    return (
        <div>
            <div className='GallerySecondSection'>
                <div className='Galleryfirst flex-item'>

                </div>
                <div className='yoga flex-item' onClick={() => { props.handleShow('yogaimgs', 7, 1) }}>

                </div>
                <div className='sports flex-item' onClick={() => { props.handleShow('sportsimgs', 7, 2) }} >

                </div>
                <div className='shravan' onClick={() => { props.handleShow('shravanimgs', 7, 3) }}>
                    <div className='shravanbackimg'>
                        <div className='txt'>SHRAVAN MAHOTSAV</div>
                    </div>

                </div>
                <div className='mathamatics' onClick={() => { props.handleShow('mathamaticsimgs', 5, 4) }}>
                    <div className='txt'>MATHEMATICS EVENT</div>
                </div>
                <div className='independence' onClick={() => { props.handleShow('independenceimgs', 7, 5) }}>
                    <div className='txt independencetext'>INDEPENDENCE DAY</div>
                </div>
                <div className='gurupurnima' onClick={() => { props.handleShow('gurupurnimaimgs', 7, 6) }}>
                    <div className='txt'>GURU PURNIMA</div>
                </div>
                <div className='multilingual' onClick={() => { props.handleShow('multilingualimgs', 7, 7) }}>
                    <div className='txt'>MULTILINGUAL PROGRAM</div>

                </div>
                <div className='guruhar' onClick={() => { props.handleShow('guruharkrishanimgs', 4, 8) }}>
                    <div className='txt guruhartext'>GURUHAR KRISHANJIDAY</div>
                </div>
                <div className='graduation' onClick={() => { props.handleShow('graduationimgs', 6, 9) }}>
                    <div className='txt graduationtext'>GRADUATION DAY</div>

                </div>
                <div className='farewell' onClick={() => { props.handleShow('farewellimgs', 9, 10) }}>
                    <div className='txt'>FAREWELL</div>

                </div>
            </div>

        </div>
    )
}
