import { useRef, useState, useEffect } from 'react';

const Map = ({n1 , n2}) => {
    const pathRef = useRef();

    // x & y of the blue point on the roadmap
    const [cx, setCx] = useState(17);
    const [cy, setCy] = useState(50);

    const [node1, setNode1] = useState({ x: 0, y: 0 });
    const [node2, setNode2] = useState({ x: 0, y: 0 });
    const [end, setEnd] = useState({ x: 0, y: 0 });

    //
    const [rangeVal, setRangeVal] = useState(0);

    useEffect(() => {
        const path = pathRef.current;
        const totalLength = path.getTotalLength();
        const point = path.getPointAtLength((rangeVal * totalLength) / 100);
        setCx(point.x);
        setCy(point.y);
    }, [rangeVal]);

    useEffect(() => {
        const path = pathRef.current;
        const totalLength = path.getTotalLength();
        const node1 = path.getPointAtLength(((n1 || 0) * totalLength) / 100);
        const node2 = path.getPointAtLength(((n2 || 0) * totalLength) / 100);
        const end = path.getPointAtLength(totalLength);
        setNode1(node1);
        setNode2(node2);
        setEnd(end);
    }, []);

    return (
        <>
            <div className='relative w-full md:w-2/3 max-w-3xl md:rounded-xl overflow-hidden shadow-2xl'>
                <svg
                    className='absolute top-0 left-0 w-[60%] h-full translate-x-[28%] -translate-y-[2%] z-10  overflow-visible'
                    viewBox='0 0 358 226'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        ref={pathRef}
                        d='M2 56.5C36.5 29.3333 119.2 -17.5 174 12.5C242.5 50 212 83 200.5 99.5C189 116 203 127 210 129C217 131 271.5 141.5 274 140.5C276.5 139.5 316 135 341.5 168.5C361.9 195.3 355.333 216.667 349.5 224'
                        stroke='#433939'
                        stroke-width='5'
                        stroke-dasharray='6 6'
                    />
                    <path
                        ref={pathRef}
                        d='M2 56.5C36.5 29.3333 119.2 -17.5 174 12.5C242.5 50 212 83 200.5 99.5C189 116 203 127 210 129C217 131 271.5 141.5 274 140.5C276.5 139.5 316 135 341.5 168.5C361.9 195.3 355.333 216.667 349.5 224'
                        stroke='#433939'
                        stroke-width='5'
                        stroke-dasharray='6 6'
                    />
                    <circle cx={cx} cy={cy} r='10' fill='#991b1b' />
                    <circle
                        cx={node1.x}
                        cy={node1.y}
                        r='15'
                        fill='none'
                        stroke='#433939'
                        strokeWidth={4}
                    />
                    <circle
                        cx={node2.x}
                        cy={node2.y}
                        r='15'
                        fill='none'
                        stroke='#433939'
                        strokeWidth={4}
                    />
                    <path
                        d={`M${end.x - 14},${end.y - 14} L${end.x + 14},${
                            end.y + 14
                        } M${end.x - 14},${end.y + 14} L${end.x + 14},${
                            end.y - 14
                        }`}
                        stroke='#991b1b'
                        strokeWidth='4'
                    />
                </svg>
  

                <img
                    src='/images/map.jpg'
                    className='w-full opacity-80'
                    alt='map'
                />
            </div>
            <form
                className='flex flex-col items-center justify-center gap-3 text-white'
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <input
                    type='range'
                    className='accent-[#991b1b] '
                    value={rangeVal}
                    onChange={(e) => {
                        setRangeVal(e.target.value);
                    }}
                />
                <input
                    dir='ltr'
                    type='number'
                    max={100}
                    min={0}
                    value={rangeVal}
                    onChange={(e) => {
                        setRangeVal(e.target.value);
                    }}
                    className=' outline-none  w-14 rounded-lg px-2 py-1 bg-[#991b1b] sample_farsi_digits'
                />
            </form>
        </>
    );
};

export default Map;
