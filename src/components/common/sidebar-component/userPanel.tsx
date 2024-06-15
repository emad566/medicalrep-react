import { Fragment, useEffect, useState } from 'react';
import { Edit } from 'react-feather';
import AppCaches from "../../../constant/AppCaches";
import { toast } from 'react-toastify';
import Routes from '../../../constant/Routes';
import { Link } from 'react-router-dom';
import AppPaths from '../../../constant/AppPaths';
import { apiGet } from '../../../api/http';

const UserPanel = () => {
    const [logoUrl, setLogoUrl] = useState<any>('');

    const getLogoUrl = async () => {
        const responseJson = await apiGet(
            Routes.profile
        );
        if (responseJson.status) {
            setLogoUrl(responseJson.data.profile_path);
            localStorage.setItem(AppCaches.logoUrl, responseJson.data.profile_path);

        } else {
            toast.error('API conection error');
        }
    }

    useEffect(() => {
        getLogoUrl();
    }, [])

    return (
        <Fragment>
            <div className="sidebar-user text-center" >
                <div >
                    <img style={{ width: '20px !important', height: '20px !important' }} className=" lazyloaded blur-up" src={logoUrl} alt="#" />
                    <div className="profile-edit">
                        {/* <Link to={`${AppPaths.userProfile}`}> */}
                            <Edit />
                        {/* </Link> */}
                    </div>
                </div>
                <h6 className="mt-3 f-14">{localStorage.getItem(AppCaches.loginName)}</h6>
                <p>{localStorage.getItem(AppCaches.role)}</p>
            </div>
        </Fragment>
    );
};

export default UserPanel;