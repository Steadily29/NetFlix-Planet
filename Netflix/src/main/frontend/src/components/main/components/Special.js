import React from 'react';
import 'css/main/special.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Special = () => {
    const { tab } = useParams();
    const navigate = useNavigate();

    const goDetailPage = () => {
        if(tab === 'movie'){
            navigate('/detailMain', {state : { movieId: '755566' }});
        }
        else{
            navigate('/detailMain', {state : { tvId: '93097' }});
        }
    }

    return (
        <div className='relative top-0 z-[0] w-full font-[.75vw]'>
            <span className="block relative z-[1]">
                <div className="c1-billboard-row left-0 relative right-0 top-0 bg-black pb-[40%] touch-pan-x select-none">
                    <div className="c1-billboard bg-black h-[56.25vw] absolute bottom-0 left-0 right-0 top-0 w-full z-0">
                        <div>
                            <div className="z-[2] full-screen bottom-0 left-0 right-0 top-0 absolute">
                                <div className="c1-hero-image-wrapper bottom-0 left-0 right-0 top-0 absolute">
                                    {
                                        tab === 'movie' ?
                                        <img className="c1-static-image z-[5]" src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeEAMcyM-GIgq6UAP9wHfbEqtFjQN4ge3XI5HMr_zE7znwgmbmBssMPM93hso7DeGHieXBTfwI8jhytUQv7gm96JKGgDwD2COs0q.webp?r=75d" alt="" /> : 
                                        <img className="c1-static-image z-[5]" src="https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbH6veKSImlLn0AJn8mHjMxH_U_kp2zji5Ws1ZntZ9sy94JXkPK0mUhZZ8PpkrYeOO-Tx_lT6W3ZdSnHY5-kY6tp17sH3PYOYSgU.webp?r=844" alt="" />
                                    }
                                    <div className="c1-trailer-vignette left-0 absolute right-0 z-[8]"></div>
                                    <div className="c1-hero-vignette left-0 absolute right-0 z-[8]"></div>
                                    <div className="c1-embedded-components relative z-10"></div>
                                </div>
                                <div className="c1-embedded-components relative z-10">
                                    <span className="c1-ActionButtons">
                                        <button aria-label="다시 재생" className="color-supplementary hasIcon round c1-billboard-replay-button" type="button">
                                            <div className="c1-special-button-leading">
                                                <div className="small" role="presentation">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1747 3.07702C11.01 2.79202 8.81537 3.30372 6.99988 4.51679C5.18439 5.72987 3.8718 7.56158 3.30668 9.67065C2.74155 11.7797 2.96243 14.0223 3.92815 15.9806C4.89388 17.9389 6.53859 19.4794 8.55586 20.3149C10.5731 21.1505 12.8254 21.2242 14.893 20.5224C16.9606 19.8205 18.7025 18.391 19.7942 16.5L18.0622 15.5C17.2131 16.9708 15.8582 18.0826 14.2501 18.6285C12.642 19.1744 10.8902 19.1171 9.32123 18.4672C7.75224 17.8173 6.47302 16.6192 5.7219 15.096C4.97078 13.5729 4.79899 11.8287 5.23853 10.1883C5.67807 8.5479 6.69897 7.12324 8.11102 6.17973C9.52307 5.23623 11.23 4.83824 12.9137 5.05991C14.5974 5.28158 16.1432 6.10778 17.2629 7.3846C18.1815 8.43203 18.762 9.7241 18.9409 11.0921L17.5547 10.168L16.4453 11.8321L19.4453 13.8321C19.7812 14.056 20.2188 14.056 20.5547 13.8321L23.5547 11.8321L22.4453 10.168L20.9605 11.1578C20.784 9.27909 20.0201 7.49532 18.7666 6.06591C17.3269 4.42429 15.3395 3.36202 13.1747 3.07702Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                    </span>
                                    <span className="c1-maturity-rating text-white items-center empty:hidden border-l-[3px] border-solid text-[1.1vw] border-[#dcdcdc] bg-[#333333]/60 h-[2.4vw] py-[0.5vw] pl-[0.8vw] pr-[3.5vw]">
                                        <span className="c1-maturity-number border-0 p-0">15+</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 top-0">
                            <div className="info">
                                <div className="logo-and-text">
                                    <div className="titleWrapper" style={{transformOrigin:'left bottom', transform:'scale(1) translate3d(0px, 0px, 0px)', transitionDuration:'1300ms', transitionDelay:'0ms'}}>
                                        <div className="c1-billboard-title">
                                            {
                                                tab === 'movie' ?
                                                <img alt="데이 시프트" className="title-logo" src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfJXe9XrlgfGe0nOqgF178pcc1nRwBm1qcjGLB3HEf0wPihxQHqXV606K_M8QYoDSvYGstM-tCrvsLAux73Jr_NhJKl7NyN9YeIqrqsfQ09BqIPSwPhPpQBp5-X38ikctgOLGdcsVLCqt8GLHzBYzZNheiYbnGdT1rqKBazB3FhMez5Jk-T5vQ.webp?r=7f1" title="데이 시프트" />:
                                                <img alt="동백꽃 필 무렵" className="title-logo" src="https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSyPa0C67xQMR05YG0aeRP5SNNvBdpFPt5RPlhhFC6kdiu2WujPPQOBQSmYf3afEa7AW2GwlbBuYkgMpW4S0HCydrAp2fI5pD-p1_JJ0Y4Gj.webp?r=ae8" title="동백꽃 필 무렵" />
                                            }
                                        </div>
                                    </div>
                                    <div className="info-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)', transitionDuration:'1300ms', transitionDelay: '0ms', opacity: '1'}}>
                                        <div className="info-wrapper-fade" style={{opacity: '1', transitionDuration: '600ms', transitionDelay: '200ms'}}>
                                        <div className="episode-title-container"></div>
                                        <div className="synopsis-fade-container">
                                            <div className="synopsis no-supplemental">
                                                <div className="ptrack-content" data-ui-tracking-context="%7B%22evidenceKey%22:%22web_synopsis%7C81030241_INFORMATIVE%7Cko%7C_IFD_%22,%22video_id%22:1,%22track_id%22:254015180,%22request_id%22:%22aba3f3bc-7a36-42a3-b026-23b23b29dedb-254957602%22,%22list_id%22:%22GPS_96C5ED18C072934A21339FA7EE6B1C-332B50E1F27340-8F71DCC590_p_1659875873618%22,%22row%22:0,%22rank%22:0,%22appView%22:%22synopsisEvidence%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="6db1ab2e-966a-4c19-b6b5-0ff4909c7116">
                                                    { tab === 'movie' ? 
                                                        'LA에 사는 남자. 일주일 안에 딸의 교육비와 치아 교정비를 마련해야 한다. 가족을 위해 목숨 걸고 일하러 가는 이 남자의 직업은 뱀파이어 사냥꾼!':
                                                        '천진하지만 강단 있는 싱글 맘 동백. 씩씩하게 살고 싶지만, 세상의 편견이 여전히 힘들다. 이런 그녀를 찾아온 설렘, 어쩌면 사랑. 이제부터, 조금 더 용감해져도 될까.'
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="c1-billboard-links forward-leaning">
                                        <a className="playLink isToolkit">
                                        <button className="color-primary hasLabel hasIcon c1-special-button-layout" tabIndex="-1" type="button">
                                            <div className="c1-special-button-leading">
                                            <div className="medium c1-special-button-blank" role="presentation">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            </div>
                                            <div className="c1-special-button w-[1rem]"></div>
                                            <Link to='/detailMain/video' state={ tab === 'movie' ? { id:'0', type:'movie' } : { id:'93097', type:'tv' }}><span className="c1-special-button-text text-black">재생</span></Link>
                                        </button>
                                        </a>
                                        <button className="color-secondary hasLabel hasIcon c1-special-button-layout" data-uia="billboard-more-info" type="button">
                                            <div className="c1-special-button-leading">
                                                <div className="medium c1-special-button-blank" role="presentation">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c1-special-button w-[1rem]"></div>
                                            <span className="c1-special-button-text" onClick={ goDetailPage }>상세 정보</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span>

        </div>
    );
};

export default Special;