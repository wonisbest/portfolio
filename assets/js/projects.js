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
            technologies: ['Unreal Engine 5', 'C++'],
            description: "Test Test </p>",
            categories: ['featured', 'unreal', 'c++']
        },
        {
            image: 'assets/images/profile.jpg',
            link: 'https://github.com/wonisbest/Mine',
            title: 'MINE',
            demo: 'https://youtu.be/Vht2Q5bisBM',
            technologies: ['Unreal Engine 5', 'C++'],
            description: "안녕하세요 </p>",
            categories: ['featured', 'unreal', 'c++']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://github.com/abhn/Marvel',
            title: 'Marvel',
            demo: false,
            technologies: ['Android'],
            description: "Attendance marking tool that uses face recognition for marking attendance and firebase for tracking and analytics.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://github.com/abhn/mpw',
            title: 'Master Password',
            demo: 'https://www.nagekar.com/mpw',
            technologies: ['Semantic UI'],
            description: "Master Password is an ingenious password solution that makes your passwords truly impossible to lose.",
            categories: ['featured', 'security']
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
