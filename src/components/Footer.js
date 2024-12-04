import {
  APP_PLAYSTORE_IMAGE_URL,
  APP_APPSTORE_IMAGE_URL,
  PLAYSTORE_PAGE_URL,
  APPSTORE_PAGE_URL,
} from "../utils/constants";

const Footer = () => {
  const openPlayStore = () => {
    window.open(PLAYSTORE_PAGE_URL, "_blank");
  };

  const openAppStore = () => {
    window.open(APPSTORE_PAGE_URL, "_blank");
  };

  return (
    <div className="flex items-center justify-center bg-slate-100 py-6 border border-t-slate-700">
      <div className="font-extrabold text-zinc-600 mr-6 ">
        For better experience, download the Swiggy app now
      </div>
      <div className="flex gap-4 ">
        <img
          className="h-12 cursor-pointer"
          src={APP_PLAYSTORE_IMAGE_URL}
          alt="Google Play"
          onClick={openPlayStore}
        />
        <img
          className="h-12 cursor-pointer"
          src={APP_APPSTORE_IMAGE_URL}
          alt="App Store"
          onClick={openAppStore}
        />
      </div>
    </div>
  );
};

export default Footer;
