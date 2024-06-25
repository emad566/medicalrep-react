import { Fragment, useEffect, useState } from 'react';
import { Edit } from 'react-feather';
import AppCaches from "../../../constant/AppCaches";
import { toast } from 'react-toastify';
import Routes from '../../../constant/Routes';
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
                    <img className="lazyloaded blur-up" src={logoUrl} alt="#" width="100" height="100" />
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