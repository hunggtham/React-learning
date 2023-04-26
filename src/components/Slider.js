import React, { useEffect } from 'react'
import {
    useSelector
} from 'react-redux'
import { getArrSlider } from '../ultis/fn'

const Slider = () => {
    const { banner } = useSelector(state => state.app)
    console.log(banner);

    //handle render 3 item, hide 3 items
    useEffect(() => {

        const sliderEls = document.getElementsByClassName('slider-items');
        let min = 0;
        let max = 2;
        let maxLength = sliderEls.length - 1;
        console.log(sliderEls.length)
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, maxLength);

            for (let i = 0; i < maxLength; i++) {
                if (list.some(item => item == i)) {
                    sliderEls[i].style.cssText = `display: block`;
                } else {
                    sliderEls[i].style.cssText = `display: none`;
                }
                // console.log(i);

            }
            sliderEls[max].classList.add('animate-slide-right');

            if (min == maxLength) {
                min = 0
            } else {
                min += 1
            }
            if (max == maxLength) {
                max = 0
            } else {
                max += 1
            }
            console.log(list)

        }, 1000)
        // clear interval: intervar cứ sau 1s chạy 1 lần => chạy vô tận => phải clear đi
        //return chạy khi khi slider unmount( gỡ khỏi dom), trước khi gỡ khỏi dom sẽ chạy vào return và clear inteval đi => k còn interval( k còn bị chạy vô tận)
        return () => {
            intervalId && clearInterval(intervalId)
        }
        // check get img
        // console.log(sliderEls)
    }, [])
    return (
        <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-8'>
            {banner?.map(item => (
                <img
                    src={item.banner}
                    className='slider-items flex-1 object-contain w-1/3 rounded-lg'
                    key={item.encodeId}
                />
            ))}
        </div>
    )
}
// https://youtu.be/WnXFbvp7tZQ?list=PLGcINiGdJE91fhdIYP2iQ5R2v0wWFrtyF&t=513
export default Slider