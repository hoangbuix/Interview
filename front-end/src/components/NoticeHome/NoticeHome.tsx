import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import "./NoticeHome.style.scss";



interface Props {
    toastsArray: [];
    children?: ReactNode
}

const ToastNotice: React.FC<Props> = ({ toastsArray }) => {
    const [state, setState] = useState<any>(toastsArray);

    let positionMap = {
        1: 'top-left',
        2: 'top-right',
        3: 'bottom-right',
        4: 'bottom-left',
    }



    const addToast = (toastObject: {}) => {
        toastObject && setState((toastsArray: any) => {
            return { toastsArray: toastsArray.push(toastObject) }
        })
    }

    const removeToast = (index: number | string) => {
        setState((toastsArray: any) => {
            const current = toastsArray.get(index)
            current.isDeleted = true
            return { toastsArray: toastsArray.set(index, current) }
        })

        setTimeout(() => {
            setState((toastsArray: any) => {
                return { toastsArray: toastsArray.delete(index) }
            })
        }, 2000)
    }


    const clearAllToast = () => {

    }

    const position = positionMap || 'top-right'

    return (
        <>
            <div className={'toast-notification-panel ' + position}>
                {state?.map((toast: string | any, index: number) => {
                    return (
                        <ToastWrapper index={index} key={index} icon={toast.icon} title={toast.title} message={toast.message} isDeleted={toast.isDeleted} onClickToast={removeToast} />
                    )
                })}
            </div>
        </>
    )
};

interface PropToastWrapper {
    index: number;
    icon: string;
    title: string;
    message: string;
    isDeleted: any;
    onClickToast: any;
}
const ToastWrapper: React.FC<PropToastWrapper> = ({ index, icon, title, message, isDeleted, onClickToast }) => {
    return (
        <div className={'toast-wrapper ' + icon + ' ' + (isDeleted && 'toast-out')}
            onClick={() => onClickToast(index)}>
            <div className="toast">
                <div className="toast-header">{title}</div>
                <div className="toast-text">{message}</div>
            </div>
        </div>
    )
}

export default ToastNotice;