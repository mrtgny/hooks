import {useCallback, useEffect, useState} from 'react';
import useAuthorize from "../../hooks/useAuthorize";

const Authorized = props => {
    const {type, params, onAuthorizeChange: _onAuthorizeChange, children} = props;
    const [isAuthorized, setIsAuthorized] = useState(false);

    const {
        canEditCustomerProfile,
        canEditCompanyProfile,
        canEditStoreProfile,

        canSeeStoreCollaborators,

        canChangeCompanyAccount,
        canChangeStoreAccount,

        canLogoutCustomer,
        canLogoutCompany,
        canLogoutStore
    } = useAuthorize({params})
    const onAuthorizeChange = useCallback((isAuthorized) => {
        setIsAuthorized(isAuthorized)
    }, [setIsAuthorized])

    useEffect(() => {
        if (_onAuthorizeChange) {
            _onAuthorizeChange(isAuthorized)
        }
    }, [isAuthorized, _onAuthorizeChange])

    useEffect(() => {
        switch (type) {
            case 'customer-profile':
                if (canEditCustomerProfile) {
                    onAuthorizeChange(true)
                } else {
                    onAuthorizeChange(false)
                }
                break;
            case 'company-profile':
                if (canEditCompanyProfile) {
                    onAuthorizeChange(true)
                } else {
                    onAuthorizeChange(false)
                }
                break;
            case 'store-profile':
                if (canEditStoreProfile) {
                    onAuthorizeChange(true)
                } else {
                    onAuthorizeChange(false)
                }
                break;

            case 'store-collaborators':
                if (canSeeStoreCollaborators) {
                    onAuthorizeChange(true)
                } else {
                    onAuthorizeChange(false)
                }
                break;

            case 'company-change-account':
                if (canChangeCompanyAccount) {
                    onAuthorizeChange(true)
                } else {
                    onAuthorizeChange(false)
                }
                break;
            case 'store-change-account':
                if (canChangeStoreAccount) {
                    onAuthorizeChange(true)
                } else {
                    onAuthorizeChange(false)
                }
                break;

            case 'customer-logout':
                if (canLogoutCustomer) {
                    onAuthorizeChange(true)
                } else {
                    onAuthorizeChange(false)
                }
                break;
            case 'company-logout':
                if (canLogoutCompany) {
                    onAuthorizeChange(true)
                } else {
                    onAuthorizeChange(false)
                }
                break;
            case 'store-logout':
                if (canLogoutStore) {
                    onAuthorizeChange(true)
                } else {
                    onAuthorizeChange(false)
                }
                break;
            default:
                onAuthorizeChange(true)
        }
    }, [
        type,
        canEditCustomerProfile,
        canEditCompanyProfile,
        canEditStoreProfile,
        canSeeStoreCollaborators,
        canChangeCompanyAccount,
        canChangeStoreAccount,
        canLogoutCustomer,
        canLogoutCompany,
        canLogoutStore,
        onAuthorizeChange
    ])

    if (isAuthorized)
        return children;
    return null;
}

export default Authorized;
