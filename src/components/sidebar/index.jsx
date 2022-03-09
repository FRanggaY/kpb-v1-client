import React from "react";
import { Link } from "react-router-dom";

import {BsJustify, BsX, BsFillPersonFill, BsFillGearFill, BsFillGridFill} from "react-icons/bs";
import {FaPowerOff,FaChartPie} from "react-icons/fa";
import {RiGalleryFill, RiAdvertisementFill} from "react-icons/ri";
import {AiFillProfile} from "react-icons/ai";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-sky-200 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-5">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden inline px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-sky-200 m-2 py-3 px-6")}
          >
            <BsJustify />
          </button>
          {/* Brand */}
          <Link
            className="md:inline text-left md:pb-2 text-blueGray-600 mr-0 inline whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            <svg className="mr-3 h-10 inline" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA"></path><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE"></path><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2"></path></svg>
            <span className="self-center inline text-lg font-semibold whitespace-nowrap dark:text-white">KPB</span>
          </Link>
          
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    KPB
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <BsX />
                  </button>
                </div>
              </div>
            </div>
            
            <hr className="my-2 md:min-w-full " />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              AKUN
            </h6>
            <div>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase p-3 font-bold flex items-center " +
                      (window.location.href.indexOf("/login") !== -1
                        ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                        : "text-black hover:bg-gray-300")
                    }
                    to="#"
                  >
                    <span className="self-center text-xs font-bold whitespace-nowrap dark:text-white">Nama</span>
                  </Link>
                </li>
              </ul>
              
              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase p-3 font-bold flex items-center " +
                      (window.location.href.indexOf("/login") !== -1
                        ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                        : "text-black hover:bg-gray-300")
                    }
                    to="#"
                  >
                    <span className="self-center text-xs font-bold whitespace-nowrap dark:text-white">ROLE</span>
                  </Link>
                </li>
              </ul>
              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase p-3 font-bold flex items-center " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                        : "text-black hover:bg-gray-300")
                    }
                    to="/admin/settings"
                  >
                    <BsFillGearFill
                      className={
                        "fas fa-users mr-2 text-sm " +
                        (window.location.href.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    />{" "}
                    <p>Settings</p>
                  </Link>
                </li>
              </ul>
              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase p-3 font-bold flex items-center " +
                      (window.location.href.indexOf("/login") !== -1
                        ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                        : "text-black hover:bg-gray-300")
                    }
                    to="/login"
                  >
                    <FaPowerOff
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (window.location.href.indexOf("/login") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    />{" "}
                    <p>Log Out</p>
                  </Link>
                </li>
              </ul>
            </div>

            <hr className="my-2 md:min-w-full " />
                  <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="items-center">
                      <Link
                        className={
                          "text-xs uppercase p-3 font-bold flex items-center " +
                          (window.location.href.indexOf("/admin/dashboard") !== -1
                            ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                            : "text-black hover:bg-gray-300")
                        }
                        to="/admin/dashboard"
                      >
                        <BsFillGridFill
                          className={
                            "fas fa-tv mr-2 text-sm " +
                            (window.location.href.indexOf("/admin/dashboard") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        />{" "}
                        <p>Dashboard</p>
                      </Link>
                    </li>
                  </ul>
            {/* Divider */}
            <hr className="my-2 md:min-w-full " />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Access
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase p-3 font-bold flex items-center " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                      : "text-black hover:bg-gray-300")
                  }
                  to="/admin/tables"
                >
                  <BsFillPersonFill className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    } />{" "} 
                  <p>Users</p>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase p-3 font-bold flex items-center " +
                    (window.location.href.indexOf("/admin/profile") !== -1
                      ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                      : "text-black hover:bg-gray-300")
                  }
                  to="/admin/profile"
                >
                  <AiFillProfile className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/profile") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    } />{" "} 
                  <p>Profile</p>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase p-3 font-bold flex items-center " +
                    (window.location.href.indexOf("/admin/activity") !== -1
                      ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                      : "text-black hover:bg-gray-300")
                  }
                  to="/admin/activity"
                >
                  <FaChartPie className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/activity") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    } />{" "} 
                  <p>Activities</p>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase p-3 font-bold flex items-center " +
                    (window.location.href.indexOf("/admin/advertise") !== -1
                      ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                      : "text-black hover:bg-gray-300")
                  }
                  to="/admin/advertise"
                >
                  <RiAdvertisementFill className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/advertise") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    } />{" "} 
                  <p>Advertisement</p>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase p-3 font-bold flex items-center " +
                    (window.location.href.indexOf("/admin/gallery") !== -1
                      ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                      : "text-black hover:bg-gray-300")
                  }
                  to="/admin/gallery"
                >
                  <RiGalleryFill className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/gallery") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    } />{" "} 
                  <p>Gallery</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
