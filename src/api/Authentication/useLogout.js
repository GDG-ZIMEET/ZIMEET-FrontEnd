import { useResetRecoilState, useSetRecoilState } from "recoil";
import { authState } from "recoilStores/state/authState";
import { privateAxios } from "api/axiosConfig"; 
import { disconnectWebSocket } from "api/Chatting/WebSocketchat";

const useLogout = () => {
  const resetAuthState = useResetRecoilState(authState);
  const setAuthState = useSetRecoilState(authState);

  const handleLogout = async () => {
    try {

      await privateAxios.delete("/user/logout");
      resetAuthState();
      setAuthState({ userId: null, isAuthorized: false });
      
      // 웹푸시 
      // if (window.OneSignal) {
      //   window.OneSignal.getUserId().then(async (userId) => {
      //     if (userId) {
      //       console.log("🚀 OneSignal 태그 업데이트: logged_out = true");
      //       await window.OneSignal.sendTags({ logged_out: "true" });
      //     }
      //   });
      // }

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("tokenExpiration");
      localStorage.removeItem("authState");
      sessionStorage.clear();


      await disconnectWebSocket();

      window.location.href = "/";

    } catch (error) {
      console.error(
        "로그아웃 실패:",
        error.response?.data?.message || "서버와의 연결이 원활하지 않습니다. 다시 시도해주세요."
      );
    }
  };

  return handleLogout;
};

export default useLogout;
