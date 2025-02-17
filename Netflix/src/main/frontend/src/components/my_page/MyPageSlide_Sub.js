import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MyPageNewProfileEmail from './MyPageNewProfileEmail';

const MyPageSlide_Sub = ({profile_id , profile_name, img_path}) => {
    console.log(img_path)
    const location = useLocation()
    const state = location.state ? location.state : ''

    //console.log(state)

    return (
        <div>
            <div className="user_slideMenu pl-[20px]">
                <ul className="m2_user2 link">
                    <li className="m2_list1 flex justify-between w-full">
                            <div className = "ml-[20%] mb-[2%]">
                                <div className = "pt-3 pb-3">프로필 이메일</div>
                                { state.type && <div>{ state.type }</div> }
                            </div>
                        <Link to = "/my/newProfileEmail">
                            <button className="flex justify-end w-full text-blue-500 pt-4">추가</button>
                        </Link>
                    </li>
                    <div className="border-solid ml-[20%] mt-3 border-t-[1px] h-1 border-neutral-300"></div>
                    
                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[20%] pt-6">
                            시청제한
                            <h3 className="pt-3 text-xs pb-2 text-gray-600">꺼짐</h3>
                        </div>
                        <Link to = "/my/movieRating">
                            <button className="flex justify-end w-full text-blue-500 pt-8">변경</button>
                        </Link>
                    </li>

                    <div className="border-solid ml-[20%] mt-3 border-t-[1px] h-1 border-neutral-300"></div>

                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[20%] pt-6 ">
                            프로필 잠금
                            <h3 className="pt-3 text-xs pb-2 text-gray-600">꺼짐</h3>
                        </div>
                        <Link to = "/my/profileLock">
                            <button className="flex justify-end w-full text-blue-500 pt-8">변경</button>
                        </Link>
                    </li>
                    
                    <div className="border-solid ml-[20%] mt-3 border-t-[1px] h-1 border-neutral-300"></div>
                    
                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[20%] pt-8 pb-7">시청기록</div>
                        <Link to = "/my/watchRecord" state={{ profile_id: profile_id ,profile_name : profile_name ,img_path : img_path}}>
                            <button className="flex justify-end w-full text-blue-500 pt-8">보기</button>
                        </Link>
                    </li>
                    <div className="border-solid ml-[20%] mt-3 border-t-[1px] h-1 border-neutral-300"></div>

                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[20%] pt-8 pb-7">평가한 콘텐츠</div>
                        <Link to="/my/evaluationContent" state={{ profile_id: profile_id , profile_name : profile_name ,img_path : img_path}}>
                            <button className="flex justify-end w-full text-blue-500 pt-8">보기</button>
                        </Link>
                    </li>
                    <div className="border-solid ml-[20%] mt-3 border-t-[1px] h-1 border-neutral-300"></div>

                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[20%] pt-6 ">
                            재생 설정
                            <h3 className="pt-3 text-xs pb-2 text-gray-600">다음 화 자동 재생, 미리보기 자동 재생, 자동 설정된 화질 및 음질.</h3>
                        </div>
                        <Link to = "/my/playSetting">
                            <button className="flex justify-end w-full text-blue-500 pt-8">변경</button>
                        </Link>
                    </li>
                     <div className="border-solid ml-[50px] mt-6 border-t-[1px] h-9 border-neutral-300"></div>
                </ul>
            </div>
            {/* user_slideMenu */}
        </div>
    );
};

export default MyPageSlide_Sub;

