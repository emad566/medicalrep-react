import React, { Fragment } from 'react';
import Breadcrumb from "../common/breadcrumb";
import blogSingle from "../../assets/images/blog/blog-single.jpg";
import comment from "../../assets/images/blog/comment.jpg";
import nine from "../../assets/images/blog/9.jpg";
import four from "../../assets/images/blog/4.jpg";
import twelve from "../../assets/images/blog/12.png";
import fourteen from "../../assets/images/blog/14.png";
import {Comment,JohanDeo,JolioMark,JohnQuil,MarkAteer,GregArias} from "../../constant";
const BlogSingle = () => {
    return (
        <Fragment>
            <Breadcrumb title="Blog Single" parent="Blog" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="blog-single">
                            <div className="blog-box blog-details">
                                <img className="img-fluid w-100" src={blogSingle} alt="blog-main" />
                                <div className="blog-details">
                                    <ul className="blog-social">
                                        <li className="digits">{"25 May 2022"}</li>
                                        <li><i className="icofont icofont-user"></i>{"Mark"} <span>{"Jecno"} </span></li>
                                        <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02"}<span>{"Hits"}</span></li>
                                        <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                    </ul>
                                    <h4>
                                       {` The Harpeth rises in the westernmost part of Rutherford County, just to the east of the community of College Grove in eastern Williamson County.`}
                                    </h4>
                                    <div className="single-blog-content-top">
                                        <p>{"From the east coast to the west, each river has its own beauty and character. Each river has its own story. Take a look at some America’s best rivers and some of the rivers we’re working to protect. And learn some facts about your favorite rivers. The Harpeth River and its tributaries are home to rich freshwater biodiversity, including more than 50 species of fish and 30 species of mussels"}</p>
                                        <p>{"The Harpeth River flows through the heart of downtown Franklin, the 14th fastest growing city in the United States, and traverses Williamson County, one of the fastest growing counties in Tennessee. This rapid development has already caused harm to the river from adding treated sewage, increasing stormwater runoff, and withdrawing water.The river’s impairment is caused by dangerously low levels of dissolved oxygen driven by high concentrations of nutrients – particularly phosphorus – that fuel oxygen-hungry algal blooms that can lead to toxic conditions."}</p>
                                    </div>
                                </div>
                            </div>
                            <section className="comment-box">
                                <h4>{Comment}</h4>
                                <hr />
                                <ul>
                                    <li>
                                        <div className="d-flex align-self-center">
                                            <img className="align-self-center" src={comment} alt="Generic placeholder" />
                                            <div className="flex-grow-1">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <h6 className="mt-0">{JolioMark}<span> {"( Designer )"}</span></h6>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <ul className="comment-social float-end float-md-right">
                                                            <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                                            <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p>{"The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant."}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <div className="d-flex">
                                                    <img className="align-self-center" src={nine} alt="Generic placeholder" />
                                                    <div className="flex-grow-1">
                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <h6 className="mt-0">{JohanDeo}<span> {"( Designer )"}</span></h6>
                                                            </div>
                                                        </div>
                                                        <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <img className="align-self-center" src={four} alt="Generic placeholder" />
                                            <div className="flex-grow-1">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <h6 className="mt-0">{JolioMark}<span> {"( Designer )"}</span></h6>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <ul className="comment-social float-end float-md-right">
                                                            <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                                            <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p>{"From the east coast to the west, each river has its own beauty and character. Each river has its own story. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <img className="align-self-center" src={twelve} alt="Generic placeholder" />
                                            <div className="flex-grow-1">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <h6 className="mt-0">{JohanDeo}<span> {"( Designer )"}</span></h6>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <ul className="comment-social float-end float-md-right">
                                                            <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                                            <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p>{"Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town."}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <img className="align-self-center" src={fourteen} alt="Generic placeholder" />
                                            <div className="flex-grow-1">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <h6 className="mt-0">{JolioMark}<span> {"( Designer )"}</span></h6>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <ul className="comment-social float-end float-md-right">
                                                            <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                                            <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p>{"Harpeth rises in the westernmost part of Rutherford County, just to the east of the community of College Grove in eastern Williamson County.but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default BlogSingle;