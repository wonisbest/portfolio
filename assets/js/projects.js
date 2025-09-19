$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/SwordRush.jpg',
            link: 'https://github.com/wonisbest/SwordRush',
            title: 'Sword Rush',
            demo: 'https://youtu.be/MkZNuaj4qeY',
            technologies: ['Unreal Engine 5', 'C++'],
            description: "온라인 멀티플레이 1대1 3D TPS 격투게임 </p>",
            categories: ['featured', 'unreal', 'c++']
        },
        {
            image: 'assets/images/MINE.jpg',
            link: 'https://github.com/wonisbest/Mine',
            title: 'MINE',
            demo: 'https://youtu.be/Vht2Q5bisBM',
            technologies: ['Unreal Engine 5', 'C++'],
            description: "3D 퍼즐형 공포게임 </p>",
            categories: ['featured', 'unreal', 'c++']
        },
        {
            image: 'assets/images/swimming.jpg',
            link: 'https://github.com/wonisbest/SeaOtterSwimming',
            title: '해엄쳐~!',
            demo: 'https://youtu.be/xlyc4WjxkJQ',
            technologies: ['Unity', 'C#'],
            description: "3일 이라는 짧은 기간 동안 5명의 팀원과 협업하여 완성한 2D 캐주얼 런게임 </p>",
            categories: ['featured', 'unity', 'c#']
        },
        {
            image: 'assets/images/BeastTamer.jpg',
            link: 'https://github.com/wonisbest/BeastTamer',
            title: 'Beast Tamer',
            demo: 'https://youtu.be/GahuWNsCN0o',
            technologies: ['Unity', 'C#'],
            description: "1인 개발로 완성하여 교내 게임 경진대회에서 우수상을 수상한 3D RPG 프로젝트 </p>",
            categories: ['featured', 'unity', 'c#']
        },
        {
            image: 'assets/images/Deffense.jpg',
            link: 'https://github.com/wonisbest/SiegeDepence/tree/main',
            title: '성을 지켜라',
            demo: 'https://youtu.be/V5_1_PTiGNo',
            technologies: ['Unity', 'C#'],
            description: "대학 축제 부스 운영을 목표로 개발한 2인용 VR 디펜스 게임 </p>",
            categories: ['featured', 'unity', 'c#']
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
