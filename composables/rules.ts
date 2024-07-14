export const useFormRules = (required?: boolean) => {
  return {
    text: [
      (value: string) => {
        if (value.length > 3) return true;
        return "فیلد اجباری را پر کنید";
      },
    ],
    email: [
      (value: string) => {
        if (value.length >= 0) {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "فرمت ایمیل صحیح نیست";
        }
      },
    ],
    phone: [
      (value: string) => {
        if (value.length >= 0) {
          return (
            (value?.length === 11 && /[0-9-]+/.test(value) && /^09\d{9}$/.test(value)) ||
            (/[۰-۹-]+/.test(value) && /^۰۹[۰-۹]{9}$/.test(value)) ||
            "شماره تلفن را به درستی وارد کنید"
          );
        } else if (required) {
          return "فیلد اجباری را پر کنید";
        } else {
          return;
        }
      },
    ],
    website: [
      (value: string) => {
        if (value.length > 0) {
          const pattern =
            /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/;
          return pattern.test(value) || "فرمت سایت صحیح نیست";
        }
        return "فیلد اجباری را پر کنید";
      },
    ],
    radio: [(value: any) => !!value || "فیلد اجباری را پر کنید"],
  };
};
