import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { Search, Edit, Globe, BookOpen, FileText, Youtube, MessageCircle, Mail, RotateCcw, DollarSign, Check, Link, Codepen, HelpCircle, Aperture, Settings, MessageSquare } from 'react-feather';
import one from '../../assets/images/faq/1.jpg';
import two from '../../assets/images/faq/2.jpg';
import three from '../../assets/images/faq/3.jpg';
import four from '../../assets/images/faq/4.jpg';
import { Collapse } from 'reactstrap';
import { Articles,Knowledgebase,Support,IntellectualProperty,SellingAndBuying,UserAccounts,SearchArticles,Navigation,AskOurCommunity,AskQuestion,Tutorials,HelpCenter,ContactUs,VideoTutorials,DavidLinner,UserChristopher,VictoriaWilson,LatestUpdates,UIDesign,UXDesign,WebDesign,FeaturedTutorials ,SeeAll,WebDevelopment} from "../../constant";

const FaqComponent = () => {
    const [isCollaps, setIsCollaps] = useState(false);
    const [isCollaps1, setIsCollaps1] = useState(false);
    const [isCollaps2, setIsCollaps2] = useState(false);
    const [isCollaps3, setIsCollaps3] = useState(false);
    const [isCollaps4, setIsCollaps4] = useState(false);
    const [isCollaps5, setIsCollaps5] = useState(false);
    const [isCollaps6, setIsCollaps6] = useState(false);
    const [isCollaps7, setIsCollaps7] = useState(false);
    const [isCollaps8, setIsCollaps8] = useState(false);
    const [isCollaps9, setIsCollaps9] = useState(false);
    const [isCollaps10, setIsCollaps10] = useState(false);
    const [isCollaps11, setIsCollaps11] = useState(false);
    const [isCollaps12, setIsCollaps12] = useState(false);
    const [isCollaps13, setIsCollaps13] = useState(false);
    const [isCollaps14, setIsCollaps14] = useState(false);
    const [isCollaps15, setIsCollaps15] = useState(false);
    return (
        <Fragment>
            <Breadcrumb parent="Faq" title="Faq" />
            <div className="container-fluid">
                <div className="faq-wrap">
                    <div className="row">
                        <div className="col-xl-4 xl-100">
                            <div className="card bg-primary">
                                <div className="card-body">
                                    <div className="d-flex faq-widgets">
                                        <div className="flex-grow-1">
                                            <h5>{Articles}</h5>
                                            <p>{"How little experience or technical knowledge you currently have. The web is a very big place, and if you are the typical internet user, you probably visit several websites every day."}</p>
                                        </div><FileText className="flex-shrink-0"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 xl-50 col-sm-6">
                            <div className="card bg-primary">
                                <div className="card-body">
                                    <div className="d-flex faq-widgets">
                                        <div className="flex-grow-1">
                                            <h5>{Knowledgebase}</h5>
                                            <p>{"A Website Designing course enables learners to use essential designing and programming tools required to do the job. The curriculum is a blend of various themes."}</p>
                                        </div><BookOpen className="flex-shrink-0"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 xl-50 col-sm-6">
                            <div className="card bg-primary">
                                <div className="card-body">
                                    <div className="d-flex faq-widgets">
                                        <div className="flex-grow-1">
                                            <h5>{Support}</h5>
                                            <p>{"The customer support industry is renaissance. Customer support as a specialty is coming into its own, offering companies a competitive advantage that’s difficult to copy."}</p>
                                        </div><Aperture className="flex-shrink-0"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="header-faq">
                                <h5 className="mb-0">{"Quick Questions are answered"}</h5>
                            </div>
                            <div className="row default-according style-1 faq-accordion" id="accordionoc">
                                <div className="col-xl-8 xl-60 col-lg-6 col-md-7">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps(!isCollaps)}
                                                    data-toggle="collapse" data-target="#collapseicon" aria-expanded={isCollaps} aria-controls="collapseicon">
                                                    <HelpCircle/>
                                                    {"Integrating WordPress with Your Website?"}
                                                    </button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps}>
                                            <div className="card-body">{"How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps1(!isCollaps1)}
                                                    data-toggle="collapse" data-target="#collapseicon2" aria-expanded={isCollaps1} aria-controls="collapseicon2">
                                                    <HelpCircle /> {"WordPress Site Maintenance ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps1}>
                                            <div className="card-body">{"We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps2(!isCollaps2)}
                                                    data-toggle="collapse" data-target="#collapseicon3" aria-expanded={isCollaps2} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Meta Tags in WordPress ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps2}>
                                            <div className="card-body">{"Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps3(!isCollaps3)}
                                                    data-toggle="collapse" data-target="#collapseicon4" aria-expanded={isCollaps3} aria-controls="collapseicon2">
                                                    <HelpCircle /> {" WordPress in Your Language ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps3}>
                                            <div className="card-body">{"As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="faq-title">
                                        <h6>{IntellectualProperty}</h6>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps4(!isCollaps4)}
                                                    data-toggle="collapse" data-target="#collapseicon5" aria-expanded={isCollaps4}>
                                                    <HelpCircle /> {"WordPress Site Maintenance ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps4}>
                                            <div className="card-body">{"We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps5(!isCollaps5)}
                                                    data-toggle="collapse" data-target="#collapseicon7" aria-expanded={isCollaps5} aria-controls="collapseicon2">
                                                    <HelpCircle />{" WordPress in Your Language ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps5}>
                                            <div className="card-body">{"As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps6(!isCollaps6)}
                                                    data-toggle="collapse" data-target="#collapseicon8" aria-expanded={isCollaps6} aria-controls="collapseicon2">
                                                    <HelpCircle/> {"Integrating WordPress with Your Website ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps6}>
                                            <div className="card-body">{"How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="faq-title">
                                        <h6>{SellingAndBuying}</h6>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps7(!isCollaps7)}
                                                    data-toggle="collapse" data-target="#collapseicon9" aria-expanded={isCollaps7}>
                                                    <HelpCircle /> {"WordPress Site Maintenance ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps7}>
                                            <div className="card-body">{"We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps8(!isCollaps8)}
                                                    data-toggle="collapse" data-target="#collapseicon10" aria-expanded={isCollaps8} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Meta Tags in WordPress ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps8}>
                                            <div className="card-body">{"Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps9(!isCollaps9)}
                                                    data-toggle="collapse" data-target="#collapseicon11" aria-expanded={isCollaps9} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Validating a Website ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps9} >
                                            <div className="card-body">{"Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps10(!isCollaps10)}
                                                    data-toggle="collapse" data-target="#collapseicon12" aria-expanded={isCollaps10} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Know Your Sources ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps10}>
                                            <div className="card-body">{"A book or set of books giving information on many subjects or on many aspects of one subject. Some are intended as an entry point into research for a general audience, some provide detailed information."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="faq-title">
                                        <h6>{UserAccounts}</h6>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps11(!isCollaps11)}
                                                    data-toggle="collapse" data-target="#collapseicon13" aria-expanded={isCollaps11}>
                                                    <HelpCircle/>{"Integrating WordPress with Your Website ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps11}>
                                            <div className="card-body">{"How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps12(!isCollaps12)}
                                                    data-toggle="collapse" data-target="#collapseicon14" aria-expanded={isCollaps12} aria-controls="collapseicon2">
                                                    <HelpCircle />{"WordPress Site Maintenance ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps12}>
                                            <div className="card-body">{"We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps13(!isCollaps13)}
                                                    data-toggle="collapse" data-target="#collapseicon16" aria-expanded={isCollaps13} aria-controls="collapseicon2">
                                                    <HelpCircle />{" WordPress in Your Language ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps13}>
                                            <div className="card-body">{"As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps14(!isCollaps14)}
                                                    data-toggle="collapse" data-target="#collapseicon17" aria-expanded={isCollaps14} aria-controls="collapseicon2">
                                                    <HelpCircle />  {"Validating a Website ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps14}>
                                            <div className="card-body">{"Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations."}</div>
                                        </Collapse>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps15(!isCollaps15)}
                                                    data-toggle="collapse" data-target="#collapseicon18" aria-expanded={isCollaps15} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Meta Tags in WordPress ?"}</button>
                                            </h5>
                                        </div>
                                        <Collapse isOpen={isCollaps15}>
                                            <div className="card-body">{"Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress."}</div>
                                        </Collapse>
                                    </div>
                                </div>
                                <div className="col-xl-4 xl-40 col-lg-6 col-md-5">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card card-mb-faq xs-mt-search">
                                                <div className="card-header faq-header">
                                                    <h5>{SearchArticles}</h5>
                                                    <HelpCircle />
                                                </div>
                                                <div className="card-body faq-body">
                                                    <div className="faq-form">
                                                        <input className="form-control" type="text" placeholder="Search.." />
                                                        <Search className="search-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="card card-mb-faq">
                                                <div className="card-header faq-header">
                                                    <h5>{Navigation}</h5><Settings />
                                                </div>
                                                <div className="card-body faq-body">
                                                    <div className="navigation-btn"><a className="btn btn-primary" href="#javascript">
                                                        <MessageSquare className="m-r-10" />{AskQuestion}</a></div>
                                                    <div className="navigation-option">
                                                        <ul>
                                                            <li><a href="#javascript"><Edit />{Tutorials}</a></li>
                                                            <li><a href="#javascript"><Globe />{HelpCenter}</a></li>
                                                            <li><a href="#javascript"><BookOpen />{Knowledgebase}</a></li>
                                                            <li><a href="#javascript"><FileText />{Articles}</a><span className="badge badge-primary rounded-pill pull-right">{"42"}</span></li>
                                                            <li><a href="#javascript"><Youtube />{VideoTutorials}</a><span className="badge badge-primary rounded-pill pull-right">{"648"}</span></li>
                                                            <li><a href="#javascript"><MessageCircle />{AskOurCommunity}</a></li>
                                                            <li><a href="#javascript"><Mail />{ContactUs}</a></li>
                                                        </ul>
                                                        <hr />
                                                        <ul>
                                                            <li><a href="#javascript"><MessageCircle />{AskOurCommunity}</a></li>
                                                            <li><a href="#javascript"><Mail />{ContactUs}</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-header faq-header">
                                                    <h5 className="d-inline-block">{LatestUpdates}</h5><span className="pull-right d-inline-block">{SeeAll}</span>
                                                </div>
                                                <div className="card-body faq-body">
                                                    <div className="d-flex updates-faq-main">
                                                        <div className="updates-faq flex-shrink-0"><RotateCcw className="font-primary" /></div>
                                                        <div className="flex-grow-1 updates-bottom-time">
                                                            <p><a href="#javascript">{DavidLinner} </a>{"requested money back for a double debit card charge"}</p>
                                                            <p>{"10 minutes ago"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex updates-faq-main">
                                                        <div className="updates-faq flex-shrink-0"><DollarSign className="font-primary" /></div>
                                                        <div className="flex-grow-1 updates-bottom-time">
                                                            <p>{"All sellers have received monthly payouts"}</p>
                                                            <p>{"2 hours ago"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex updates-faq-main">
                                                        <div className="updates-faq flex-shrink-0"><Link className="font-primary" /></div>
                                                        <div className="flex-grow-1 updates-bottom-time">
                                                            <p>{UserChristopher} <a href="#javascript">{"Wallace"}</a> {"is on hold and awaiting for staff reply"}</p>
                                                            <p>{"45 minutes ago"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex updates-faq-main">
                                                        <div className="updates-faq flex-shrink-0"><Check className="font-primary" /></div>
                                                        <div className="flex-grow-1 updates-bottom-time">
                                                            <p>{"Ticket #43683 has been closed by"} <a href="#javascript">{VictoriaWilson}</a></p>
                                                            <p>{"Dec 7, 11:48"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="header-faq">
                                <h5 className="mb-0">{FeaturedTutorials}</h5>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 xl-50 col-md-6">
                                    <div className="card features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={one} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link"></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6>{WebDesign}</h6>
                                            <p>{"A Web Designing course belongs to the field of Computer Science and IT. It enables students to learn."}</p>
                                        </div>
                                        <div className="card-footer"><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></div>
                                    </div>
                                </div>
                                <div className="col-xl-3 xl-50 col-md-6">
                                    <div className="card features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={two} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link"></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6>{WebDevelopment}</h6>
                                            <p>{"This course is designed to start you on a path toward future studies in web development and design."}</p>
                                        </div>
                                        <div className="card-footer"><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star-o font-primary"></i></span></div>
                                    </div>
                                </div>
                                <div className="col-xl-3 xl-50 col-md-6">
                                    <div className="card features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={three} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link"></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6>{UIDesign}</h6>
                                            <p>{"User interface design (UI) is the design for machines and software, such as mobile devices, computers."}</p>
                                        </div>
                                        <div className="card-footer"><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></div>
                                    </div>
                                </div>
                                <div className="col-xl-3 xl-50 col-md-6">
                                    <div className="card features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={four} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link"></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6>{UXDesign}</h6>
                                            <p>{"A Web Designing course belongs to the field of Computer Science and IT. It enables students to learn."}</p>
                                        </div>
                                        <div className="card-footer"><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star-half-o font-primary"></i></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="header-faq">
                                <h5 className="mb-0">{"Latest articles and videos"}</h5>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <Codepen className="m-r-30 flex-shrink-0" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="f-w-600">{"Article Base Video"}</h6>
                                                            <p>{"The web is a very big place, and if you are the typical internet user."}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <Codepen className="m-r-30 flex-shrink-0" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="f-w-600">{"Validate website"}</h6>
                                                            <p>{"Website is the process of ensuring that the pages on the website conform."}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex"><Codepen className="m-r-30 flex-shrink-0" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="f-w-600"> {"Sources Demos"}</h6>
                                                            <p>{"Simple demos of frequently asked questions about using the Libraries and information resources"} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <FileText className="m-r-30 flex-shrink-0" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="f-w-600"> {"Knows your sources"}</h6>
                                                            <p> {"A book giving information on many subjects or on many aspects of one subject."} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <FileText className="m-r-30 flex-shrink-0" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="f-w-600"> {"Tailwind Design"}</h6>
                                                            <p> {"Tailwind is so low-level, it never encourages you to design the same site twice."}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <FileText className="m-r-30 flex-shrink-0" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="f-w-600">{"Validate Html"} </h6>
                                                            <p>{"Website is the process of ensuring that the pages on the website conform."}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="row">
                                        <div className="col-xl-12 col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <Youtube className="m-r-30 flex-shrink-0" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="f-w-600"> {"Sources credible/reliable"}</h6>
                                                            <p>{"Simple demos of frequently asked questions about using the Libraries and information resources"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <Youtube className="m-r-30 flex-shrink-0" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="f-w-600"> {"Knows your sources"}</h6>
                                                            <p>{"A book giving information on many subjects or on many aspects of one subject."}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex"><Youtube className="m-r-30 flex-shrink-0" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="f-w-600">{"Web Design"}</h6>
                                                            <p>{"Web is so high-level, it never encourages you to design the same site twice"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FaqComponent;