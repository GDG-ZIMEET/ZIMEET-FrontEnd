import { publicAxios } from "api/axiosConfig";

export const checkDuplicateNumber = async (studentNumber, phoneNumber, setStudentNumberError, setPhoneNumberError) => {
  try {
    setStudentNumberError('');
    setPhoneNumberError('');

    // 학번 중복 검사
    const { data: studentData } = await publicAxios.get(`/user/check/student-number?value=${studentNumber}`);

    if (studentData.data.duplicated) {
      setStudentNumberError(studentData.data.message || "이미 사용 중인 학번입니다.");
      return false;
    }

    // 전화번호 중복 검사
    const { data: phoneData } = await publicAxios.get(`/user/check/phone-number?value=${phoneNumber}`);

    if (phoneData.data.duplicated) {
      setPhoneNumberError(phoneData.data.message || "이미 사용 중인 전화번호입니다.");
      return false;
    }

    return true; 
    
  } catch (error) {
    console.error("중복 체크 오류:", error);
    setStudentNumberError("중복 체크 중 오류가 발생했습니다.");
    setPhoneNumberError("중복 체크 중 오류가 발생했습니다.");
    return false;
  }
};
