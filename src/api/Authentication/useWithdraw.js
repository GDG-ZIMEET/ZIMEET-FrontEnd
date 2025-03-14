import { useResetRecoilState, useSetRecoilState } from "recoil";
import { authState } from "recoil/state/authState";
import { privateAxios } from "api/axiosConfig"; 
import { disconnectWebSocket } from "api/Chatting/WebSocketchat";

const useWithdraw = () => {
  const resetAuthState = useResetRecoilState(authState);
  const setAuthState = useSetRecoilState(authState);

  const handleWithdraw = async () => {
    try {
      
      await privateAxios.delete("/user/withdraw");

      resetAuthState();
      setAuthState({ userId: null, isAuthorized: false });

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("tokenExpiration");
      localStorage.removeItem("authState");
      sessionStorage.clear();


      // 웹푸시 구독 해제 (OneSignal)
      // if (window.OneSignal) {
      //   window.OneSignal.removeExternalUserId();
      //   window.OneSignal.setSubscription(false);
      // }


      await disconnectWebSocket();


      alert("회원탈퇴가 완료되었습니다.");
      window.location.href = "/";

    } catch (error) {
      console.error(
        "회원탈퇴 실패:",
        error.response?.data?.message || "서버와의 연결이 원활하지 않습니다. 다시 시도해주세요."
      );
    }
  };

  return handleWithdraw;
};

export default useWithdraw;
