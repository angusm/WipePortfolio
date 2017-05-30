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
                link: 'https://ca.linkedin.com/in/angus-macdonald-34426719',
                icon: 'img/linkedin.svg',
            },
            {
                title: 'GitHub',
                link: 'https://github.com/angusm',
                icon: 'img/github.svg',
            },
            {
                title: 'Email',
                link: 'mailto:angus@angusmacdonald.ca',
                icon: 'img/email.svg',
            },
            {
                class: 'hero-cta',
                linkTarget: '_self',
                link: '#rga',
                icon: 'img/down-chevron.svg',
            },
        ],
    };
};

export default getHeroData;
