import React from 'react';
import * as S from './Styles';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Common/Header/Header/Header';

const NotionMain: React.FC = () => {
    const { pathname } = useLocation();
    let component;
    let headerTitle:string = "";

    switch (pathname) {
        case '/notion/randomMeetingHelp':
            headerTitle = "랜덤미팅 도움말"
            component = (
                <iframe src="https://efficacious-ease-5ad.notion.site/ebd/1a54f19e53cc80cdb5f5d25888cd8dd0" 
                        width="100%" 
                        height="900" />
            );
            break;
        case '/notion/personalInfoPolicy':
            headerTitle = "개인정보처리방침";
            component = (
                <iframe src="https://efficacious-ease-5ad.notion.site/ebd/8354f10378484de4b004cdbd2a31eab0" 
                        width="100%" 
                        height="900" />
            );
            break;
        case '/notion/termsOfService':
            headerTitle = "이용약관";
            component = (
                <iframe src="https://efficacious-ease-5ad.notion.site/ebd/1a54f19e53cc808ba060d7d16a306fef" 
                        width="100%" 
                        height="900" />
            );
            break;
        case '/notion/faq':
            headerTitle = "자주 묻는 질문";
            component = (
                <iframe src="https://efficacious-ease-5ad.notion.site/ebd/1974f19e53cc80bea925d6a5879ccd81" 
                        width="100%" 
                        height="900" />
            );
            break;
        case '/notion/notificationSetting':
            headerTitle = "알림 설정하는 법";
            component = (
                <iframe src="https://efficacious-ease-5ad.notion.site/ebd/1a54f19e53cc808fa6c1d7039d83d047" 
                        width="100%" 
                        height="900" />
            );
            break;
        case '/notion/meetingGuide':
            headerTitle = "미팅 잘하는 법";
            component = (
                <iframe src="https://efficacious-ease-5ad.notion.site/ebd/cda2ace51cca4000b25ad29f3be094a6" 
                        width="100%" 
                        height="900" />
            );
            break;
        case '/notion/randomMeetingGuide':
            headerTitle = "랜덤미팅 참여 방법";
            component = (
                <iframe src="https://efficacious-ease-5ad.notion.site/ebd/1a54f19e53cc80cdb5f5d25888cd8dd0" 
                        width="100%" 
                        height="900" />
            );
            break;  
        case '/notion/developmentTeam':
            headerTitle = "ZI밋 개발팀 소개";
            component = (
                <iframe src="https://efficacious-ease-5ad.notion.site/ebd/1a54f19e53cc80369c03d332008d5768" 
                        width="100%" 
                        height="900" />
            );
            break;   
        default:
            headerTitle = "로딩 실패";
            component = <div>로딩 실패</div>;
            break;
    }

    return (
        <S.NotionMainLayout>
            <Header title={headerTitle} />
            <S.Content>{component}</S.Content>
        </S.NotionMainLayout>
    );
};

export default NotionMain;
