import { axiosIns } from '@/plugins/axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { serialize } from 'object-to-formdata';
import Swal from 'sweetalert2';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/App';

interface NotificationsType {
  error?: string | boolean;
  confirm?: SweetAlertOptions | boolean;
  success?: string | boolean;
}

interface paramsType {
  [param: string]: any;
}

const defaultSerializerOptions = {
  indices: true,
  dotsForObjectNotation: true,
  noFilesWithArrayNotation: true,
};

const defaultPostNotifications: NotificationsType = {
  confirm: false,
  success: false,
  error: true,
};

const defaultGetNotification: NotificationsType = {
  confirm: false,
  success: false,
  error: true,
};

const defaultDeleteNotification: NotificationsType = {
  confirm: {
    text: 'سيتم حذف العنصر المحدد .. هل انت متأكد ؟',
    icon: 'warning',
    confirmButtonText: 'نعم',
    denyButtonText: 'تراجع',
  },
  error: true,
  success: 'تم الحذف بنجاح',
};

export const useApi = () => {
  const toast = useToast();

  const handleErrorMessage = (response: AxiosResponse<any>) => {
    console.log(response);
    if (response.data && response.data.status === 'error') {
      toast.error(response.data.error.message);
    }
  };

  const GET = async <T>(
    url: string,
    params?: paramsType,
    notifications: NotificationsType = defaultGetNotification,
    config?: AxiosRequestConfig
  ) => {
    try {
      const response = await axiosIns.get<T>(url, { params, ...config });
      if (response.status === 401) {
        const router = useRouter();
        localStorage.clear();
        router.push('/login');
      }
      if (response.data.status === 'error') {
        handleErrorMessage(response);
      } else {
        return { ...response, data: response.data as T };
      }
    } catch (error) {
      if (notifications.error === true && error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error.message);
        handleErrorMessage(error.response);
      }
      // Add handling for other cases if needed
    }
  };

  const POST = async <ResT, ReqT>(
    url: string,
    body: ReqT,
    notifications: NotificationsType = defaultPostNotifications,
    config: AxiosRequestConfig & { formData?: boolean } = {}
  ) => {
    try {
      let response;
      if (config.formData) {
        response = await axiosIns.post<ReqT, AxiosResponse<ResT>, FormData>(
          url,
          serialize(body, defaultSerializerOptions),
          {
            ...config,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      } else {
        response = await axiosIns.post<ReqT, AxiosResponse<ResT>, ReqT>(url, { ...body }, { ...config });
      }
      if (notifications.success && response.status === 200) {
        if (typeof notifications.success === 'string') toast.success(notifications.success);
        else toast.success('success');
      }
      if (response.data.status === 'error') {
        handleErrorMessage(response);
      }
      return response;
    } catch (error) {
      console.log(error);
    
      if (error.response && error.response.status !== 401) {
        if (notifications.error === true && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error.message);
          handleErrorMessage(error.response);
        }
      } else if (error.response && error.response.status === 401) {
        localStorage.clear();
        window.location.href = 'login';
      }


        
  
    }
  };

  const DELETE = async (
    url: string,
    body: any,
    params?: paramsType,
    notifications: NotificationsType = defaultDeleteNotification,
    config?: AxiosRequestConfig
  ) => {
    return new Promise((resolve, reject) => {
      console.log('Delete API', notifications);
      if (notifications.confirm && typeof notifications.confirm === 'object') {
        console.log('Has Confirm');
        Swal.fire({
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          ...notifications.confirm,
        }).then((result) => {
          if (result.isConfirmed) {
            axiosIns
              .delete(url, { params, ...config, data: body })
              .then((res) => {
                if (res.status === 200 && typeof notifications.success === 'string') toast.success(notifications.success);
                resolve(res);
              })
              .catch((er) => {
                console.log('Error Catched');
                if (typeof notifications.error === 'boolean' || typeof notifications.error === 'string')
                  handleErrorMessage(er, notifications.error);
                reject(er);
              });
          }
        });
      } else {
        axiosIns
          .delete(url, { ...params, ...config })
          .then((res) => {
            if (res.status === 200 && typeof notifications.success === 'string') toast.success(notifications.success);
            resolve(res);
          })
          .catch((er) => {
            if (typeof notifications.error === 'boolean' || typeof notifications.error === 'string')
              handleErrorMessage(er, notifications.error);
            reject(er);
          });
      }
    });
  };

  return {
    GET,
    POST,
    DELETE,
  };
};
