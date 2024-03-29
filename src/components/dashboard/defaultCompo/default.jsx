import React, { useEffect, Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { DollarSign, Tag, ShoppingBag, MessageCircle, MinusCircle, ThumbsUp, MessageSquare, Briefcase, MoreHorizontal, Send, Activity, Anchor, Compass, Cpu, Slack, Umbrella, Box, Book } from "react-feather";
import Chart from "react-apexcharts";
import { calcultionData } from "../../../data/default";
// import ChartistGraph from 'react-chartist';
import EventCharts from "./eventCharts";
import configDB from "../../../data/customizer/config";
import {
  New,
  NewSale,
  NewMessage,
  NewVisits,
  TotalProfit,
  AllCustomIncome,
  All,
  TotalInvestment,
  TotalReview,
  CustomerReview,
  Change,
  Online,
  MarshiKisteen,
  Dashboard,
  Ui,
  Xi,
  Message,
  Portfolio,
  NewUser,
  Month,
  Today,
  NickStone,
  Follow,
  WiltorNoice,
  NewReport,
  TotalFeedback,
  MilanoEsco,
  AnnaStrong,
  RecentNotification,
  Order,
  Download,
  Trash,
  ByKan,
  ByKaint,
  ByTailer,
  ByWaiter,
  ByComman,
  Calculation,
  TotalIncome,
  TotalLoss,
  Conversations,
  View,
  Media,
  Search,
  SellingUpdate,
  Shipping,
  Purchase,
  TotalSell,
  Feedback,
  ByCall,
  Activitys,
} from "../../../constant";

var Knob = require("knob"); // browserify require
var primary = localStorage.getItem("primary_color") || configDB.data.color.primary_color;

const Default = () => {
  useEffect(() => {
    var profit = Knob({
      value: 35,
      left: 1,
      angleOffset: 90,
      className: "review",
      thickness: 0.2,
      width: 270,
      height: 270,
      fgColor: primary,
      readOnly: false,
      dynamicDraw: false,
      tickColorizeValues: true,
      bgColor: "#f6f7fb",
      lineCap: "round",
      displayPrevious: true,
    });
    document.getElementById("profit").appendChild(profit);
  }, []);
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Default" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-8 xl-100">
            <div className="row">
              <EventCharts />
            </div>
          </div>
          <div className="col-xl-4 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>{Activitys}</h5>
              </div>
              <div className="card-body activity-scroll">
                <div className="activity">
                  <div className="d-flex">
                    <div className="flex-shrink-0 gradient-round m-r-30 gradient-line-1">
                      <ShoppingBag />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        {NewSale} <span className="pull-right f-14">{New}</span>
                      </h6>
                      <p>{"Sales promotions can be announced over free channels like social media, email, or your website or they can be the focal point."}</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 gradient-round m-r-30 gradient-line-1">
                      <MessageCircle />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        {NewMessage} <span className="pull-right f-14">{"14m Ago"}</span>
                      </h6>
                      <p>{"How do I get the notification bar to show the content of the message instead of the words 'new message'?"}</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 gradient-round m-r-30 small-line">
                      <MinusCircle />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        {NewReport} <span className="pull-right f-14">{"14m Ago"}</span>
                      </h6>
                      <p className="activity-xl">{"Introducing the Widely Viewed Content Report"}</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 gradient-round m-r-30 gradient-line-1">
                      <ShoppingBag />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        {NewSale} <span className="pull-right f-14">{"14m Ago"}</span>
                      </h6>
                      <p>{"A sales promotion is any undertaking by an organization designed to increase sales or encourage the use or trial."}</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 gradient-round m-r-30 medium-line">
                      <Tag />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        {NewVisits} <span className="pull-right f-14">{"14m Ago"}</span>
                      </h6>
                      <p>{"Identify what content people are connecting with on their first visit, and promote that content."}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 xl-50">
            <div className="card">
              <div className="card-header">
                <h5>{TotalProfit}</h5>
                <span className="d-block fonts-dashboard">{AllCustomIncome}</span>
              </div>
              <div className="card-body">
                <div className="knob-block text-center">
                  <div className="knob" id="profit"></div>
                </div>
                <div className="show-value d-flex">
                  <div className="value-left">
                    <div className="square bg-primary d-inline-block"></div>
                    <span>{TotalProfit}</span>
                  </div>
                  <div className="value-right">
                    <div className="square bg-light d-inline-block"></div>
                    <span>{TotalInvestment}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 xl-50 col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body progress-media">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <h5>{TotalReview}</h5>
                        <span className="mb-0 d-block">{CustomerReview}</span>
                      </div>
                      <ThumbsUp />
                    </div>
                    <div className="progress-bar-showcase">
                      <div className="progress sm-progress-bar">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="progress-change">
                      <span>{Change}</span>
                      <span className="pull-right">{"95%"}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body progress-media">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <h5>{TotalFeedback}</h5>
                        <span className="mb-0 d-block">{Feedback}</span>
                      </div>
                      <MessageCircle />
                    </div>
                    <div className="progress-bar-showcase">
                      <div className="progress sm-progress-bar">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="progress-change">
                      <span>{Change}</span>
                      <span className="pull-right">{"85%"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 xl-100 col-md-12">
            <div className="card user-card">
              <div className="card-body">
                <div className="online-user">
                  <h5 className="font-primary f-18 mb-0">{Online}</h5>
                </div>
                <div className="user-card-image">
                  <img className="img-fluid rounded-circle image-radius" src={require("../../../assets/images/dashboard/designer.jpg")} alt="" />
                </div>
                <div className="user-deatils text-center">
                  <h5>{MarshiKisteen}</h5>
                  <h6 className="mb-0">{"marshikisteen@gmail.com"}</h6>
                </div>
                <div className="user-badge text-center">
                  <a className="badge rounded-pill badge-light" href="#javascript">
                    {Dashboard}
                  </a>
                  <a className="badge rounded-pill badge-light" href="#javascript">
                    {Ui}
                  </a>
                  <a className="badge rounded-pill badge-light" href="#javascript">
                    {Xi}
                  </a>
                  <a href="#javascript">
                    <span className="badge rounded-pill badge-light active">{"2+"}</span>
                  </a>
                </div>
                <div className="card-footer row pb-0 text-center">
                  <div className="col-6">
                    <div className="d-flex user-footer">
                      <MessageSquare className="m-r-10" />
                      <h6 className="f-18 mb-0">{Message}</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex user-footer">
                      <Briefcase className="m-r-10" />
                      <h6 className="f-18 mb-0">{Portfolio}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card height-equal" style={{ minHeight: "507px" }}>
              <div className="card-header card-header-border">
                <div className="row">
                  <div className="col-sm-6">
                    <h5>{NewUser}</h5>
                  </div>
                  <div className="col-sm-6">
                    <div className="pull-right right-header">
                      <span>{Month}</span>
                      <span>
                        <button className="btn btn-primary btn-pill">{Today}</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="new-users">
                  <div className="d-flex align-items-start">
                    <img className="rounded-circle image-radius m-r-15" src={require("../../../assets/images/user/2.png")} alt="" />
                    <div className="flex-grow-1">
                      <h6 className="mb-0 f-w-700">{NickStone}</h6>
                      <p>{"Visual Designer, Github Inc"}</p>
                    </div>
                    <span className="pull-right">
                      <button className="btn btn-pill btn-outline-light">{Follow}</button>
                    </span>
                  </div>
                  <div className="d-flex align-items-start">
                    <img className="rounded-circle image-radius m-r-15" src={require("../../../assets/images/user/5.jpg")} alt="" />
                    <div className="flex-grow-1">
                      <h6 className="mb-0 f-w-700">{MilanoEsco}</h6>
                      <p>{"Visual Designer, Github Inc"}</p>
                    </div>
                    <span className="pull-right">
                      <button className="btn btn-pill btn-outline-light">{Follow}</button>
                    </span>
                  </div>
                  <div className="d-flex align-items-start">
                    <img className="rounded-circle image-radius m-r-15" src={require("../../../assets/images/user/3.jpg")} alt="" />
                    <div className="flex-grow-1">
                      <h6 className="mb-0 f-w-700">{WiltorNoice}</h6>
                      <p>{"Visual Designer, Github Inc"}</p>
                    </div>
                    <span className="pull-right">
                      <button className="btn btn-pill btn-outline-light">{Follow}</button>
                    </span>
                  </div>
                  <div className="d-flex align-items-start mb-0">
                    <img className="rounded-circle image-radius m-r-15" src={require("../../../assets/images/user/4.jpg")} alt="" />
                    <div className="flex-grow-1">
                      <h6 className="mb-0 f-w-700">{AnnaStrong}</h6>
                      <p>{"Visual Designer, Github Inc"}</p>
                    </div>
                    <span className="pull-right">
                      <button className="btn btn-pill btn-outline-light">{Follow}</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card height-equal">
              <div className="card-header card-header-border">
                <div className="row">
                  <div className="col-sm-7">
                    <h5>{RecentNotification}</h5>
                  </div>
                  <div className="col-sm-5">
                    <div className="pull-right right-header">
                      <div className="onhover-dropdown">
                        <button className="btn btn-primary btn-pill" type="button">
                          {All}{" "}
                          <span className="pe-0">
                            <i className="fa fa-angle-down"></i>
                          </span>
                        </button>
                        <div className="onhover-show-div right-header-dropdown">
                          <a className="d-block" href="#javascript">
                            {Order}
                          </a>
                          <a className="d-block" href="#javascript">
                            {Download}
                          </a>
                          <a className="d-block" href="#javascript">
                            {Trash}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body recent-notification">
                <div className="d-flex">
                  <h6>{"09:00"}</h6>
                  <div className="flex-grow-1">
                    <span>{"Through the medium of Push Notifications."}</span>
                    <p className="f-12">{ByKan}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <h6>{"10:50"}</h6>
                  <div className="flex-grow-1">
                    <span>{"Lorem ipsum."}</span>
                    <p className="f-12">{ByTailer}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <h6>{"01:00"}</h6>
                  <div className="flex-grow-1">
                    <span>{"funny and creative push notifications are ” in.”"}</span>
                    <p className="f-12">{ByKaint}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <h6>{"05:00"}</h6>
                  <div className="flex-grow-1">
                    <span>{"enjoy will make them look to hearing from you!"}</span>
                    <p className="f-12">{ByCall}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <h6>{"12:00"}</h6>
                  <div className="flex-grow-1">
                    <span>{"help you achieve the desired results."}</span>
                    <p className="f-12">{ByWaiter}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <h6>{"08:20"}</h6>
                  <div className="flex-grow-1">
                    <span>{"or sharing an updated customer policy."}</span>
                    <p className="f-12">{ByComman}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{Calculation}</h5>
              </div>
              <div className="card-body">
                <div className="show-value-top d-flex">
                  <div className="value-left d-inline-block">
                    <div className="square bg-primary d-inline-block"></div>
                    <span>{TotalIncome}</span>
                  </div>
                  <div className="value-right d-inline-block">
                    <div className="square d-inline-block bg-smooth-chart"></div>
                    <span>{TotalLoss}</span>
                  </div>
                </div>
                <div className="ct-svg">
                  <Chart options={calcultionData.options} series={calcultionData.series} height="300" type="area" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 xl-100">
            <div className="card">
              <div className="card-header card-header-border chat-header-default">
                <div className="row">
                  <div className="col-sm-6">
                    <h5>{Conversations}</h5>
                  </div>
                  <div className="col-sm-6">
                    <div className="right-header pull-right m-t-5">
                      <div className="onhover-dropdown">
                        <MoreHorizontal />
                        <div className="onhover-show-div right-header-dropdown more-dropdown">
                          <a className="d-block" href="#javascript">
                            {View}
                          </a>
                          <a className="d-block" href="#javascript">
                            {Media}
                          </a>
                          <a className="d-block" href="#javascript">
                            {Search}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body chat-box dashboard-chat">
                <div className="chat">
                  <div className="d-flex left-side-chat align-items-start">
                    <img className="rounded-circle chat-user-img img-60 m-r-20" src={require("../../../assets/images/user/4.jpg")} alt="" />
                    <div className="flex-grow-1">
                      <div className="message-main">
                        <p className="mb-0">{"Are we meeting today? Project has been already finished and I have results to show you."} </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex right-side-chat align-items-start">
                    <div className="flex-grow-1 text-end">
                      <div className="message-main">
                        <p className="pull-right">{"Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so?"}</p>
                        <div className="clearfix"></div>
                      </div>
                      <div className="sub-message message-main">
                        <p className="pull-right mb-0">{"Well I am not sure. The rest of the team"} </p>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <img className="rounded-circle chat-user-img img-60 m-l-20" src={require("../../../assets/images/user/5.jpg")} alt="" />
                  </div>
                  <div className="d-flex left-side-chat align-items-start">
                    <img className="rounded-circle chat-user-img img-60 m-r-20" src={require("../../../assets/images/user/4.jpg")} alt="" />
                    <div className="flex-grow-1">
                      <div className="message-main">
                        <p>{"Actually everything was fine. I'm very excited to show this to our team."}</p>
                      </div>
                      <div className="sub-message message-main smiley-bg">
                        <img src={require("../../../assets/images/dashboard/smily.png")} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex chat-footer bg-primary">
                <i className="icon-face-smile"></i>
                <div className="flex-grow-1">
                  <input className="form-control" type="text" placeholder="Type your message" required="" />
                </div>
                <Send />
              </div>
            </div>
          </div>
          <div className="col-xl-5 xl-100">
            <div className="card">
              <div className="card-header card-header-border">
                <div className="row">
                  <div className="col-sm-6">
                    <h5 className="align-abjust">{SellingUpdate}</h5>
                  </div>
                  <div className="col-sm-6">
                    <div className="pull-right right-header">
                      <div className="onhover-dropdown">
                        <button className="btn btn-primary btn-pill" type="button">
                          {All}{" "}
                          <span className="pe-0">
                            <i className="fa fa-angle-down"></i>
                          </span>
                        </button>
                        <div className="onhover-show-div right-header-dropdown">
                          <a className="d-block" href="#javascript">
                            {Shipping}
                          </a>
                          <a className="d-block" href="#javascript">
                            {Purchase}
                          </a>
                          <a className="d-block" href="#javascript">
                            {TotalSell}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="selling-update text-center">
                      <Activity />
                      <h5 className="mb-0 f-18">{"+500"}</h5>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="selling-update text-center">
                      <Anchor />
                      <h5 className="mb-0 f-18">{"+120"}</h5>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="selling-update text-center">
                      <Box />
                      <h5 className="mb-0 f-18">{"-410"}</h5>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="selling-update text-center">
                      <Book />
                      <h5 className="mb-0 f-18">{"-155"}</h5>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="selling-update text-center">
                      <Compass />
                      <h5 className="mb-0 f-18">{"+920"}</h5>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="selling-update text-center">
                      <Cpu />
                      <h5 className="mb-0 f-18">{"+500"}</h5>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="selling-update text-center mb-0 xs-mb-selling">
                      <DollarSign />
                      <h5 className="mb-0 f-18">{"+500"}</h5>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="selling-update text-center mb-0 xs-mb-selling">
                      <Slack />
                      <h5 className="mb-0 f-18">{"+120"}</h5>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="selling-update text-center mb-0">
                      <Umbrella />
                      <h5 className="mb-0 f-18">{"-410"}</h5>
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

export default Default;
