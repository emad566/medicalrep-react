import React, { Fragment, useState,useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { Codepen, FileText, Youtube, BookOpen, Aperture, Archive,ArrowRight } from 'react-feather';
import two from '../../assets/images/faq/2.jpg';
import one from '../../assets/images/faq/1.jpg';
import three from '../../assets/images/faq/3.jpg';
import four from '../../assets/images/faq/4.jpg';
import errorImg from '../../assets/images/search-not-found.png';
import axios from 'axios'
import { Articles,Knowledgebase,Support,BrowseArticles,FeaturedTutorials,WebDesign,WebDevelopment,UIDesign,UXDesign } from "../../constant";

const KnowledgebaseComponent = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [search, setsearch] = useState([]);
    const [Data,setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/knowledgebaseDB.json`).then(res => setsearch(res.data))
    },[])


    const handleChange = event => {
        const searchByTitle = [];
        setSearchTerm(event.target.value);
        axios.get(`${process.env.PUBLIC_URL}/api/knowledgebaseDB.json`).then(res => setData(res.data))
        Data.filter(data => {
            if (data.title.toLowerCase().indexOf(event.target.value) > -1) {
                searchByTitle.push(data);
            }
            return 0;
        })
        setsearch(searchByTitle)
    };

    return (
        <Fragment>
            <Breadcrumb title="Knowledgebase" parent="Knowledgebase" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 xl-50 col-sm-6">
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
                    <div className="col-xl-4 xl-100">
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
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="header-faq">
                                    <h5 className="mb-0">{"Browse articles by category"}</h5>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <form className="form-inline search-form pull-right search-knowledge">
                                    <div className="form-group me-0">
                                        <input className="form-control-plaintext" name="search" type="text"
                                            value={searchTerm}
                                            onChange={handleChange} placeholder="Search.." />
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{BrowseArticles}</h5>
                                    </div>

                                    <div className="card-body">
                                        <div className="row browse">
                                            {search.length > 0 ? search.map((data, i) => {
                                                return (
                                                    <div className="col-xl-4 xl-50" key={i}>
                                                        <div className="browse-articles">
                                                            <h6>
                                                                <span><Archive />{data.inspantitle}</span>{data.title}

                                                            </h6>
                                                            <ul>
                                                                <li><a  href='#javascript'><span><FileText/></span><span>{data.text1}</span><span className='badge badge-primary pull-right'>{data.text1_badge}</span></a></li>
                                                                <li><a  href='#javascript'><span><FileText/></span>{data.text2}<span className='badge badge-primary pull-right'>{data.text2_badge}</span></a></li>
                                                                <li><a  href='#javascript'><span><FileText/></span>{data.text3}<span className='badge badge-primary pull-right'>{data.text3_badge}</span></a></li>
                                                                <li><a  href='#javascript'><span><FileText/></span>{data.text4}<span className='badge badge-primary pull-right'>{data.text4_badge}</span></a></li>
                                                                <li><a  href='#javascript'><span><ArrowRight/></span>{data.text5}</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )
                                            }) :
                                                <img className="img-fluid" src={errorImg} alt="" />
                                            }
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
                                        <h6> {WebDesign}</h6>
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
                                        <h6> {UXDesign}</h6>
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
        </Fragment>
    );
};

export default KnowledgebaseComponent;