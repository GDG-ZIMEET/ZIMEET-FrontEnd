import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { MyProfileState } from 'recoilStores/state/Meeting/MyProfileState';
import { getmyProfile } from 'api/Meeting/GetMyprofile';
import { MyProfileType } from 'recoilStores/type/Meeting/MyProfile';

const AppInitializer = () => {
  const setMyProfile = useSetRecoilState(MyProfileState);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getmyProfile();
        if (profile) {
          const userProfile: MyProfileType = profile.data;
          setMyProfile(userProfile);
        }
      } catch (err) {
        console.error('세션 불러오기 실패:', err);
      }
    };

    fetchProfile();
  }, [setMyProfile]);

  return null;
};

export default AppInitializer;
