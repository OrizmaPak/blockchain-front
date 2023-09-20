import { toast } from 'react-toastify';


export const callModal =(message="Loading...", status=3, id='', isLoading=false, time=5000)=> {
    if(!id){
        if(status == 3)return toast(message, {
        position: "top-right",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    if(status == 2)return toast.warn(message, {
        position: "top-right",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    if(status == 1)return toast.success(message, {
        position: "top-right",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    if(status == 0)return toast.error(message, {
        position: "top-right",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    if(id){
        if(status == 3)return toast.update(id, { render: message, type: "info", isLoading: isLoading, autoClose: time });
        if(status == 2)return toast.update(id, { render: message, type: "warning", isLoading: isLoading, autoClose: time });
        if(status == 1)return toast.update(id, { render: message, type: "success", isLoading: isLoading, autoClose: time });
        if(status == 0)return toast.update(id, { render: message, type: "error", isLoading: isLoading, autoClose: time });
    }
}

