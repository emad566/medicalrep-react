import React, { Fragment } from 'react';
import man from '../../../assets/images/dashboard/user.png'
import { Link } from 'react-router-dom';
import { Edit } from 'react-feather';
import {ELANA,GeneralManager} from '../../../constant'
import AppCaches from "../../../constant/AppCaches";

const UserPanel = () => {

    const url = '';
    const loginData = JSON.parse(localStorage.getItem(AppCaches.loginData))

    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <div>
                    <img className="img-60 rounded-circle lazyloaded blur-up" width={100}  src={loginData?.image} alt="#" />
                    <div className="profile-edit">
                        <Link to={`${process.env.PUBLIC_URL}/users/userEdit`}>
                            <Edit />
                        </Link>
                    </div>
                </div>
                <h6 className="mt-3 f-14">{localStorage.getItem(AppCaches.loginName)}</h6>
                <p>{GeneralManager}.</p>
            </div>
        </Fragment>
    );
};

export default UserPanel;