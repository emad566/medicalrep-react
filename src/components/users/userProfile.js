import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import seven from '../../assets/images/user/7.jpg';
import profileImg from '../../assets/images/other-images/profile-style-img3.png';
import blog from "../../assets/images/blog/img.png";
import {Email,BOD,Designer,ContactUs,JOHANDIO,Comment,MarkJecno,Like,Follower,Following,Location} from '../../constant'
const UserProfile = () => {
    const [url, setUrl] = useState();

    const readUrl = (event) => {
        if (event.target.files.length === 0)
            return;
        //Image upload validation
        var mimeType = event.target.files[0].type;

        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        // Image upload
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            setUrl(reader.result)
        }
    }


    return (
        <Fragment>
            <Breadcrumb parent="Users" title="User Profile" />
            <div className="container-fluid">
                <div className="user-profile">
                    <div className="row">
                        {/* <!-- user profile first-style start--> */}
                        <div className="col-sm-12">
                            <div className="card hovercard text-center">
                                <div className="cardheader"></div>
                               
                                <div className="user-image ">
                                    <div className="avatar ">
                                        <img className="pro" alt="" src={url ? url : seven} data-intro="This is Profile image" />
                                    </div>
                                    <div className="icon-wrapper">
                                        <i className="icofont icofont-pencil-alt-5" data-intro="Change Profile image here" >
                                            <input className="pencil" type="file" onChange={(e) => readUrl(e)} />
                                        </i>
                                    </div>
                                </div>

                                <div className="info">
                                    <div className="row detail" data-intro="This is the your details">
                                        <div className="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="ttl-info text-start">
                                                        <h6><i className="fa fa-envelope me-2"></i>{Email}</h6><span>{"Marekjecno@yahoo.com"}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="ttl-info text-start ttl-sm-mb-0">
                                                        <h6><i className="fa fa-calendar me-2"></i>{BOD}</h6><span>{"02 January 1988"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                                            <div className="user-designation">
                                                <div className="title"><a target="_blank" href="javascript">{MarkJecno}</a></div>
                                                <div className="desc mt-2">{Designer}</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="ttl-info text-start ttl-xs-mt">
                                                        <h6><i className="fa fa-phone me-2"></i>{ContactUs}</h6><span>{"India +91 123-456-7890"}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="ttl-info text-start ttl-sm-mb-0">
                                                        <h6><i className="fa fa-location-arrow me-2"></i>{Location}</h6><span>{"B69 Near Schoool Demo Home"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="social-media" data-intro="This is your Social details">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="https://accounts.google.com/"><i className="fa fa-google-plus"></i></a></li>
                                            <li className="list-inline-item"><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="follow">
                                        <div className="row">
                                            <div className="col-6 border-right">
                                                <div className="follow-num counter">{"25869"}</div><span>{Follower}</span>
                                            </div>
                                            <div className="col-6">
                                                <div className="follow-num counter">{"659887"}</div><span>{Following}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- user profile first-style end-->
                        <!-- user profile second-style start--> */}
                        <div className="col-sm-12 " data-intro="This is the your first Post">
                            <div className="card firstPost" >
                                <div className="profile-img-style">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="d-flex">
                                                <img className="img-thumbnail rounded-circle me-3" src={seven} alt="Generic placeholder" />
                                                <div className="flex-grow-1 align-self-center">
                                                    <h5 className="mt-0 user-name">{JOHANDIO}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 align-self-center">
                                            <div className="float-sm-end"><small>{"10 Hours ago"}</small></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <p>{"Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company."}</p>
                                    <div className="img-container">
                                        <div id="aniimated-thumbnials">
                                            <a href="#javascript">
                                                <img className="img-fluid rounded" src={profileImg} alt="gallery" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="like-comment mt-4">
                                        <ul className="list-inline">
                                            <li className="list-inline-item border-right pe-3">
                                                <label className="m-0"><a href="#javascript"><i className="fa fa-heart"></i></a>  {Like}</label><span className="ms-2 counter">{"2659"}</span>
                                            </li>
                                            <li className="list-inline-item ms-2">
                                                <label className="m-0"><a href="#javascript"><i className="fa fa-comment"></i></a>  {Comment}</label><span className="ms-2 counter">{"569"}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- user profile second-style end-->
                        <!-- user profile third-style start--> */}
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="profile-img-style">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="d-flex">
                                                <img className="img-thumbnail rounded-circle me-3" src={seven} alt="Generic placeholder" />
                                                <div className="flex-grow-1 align-self-center">
                                                    <h5 className="mt-0 user-name">{JOHANDIO}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 align-self-center">
                                            <div className="float-sm-end"><small>{"10 Hours ago"}</small></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <p>{"Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable."}</p>
                                    <div className="row mt-4 pictures" id="aniimated-thumbnials-2">
                                        <a className="col-sm-6" href="#javascript">
                                            <img className="img-fluid rounded" src={profileImg} alt="gallery" />
                                        </a>
                                        <a className="col-sm-6" href="#javascript">
                                            <img className="img-fluid rounded" src={profileImg} alt="gallery" />
                                        </a>
                                    </div>
                                    <div className="like-comment mt-4">
                                        <ul className="list-inline">
                                            <li className="list-inline-item border-right pe-3">
                                                <label className="m-0"><a href="#javascript"><i className="fa fa-heart"></i></a>  {Like}</label><span className="ms-2 counter">{"2659"}</span>
                                            </li>
                                            <li className="list-inline-item ms-2">
                                                <label className="m-0"><a href="#javascript"><i className="fa fa-comment"></i></a>  {Comment}</label><span className="ms-2 counter">{"569"}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- user profile third-style end-->
                        <!-- user profile fourth-style start--> */}
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="profile-img-style">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="d-flex">
                                                <img className="img-thumbnail rounded-circle me-3" src={seven} alt="Generic placeholder" />
                                                <div className="flex-grow-1 align-self-center">
                                                    <h5 className="mt-0 user-name">{JOHANDIO}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 align-self-center">
                                            <div className="float-sm-end"><small>{"10 Hours ago"}</small></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <p>{"Comfort is very important to me. I think people live better in big houses and in big clothes. Design and style should work toward making you look good and feel good without a lot of effort so you can get on with the things that matter. My shows are about the complete woman who swallows it all. Its a question of survival. Those fashion designers are just crazy; but arent we all? You can only go forward by making mistakes.   "}</p>
                                    <div className="like-comment mt-4">
                                        <ul className="list-inline">
                                            <li className="list-inline-item border-right pe-3">
                                                <label className="m-0"><a href="#javascript"><i className="fa fa-heart"></i></a>  {Like}</label><span className="ms-2 counter">{"2659"}</span>
                                            </li>
                                            <li className="list-inline-item ms-2">
                                                <label className="m-0"><a href="#javascript"><i className="fa fa-comment"></i></a>  {Comment}</label><span className="ms-2 counter">{"569"}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- user profile fourth-style end-->
                        <!-- user profile fifth-style start--> */}
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="profile-img-style">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="d-flex">
                                                <img className="img-thumbnail rounded-circle me-3" src={seven} alt="Generic placeholder" />
                                                <div className="flex-grow-1 align-self-center">
                                                    <h5 className="mt-0 user-name">{JOHANDIO}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 align-self-center">
                                            <div className="float-sm-end"><small>{"10 Hours ago"}</small></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-12 col-xl-4">
                                            <div id="aniimated-thumbnials-3">
                                                <a href="#javascript">
                                                    <img className="img-fluid rounded" src={blog} alt="gallery" />
                                                </a>
                                            </div>
                                            <div className="like-comment mt-4 like-comment-lg-mb">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item border-right pe-3">
                                                        <label className="m-0"><a href="#javascript"><i className="fa fa-heart"></i></a>  {Like}</label><span className="ms-2 counter">{"2659"}</span>
                                                    </li>
                                                    <li className="list-inline-item ms-2">
                                                        <label className="m-0"><a href="#javascript"><i className="fa fa-comment"></i></a>  {Comment}</label><span className="ms-2 counter">{"569"}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <p>{"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- user profile fifth-style end--> */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default UserProfile;