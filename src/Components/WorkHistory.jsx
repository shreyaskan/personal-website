import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import DetailedTimeline from './DetailedTimeline.jsx';
import SimpleTimeline from './SimpleTimeline.jsx';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function WorkHistory({ timelineRef, personalPageRef }) {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className='flex flex-col justify-center min-h-screen bg-[#301E67]' ref={timelineRef}>
            <h2 className='pt-10 flex flex-col justify-center items-center text-[#B6EADA] uppercase text-2xl sm:text-3xl md:text-4xl '>
                Experience and Education
            </h2>
            <div className='pt-8'>
                {isMobile ? <SimpleTimeline /> : <DetailedTimeline />}
            </div>
            {!isMobile && <div className='flex flex-col items-center'>
                <button
                    className="bg-[#03001C] mt-12 px-2 py-2 rounded-[50%] transition-all duration-300 hover:scale-110"
                    onClick={() => {
                        personalPageRef.current.scrollIntoView({
                            behavior: "smooth"
                        })
                    }}
                >
                    <FontAwesomeIcon className="text-[2rem] text-[#B6EADA]" icon={faArrowDown} />
                </button>
            </div>}
        </div >
    );
}
