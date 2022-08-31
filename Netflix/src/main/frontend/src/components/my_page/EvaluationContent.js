import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContentItem from './ContentItem';

const EvaluationContent = () => {

    const location = useLocation();
    const profile_id = location.state.profile_id;
    const profile_name = location.state.profile_name;
    const img_path = location.state.img_path;
    console.log(img_path)
    console.log(profile_name)

    const qs =require('qs')
    const [data, setData] = useState([]);
    const [isShow1, setIsShow1] = useState(false)
    const [isShow2, setIsShow2] = useState(false)
    const [isShow3, setIsShow3] = useState(false)
    const getContent = async()=> {
        axios({
            url : '/getContent',
            method : 'post',
            data : qs.stringify({
                'profile_id' : ''+profile_id,
            })
        }).then(res=>{
            setData(res.data)
         
        })
    }
    useEffect(()=>{
        getContent();
    },[])
   
   
    return (
        <div>
            <div className = "m1_bd m-[20px] p-0 block w-full min-h-[1000px] max-w-[1248px] mx-auto min-w-[740px]" style={{margin : 'auto'}}>
                <div className = "px-[5%] min-h-[400px] min-w-[400px] m-auto block relative w-[100%]">
                    <div className = "flex justify-start w-[100%]">
                        <div className = "text-[#333] text-4xl mb-100 mt-2 relative w-[70%]">{profile_name}의 컨텐츠 평가</div>
                        <div className = "flex justify-end relative text-lg mt-4 ml-14 w-[100%]">
                            <Link to="/my/watchRecord" state={{ profile_id: profile_id ,profile_name : profile_name ,img_path : img_path}}><div  className = "text-black">보고있는 콘텐츠</div></Link>
                            <div className = "ml-3 mr-3">|</div>
                            <div  className = "text-black">평가</div>
                        </div>
                        <img className = "rounded w-[50px] h-[50px] ml-10" src = {img_path}></img>
                    </div>
                    {
                        data.map((item, index)=>{return <ContentItem key={index} profile_id={profile_id} type={item.video_type} l_type={item.like_type} item={item.video_id} date={item.like_time} /> })
                    }
                    <div className="border-solid mt-[17px] border-t-[1px] h-1 border-neutral-300 w-[100%]"></div>
                        <div className = "flex">
                            <button className = "rounded w-[110px] bg-[#0080ff] text-[#fff] h-[43px] text-lg mt-6 " >더 보기</button>
                                <Link to = "/my">
                                    <button className="rounded w-[220px] bg-[#ccc] h-[43px] ml-3 mt-6 text-lg text-[#000] font-semibold">계정 페이지로 돌아가기</button>
                                </Link>
                            </div>    
                        </div>
                    </div>        
            </div>
        );
    };

export default EvaluationContent;