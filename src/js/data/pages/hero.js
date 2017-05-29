const getHeroData = () => {
    return {
        code: 'hero',
        company: '',
        logo: ``,
        title: 'Angus MacDonald',
        timeWorked: `
            <a href="mailto:angus@angusmacdonald.ca">
                angus@angusmacdonald.ca</a>`,
        projects: [
            {
                title: 'About Me',
                paragraphs: [
                    `
                Worked on projects using, Django and Angular, for
                handling internal processes under the supervision of
                the CorpEng team.`,
                ],
            },
            {
                title: 'LinkedIn',
                projectLink: 'https://ca.linkedin.com/in/angus-macdonald-34426719',
                projectIcon: 'img/linkedin.svg',
            },
            {
                title: 'GitHub',
                projectLink: 'https://github.com/angusm',
                projectIcon: 'img/github.svg',
            },
            {
                title: 'Email',
                projectLink: 'mailto:angus@angusmacdonald.ca',
                projectIcon: 'img/github.svg',
            },
            {
                title: 'About This Site',
                projectLink: 'mailto:angus@angusmacdonald.ca',
                projectIcon: 'img/github.svg',
            },
        ],
    };
};

export default getHeroData;
