import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const configure = () => toast.configure()

export const notify: (a:string, b:string) =>void = (msg:string, status:string) => {
	if(status == "warn"){
		toast.warn(msg, {position: toast.POSITION.TOP_CENTER, toastId: "warn"})
	}else if (status == "success"){
		toast.success(msg, {position: toast.POSITION.TOP_CENTER, toastId: "success"})
	}else if(status == "error"){
		toast.error(msg, { position: toast.POSITION.TOP_CENTER, toastId: "error"})
	}
}
