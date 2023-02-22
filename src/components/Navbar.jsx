import React from "react";
import { Link } from "react-router-dom";
import { RiHome7Fill } from 'react-icons/ri';
import {HiOutlineHashtag } from 'react-icons/hi';
import {IoNotificationsOutline} from 'react-icons/io5';
import {CiMail} from 'react-icons/ci';
import {FaRegBookmark} from 'react-icons/fa';
import {BsCardList} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {CiCircleMore} from 'react-icons/ci';

function Navbar() {
  const style="flex gap-2 items-center hover:bg-slate-200 hover:rounded-md "
  return (
    <div className="grid gap-5 fixed m-12 w-[236px] h-[442px] items-center max-sm:m-1 ">
      <img width="29px" height="24px" src="logo.png" alt="logo"/>
      <Link to="/"> <button className={style}>  <RiHome7Fill/> Home   </button> </Link>
      <Link to="Discover"> <button className={style}>  <HiOutlineHashtag/> Keşfet  </button> </Link>
      <Link to="Notifications"> <button className={style}> <IoNotificationsOutline/> Bildirimler    </button></Link>
      <Link to="Messages"><button className={style}>  <CiMail/> Mesajlar  </button> </Link>
      <Link to="Marks"><button className={style}> <FaRegBookmark/> Yer işaretleri</button></Link>
      <Link to="Lists"> <button className={style}> <BsCardList/> Listeler</button></Link>
      <Link to="Profile"> <button className={style}><CgProfile/> Profil</button></Link>
      <Link to="More"> <button className={style}><CiCircleMore/> Daha fazla</button></Link>
    </div>
  );
}

export default Navbar;
