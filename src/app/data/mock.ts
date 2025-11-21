export const CATEGORIES = [
    { id: 'all', label: '전체' },
    { id: 'devops', label: 'DevOps' },
    { id: 'infrastructure', label: '인프라' },
    { id: 'development', label: '개발' },
    { id: 'security', label: '보안' },
    { id: 'data', label: '데이터' },
    { id: 'productivity', label: '생산성/협업' },
];

export const COMPANY_SIZES = [
    { id: 'startup', label: '스타트업 (1-50명)' },
    { id: 'scaleup', label: '스케일업 (51-300명)' },
    { id: 'enterprise', label: '대기업 (300명+)' },
];

export const MOCK_REVIEWS = [
    {
        id: 1,
        solution: 'Slack',
        category: 'productivity',
        company: 'Tech Corp',
        companySize: 'scaleup',
        rating: 4.5,
        metrics: {
            usability: 5,
            efficiency: 5,
            costPerformance: 3,
            vendorStability: 5
        },
        pros: '팀 커뮤니케이션의 표준. 연동성이 정말 좋아서 개발팀에게 필수적입니다.',
        cons: '무료 버전의 메시지 저장 제한이 아쉽고, 알림이 너무 많이 올 때가 있어요.',
        description: '3년째 사용 중인데 없으면 업무가 마비될 정도입니다.',
        problemContext: '이메일과 카카오톡 혼용으로 인해 업무 히스토리가 파편화되고 보안 이슈가 발생했습니다. 또한, 개발 알림(Jira, GitHub)을 실시간으로 받을 창구가 필요했습니다.',
        implementationStory: '기존에는 카카오톡과 이메일을 혼용하다가, 보안과 업무 이력 관리를 위해 전사 도입했습니다. 채널 구조를 팀별, 프로젝트별로 설계하여 도입 초기 혼란을 줄였습니다.',
        automationStory: 'GitHub, Jira, Sentry를 연동하여 알림을 중앙화했습니다. 또한, 점심 메뉴 추천 봇과 휴가 신청 봇을 직접 개발하여 연동함으로써 직원들의 만족도를 높였습니다.',
        coffeeChatAvailable: true,
        contactLink: 'https://open.kakao.com/o/example',
        author: '개발팀 김OO',
        date: '2024.03.15'
    },
    {
        id: 2,
        solution: 'Jira',
        category: 'productivity',
        company: 'StartUp Inc',
        companySize: 'startup',
        rating: 3.8,
        metrics: {
            usability: 3,
            efficiency: 4,
            costPerformance: 3,
            vendorStability: 5
        },
        pros: '기능은 강력하지만 무겁고 복잡합니다. 처음 적응하는데 시간이 좀 걸려요.',
        cons: 'UI가 직관적이지 않고 속도가 느릴 때가 많습니다.',
        description: '애자일 프로세스를 돌리기에는 최적이지만, 가벼운 프로젝트에는 오버스펙인 느낌입니다.',
        problemContext: '스프레드시트로 이슈를 관리하다 보니 히스토리 추적이 어렵고, 개발 진행 상황을 한눈에 파악하기 어려웠습니다.',
        implementationStory: '스프린트 단위의 업무 관리를 위해 도입했습니다. 초기에는 워크플로우가 너무 복잡해서 팀원들이 힘들어했으나, 단순화된 워크플로우로 변경 후 정착되었습니다.',
        automationStory: 'Bitbucket과 연동하여 커밋 시 자동으로 이슈 상태가 변경되도록 설정했습니다. 또한, 스프린트 종료 시 자동으로 리포트가 생성되도록 자동화했습니다.',
        coffeeChatAvailable: false,
        author: 'PM 이OO',
        date: '2024.03.14'
    },
    {
        id: 3,
        solution: 'AWS',
        category: 'infrastructure',
        company: 'Cloud Systems',
        companySize: 'enterprise',
        rating: 4.8,
        metrics: {
            usability: 4,
            efficiency: 5,
            costPerformance: 4,
            vendorStability: 5
        },
        pros: '압도적인 서비스 종류와 안정성. 인프라 구축의 표준입니다.',
        cons: '비용 관리가 어렵고, 서비스가 너무 많아 공부가 필요합니다.',
        description: '스타트업부터 대기업까지 확장성을 고려한다면 최고의 선택입니다.',
        problemContext: '온프레미스 서버의 노후화와 트래픽 급증 시 유연한 대응이 불가능했습니다. 글로벌 서비스 확장을 위해 안정적인 인프라가 필요했습니다.',
        implementationStory: '온프레미스 환경에서 전면 클라우드로 마이그레이션했습니다. 리프트 앤 시프트 방식으로 1차 이전 후, 점진적으로 클라우드 네이티브하게 리팩토링했습니다.',
        automationStory: 'Terraform을 사용하여 모든 인프라를 코드로 관리(IaC)하고 있습니다. GitHub Actions와 연동하여 인프라 변경 사항도 자동으로 배포되도록 파이프라인을 구축했습니다.',
        coffeeChatAvailable: true,
        contactLink: 'mailto:sre@example.com',
        author: 'SRE 박OO',
        date: '2024.03.12'
    },
    {
        id: 4,
        solution: 'Jenkins',
        category: 'devops',
        company: 'Old School Dev',
        companySize: 'scaleup',
        rating: 3.5,
        metrics: {
            usability: 2,
            efficiency: 4,
            costPerformance: 5,
            vendorStability: 4
        },
        pros: '무료이고 플러그인이 많아 커스터마이징이 자유롭습니다.',
        cons: 'UI가 구식이고 설정이 복잡합니다. 관리 포인트가 늘어납니다.',
        description: '오랫동안 사용해온 CI/CD 도구입니다. 최근에는 GitHub Actions로 넘어가는 추세지만 여전히 강력합니다.',
        problemContext: '수동 배포로 인한 휴먼 에러가 잦았고, 배포 시간이 너무 오래 걸렸습니다.',
        implementationStory: '사내 구축형 서버에 설치하여 CI/CD 파이프라인을 구성했습니다. 마스터-슬레이브 구조로 빌드 부하를 분산시켰습니다.',
        automationStory: 'Groovy 스크립트를 사용하여 복잡한 배포 로직을 자동화했습니다. 테스트 실패 시 담당자에게 슬랙 알림을 보내도록 설정했습니다.',
        coffeeChatAvailable: true,
        contactLink: 'https://open.kakao.com/o/jenkins_expert',
        author: 'DevOps 최OO',
        date: '2024.03.10'
    },
    {
        id: 5,
        solution: 'Datadog',
        category: 'devops',
        company: 'Global Biz',
        companySize: 'enterprise',
        rating: 4.7,
        metrics: {
            usability: 5,
            efficiency: 5,
            costPerformance: 2,
            vendorStability: 5
        },
        pros: '시각화가 뛰어나고 통합 모니터링이 강력합니다.',
        cons: '가격이 매우 비쌉니다. 로그 양이 많으면 비용 폭탄을 맞을 수 있습니다.',
        description: '모니터링의 끝판왕. 돈 값은 확실히 합니다.',
        problemContext: 'MSA 환경에서 서비스 간 호출 관계 파악이 어렵고, 장애 발생 시 원인 분석에 너무 많은 시간이 소요되었습니다.',
        implementationStory: '서비스 장애 감지를 위해 도입했습니다. 에이전트 설치만으로 대부분의 지표를 수집할 수 있어 도입이 매우 빨랐습니다.',
        automationStory: '특정 에러율이 임계치를 넘으면 자동으로 PagerDuty를 통해 당직자에게 전화를 걸도록 설정하여 장애 대응 시간을 획기적으로 줄였습니다.',
        coffeeChatAvailable: false,
        author: 'CTO 정OO',
        date: '2024.03.08'
    }
];
