$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/mentors.jpg',
            link: 'https://github.com/wonisbest/SwordRush',
            title: 'Sword Rush',
            demo: 'https://youtu.be/MkZNuaj4qeY',
            technologies: ['Unreal Engine 5'],
            description: "Unreal Engine의 C++ Replication System을 깊이있게 학습 </p> 모든 액션이 실시간으로 동기화되는 1vs1 온라인 격투 게임을 구현"
            categories: ['featured', 'unreal']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://github.com/wonisbest/Mine',
            title: 'MINE',
            demo: 'https://youtu.be/Vht2Q5bisBM',
            technologies: ['Unreal Engine 5'],
            description: "C++ 역량 심화를 목표로 Unreal Engine을 독학하여 개발한 3D 1인칭 공포게임",
            categories: ['featured', 'unreal']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://github.com/wonisbest/SeaOtterSwimming',
            title: '해엄쳐~!',
            demo: 'https://youtu.be/xlyc4WjxkJQ',
            technologies: ['Unity'],
            description: "3일 이라는 짧은 기간 동안 5명의 팀원과 협업하여 완성한 2D 캐주얼 런게임",
            categories: ['featured', 'unity']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://github.com/wonisbest/BeastTamer',
            title: 'Beast Tamer',
            demo: 'https://youtu.be/GahuWNsCN0o',
            technologies: ['Unity'],
            description: "1인 개발로 완성하여 교내 게임 경진대회에서 우수상을 수상한 3D RPG 프로젝트",
            categories: ['featured', 'unity']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://github.com/wonisbest/SiegeDepence',
            title: '성을 지켜라',
            demo: 'https://youtu.be/V5_1_PTiGNo',
            technologies: ['Unity'],
            description: "Ever wondered how many times a URL has been shared on popular social networks?",
            categories: ['featured', 'unity']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://github.com/abhn/Social-Share-Counts',
            title: 'Social Share Count',
            demo: false,
            technologies: ['Python'],
            description: "Ever wondered how many times a URL has been shared on popular social networks?",
            categories: ['native']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
