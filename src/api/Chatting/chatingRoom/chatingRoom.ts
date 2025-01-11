//사용자는 teamid로 서버에 방 생성 요청을 보낸다
//서버는 요청받으면 teamid, 사용자id, 여러 다른 사용자id로 방을 생성
//방 생성 성공시 roomId를 반환한다

// export const postNewChatRoom = async (
//     token: string | null,
//     productId: string,
//   ) => {
//     try {
//       const res = await axiosInstanceWithBearer.post(
//         `/chat/room/create`,
//         {
//           productId: productId,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );
//       return res.data.data.roomId;
//     } catch (error) {
//       console.error('방 생성 에러:', error);
//     }
//   };

export {};

