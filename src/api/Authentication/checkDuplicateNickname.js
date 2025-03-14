import { publicAxios } from "api/axiosConfig";

export const checkDuplicateNickname = async (nickname, setNicknameError) => {
  try {

    const { data: nicknameData } = await publicAxios.get(`/user/check/nickname?value=${nickname}`);

    if (nicknameData.data.duplicated) { 
      setNicknameError("이미 사용 중인 닉네임입니다.");
      return false;
    }


    return true;  
    
  } catch (error) {
    console.error("중복 체크 오류:", error);
    alert("중복 체크 중 오류가 발생했습니다.");
    return false;
  }
};
