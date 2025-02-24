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
                <iframe src="" 
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
                <iframe src="https://efficacious-ease-5ad.notion.site/ebd/315866577ee74dea8d6021230e7fea8b" 
                        width="100%" 
                        height="900" />
            );
            break;
        case '/notion/faq':
            headerTitle = "자주 묻는 질문";
            component = (
                <iframe src="" 
                        width="100%" 
                        height="900" />
            );
            break;
        case '/notion/notificationSetting':
            headerTitle = "알림 설정하는 법";
            component = (
                <iframe src="" 
                        width="100%" 
                        height="900" />
            );
            break;
            case '/notion/meetingGuide':
        headerTitle = "미팅 잘하는 법";
        component = (
            <iframe src="" 
                        width="100%" 
                        height="900" />
        );
        break;
        case '/notion/randomMeetingGuide':
        headerTitle = "랜덤미팅 참여 방법";
        component = (
            <iframe src="" 
                        width="100%" 
                        height="900" />
        );
        break;  
        case '/notion/developmentTeam':
        headerTitle = "ZI밋 개발팀 소개";
        component = (
            <iframe src="" 
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
